"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type WindowType =
  | "terminal"
  | "about"
  | "experience"
  | "projects"
  | "contact";

export interface WindowState {
  id: WindowType;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface WindowContextType {
  windows: Record<WindowType, WindowState>;
  openWindow: (id: WindowType) => void;
  closeWindow: (id: WindowType) => void;
  minimizeWindow: (id: WindowType) => void;
  maximizeWindow: (id: WindowType) => void;
  restoreWindow: (id: WindowType) => void;
  focusWindow: (id: WindowType) => void;
  getActiveWindows: () => WindowState[];
  getMinimizedWindows: () => WindowState[];
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

const initialWindows: Record<WindowType, WindowState> = {
  terminal: {
    id: "terminal",
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    zIndex: 1,
  },
  about: {
    id: "about",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 0,
  },
  experience: {
    id: "experience",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 0,
  },
  projects: {
    id: "projects",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 0,
  },
  contact: {
    id: "contact",
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 0,
  },
};

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] =
    useState<Record<WindowType, WindowState>>(initialWindows);
  const [nextZIndex, setNextZIndex] = useState(2);

  const openWindow = (id: WindowType) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        zIndex: nextZIndex,
      },
    }));
    setNextZIndex((prev) => prev + 1);
  };

  const closeWindow = (id: WindowType) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimized: false,
        isMaximized: false,
      },
    }));
  };

  const minimizeWindow = (id: WindowType) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }));
  };

  const maximizeWindow = (id: WindowType) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMaximized: !prev[id].isMaximized,
        zIndex: nextZIndex,
      },
    }));
    setNextZIndex((prev) => prev + 1);
  };

  const restoreWindow = (id: WindowType) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: false,
        zIndex: nextZIndex,
      },
    }));
    setNextZIndex((prev) => prev + 1);
  };

  const focusWindow = (id: WindowType) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        zIndex: nextZIndex,
      },
    }));
    setNextZIndex((prev) => prev + 1);
  };

  const getActiveWindows = () => {
    return Object.values(windows)
      .filter((w) => w.isOpen && !w.isMinimized)
      .sort((a, b) => a.zIndex - b.zIndex);
  };

  const getMinimizedWindows = () => {
    return Object.values(windows).filter((w) => w.isOpen && w.isMinimized);
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
        focusWindow,
        getActiveWindows,
        getMinimizedWindows,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindow() {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error("useWindow must be used within a WindowProvider");
  }
  return context;
}
