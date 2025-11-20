"use client";

import { useState, useRef, useCallback, useEffect, MouseEvent } from "react";

interface Position {
  x: number;
  y: number;
}

interface DraggableOptions {
  initialPosition?: Position;
  bounds?: "viewport" | { top: number; left: number; right: number; bottom: number };
}

export function useDraggable(options: DraggableOptions = {}) {
  const { initialPosition = { x: 0, y: 0 }, bounds = "viewport" } = options;
  
  const [position, setPosition] = useState<Position>(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  
  const elementRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<Position>({ x: 0, y: 0 });
  const currentPositionRef = useRef<Position>(initialPosition);
  const rafIdRef = useRef<number | null>(null);

  const getBounds = useCallback(() => {
    if (bounds === "viewport") {
      return {
        top: 0,
        left: 0,
        right: window.innerWidth,
        bottom: window.innerHeight,
      };
    }
    return bounds;
  }, [bounds]);

  const constrainPosition = useCallback((x: number, y: number) => {
    if (!elementRef.current) return { x, y };

    const rect = elementRef.current.getBoundingClientRect();
    const boundaries = getBounds();

    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const viewportCenterX = boundaries.right / 2;
    const viewportCenterY = boundaries.bottom / 2;

    // Calculate constraints
    const minX = boundaries.left - viewportCenterX + halfWidth;
    const maxX = boundaries.right - viewportCenterX - halfWidth;
    const minY = boundaries.top - viewportCenterY + halfHeight;
    const maxY = boundaries.bottom - viewportCenterY - halfHeight;

    // Apply constraints
    const constrainedX = Math.max(minX, Math.min(maxX, x));
    const constrainedY = Math.max(minY, Math.min(maxY, y));

    return { x: constrainedX, y: constrainedY };
  }, [getBounds]);

  const handleMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    // Only allow dragging from header/title bar areas
    const target = e.target as HTMLElement;
    
    // Don't start drag if clicking on a button or inside a button
    if (target.closest('button')) {
      return;
    }
    
    const isHeaderArea = 
      target.closest('[data-drag-handle]') !== null;
    
    if (!isHeaderArea) return;

    e.preventDefault();
    e.stopPropagation();
    
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - currentPositionRef.current.x,
      y: e.clientY - currentPositionRef.current.y,
    };
  }, []);

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    if (!isDragging) return;

    // Cancel any pending animation frame
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Use requestAnimationFrame for smooth updates
    rafIdRef.current = requestAnimationFrame(() => {
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;

      const constrained = constrainPosition(newX, newY);
      
      // Update ref immediately for next frame
      currentPositionRef.current = constrained;
      
      // Batch state update
      setPosition(constrained);
    });
  }, [isDragging, constrainPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    
    // Clean up any pending animation frame
    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  // Set up and clean up event listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      
      // Prevent text selection while dragging
      document.body.style.userSelect = 'none';
      document.body.style.cursor = 'grabbing';
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      
      // Restore text selection
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return {
    position,
    isDragging,
    elementRef,
    handleMouseDown,
    setPosition,
  };
}
