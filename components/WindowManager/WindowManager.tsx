"use client";

import { useWindow } from "@/contexts/WindowContext";
import { TerminalWindow } from "@/components/Terminal";
import { TerminalSession } from "@/components/Terminal/TerminalSession";
import { WindowHeader } from "@/components/Window";
import { useDraggable } from "@/hooks/useDraggable";
import AboutMe from "../AboutMe/AboutMe";

interface WindowProps {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface WindowContainerProps {
  windowId: "terminal" | "about" | "experience" | "projects" | "contact";
  windowState: WindowProps;
  dragPosition: { x: number; y: number };
  isDragging: boolean;
  dragRef: React.RefObject<HTMLDivElement | null>;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
  className?: string;
  baseWidth?: string;
  baseHeight?: string;
}

function WindowContainer({
  windowState,
  dragPosition,
  isDragging,
  dragRef,
  onMouseDown,
  children,
  className = "",
  baseWidth = "w-[95vw] md:w-[600px]",
  baseHeight = "h-[60vh] md:h-[400px]",
}: WindowContainerProps) {
  const { isMaximized, isMinimized, zIndex } = windowState;

  // Disable transitions during drag for smoother performance
  const transitionClasses = isDragging
    ? ""
    : "transition-all duration-300 ease-in-out";
  const baseClasses = "absolute";
  const maximizedClasses = isMaximized
    ? "!fixed !inset-0 !w-full !h-full !transform-none"
    : `${baseWidth} ${baseHeight}`;
  const visibilityClasses = isMinimized ? "invisible" : "visible";
  const cursorClasses =
    isDragging && !isMaximized ? "cursor-grabbing" : "cursor-default";

  return (
    <div
      ref={dragRef}
      className={`${baseClasses} ${transitionClasses} ${maximizedClasses} ${visibilityClasses} ${cursorClasses} ${
        !isMaximized ? "max-md:!transform-[translate(-50%,-50%)]" : ""
      } ${className}`}
      style={{
        zIndex,
        ...(!isMaximized && {
          left: "50%",
          top: "50%",
          transform: `translate(calc(-50% + ${dragPosition.x}px), calc(-50% + ${dragPosition.y}px))`,
          willChange: isDragging ? "transform" : "auto",
        }),
      }}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
}

export function WindowManager() {
  const { windows, focusWindow } = useWindow();

  // Draggable hooks for each window
  const terminalDrag = useDraggable({ initialPosition: { x: 0, y: 0 } });
  const aboutDrag = useDraggable({ initialPosition: { x: -100, y: -50 } });
  const experienceDrag = useDraggable({ initialPosition: { x: 100, y: -50 } });
  const projectsDrag = useDraggable({ initialPosition: { x: -100, y: 50 } });
  const contactDrag = useDraggable({ initialPosition: { x: 100, y: 50 } });

  const handleWindowMouseDown =
    (
      windowId: "terminal" | "about" | "experience" | "projects" | "contact",
      dragHandler: (e: React.MouseEvent<HTMLDivElement>) => void,
      isMaximized: boolean
    ) =>
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Don't handle if clicking on a button (window controls)
      const target = e.target as HTMLElement;
      if (target.closest("button")) {
        return;
      }

      if (!isMaximized) {
        dragHandler(e);
      }
      focusWindow(windowId);
    };

  return (
    <>
      {/* Terminal Window */}
      {windows.terminal.isOpen && (
        <WindowContainer
          windowId="terminal"
          windowState={windows.terminal}
          dragPosition={terminalDrag.position}
          isDragging={terminalDrag.isDragging}
          dragRef={terminalDrag.elementRef}
          onMouseDown={handleWindowMouseDown(
            "terminal",
            terminalDrag.handleMouseDown,
            windows.terminal.isMaximized
          )}
          baseWidth="w-[95vw] md:w-[40vw]"
          baseHeight="h-[70vh] md:min-h-[80vh]"
        >
          <TerminalWindow>
            <TerminalSession />
          </TerminalWindow>
        </WindowContainer>
      )}

      {/* About Window */}
      {windows.about.isOpen && (
        <WindowContainer
          windowId="about"
          windowState={windows.about}
          dragPosition={aboutDrag.position}
          isDragging={aboutDrag.isDragging}
          dragRef={aboutDrag.elementRef}
          onMouseDown={handleWindowMouseDown(
            "about",
            aboutDrag.handleMouseDown,
            windows.about.isMaximized
          )}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          <AboutMe windowId="about" />
        </WindowContainer>
      )}

      {/* Experience Window */}
      {windows.experience.isOpen && (
        <WindowContainer
          windowId="experience"
          windowState={windows.experience}
          dragPosition={experienceDrag.position}
          isDragging={experienceDrag.isDragging}
          dragRef={experienceDrag.elementRef}
          onMouseDown={handleWindowMouseDown(
            "experience",
            experienceDrag.handleMouseDown,
            windows.experience.isMaximized
          )}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          <AboutMe initialTab="Experience" windowId="experience" />
        </WindowContainer>
      )}

      {/* Projects Window */}
      {windows.projects.isOpen && (
        <WindowContainer
          windowId="projects"
          windowState={windows.projects}
          dragPosition={projectsDrag.position}
          isDragging={projectsDrag.isDragging}
          dragRef={projectsDrag.elementRef}
          onMouseDown={handleWindowMouseDown(
            "projects",
            projectsDrag.handleMouseDown,
            windows.projects.isMaximized
          )}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          <AboutMe initialTab="Projects" windowId="projects" />
        </WindowContainer>
      )}

      {/* Contact Window */}
      {windows.contact.isOpen && (
        <WindowContainer
          windowId="contact"
          windowState={windows.contact}
          dragPosition={contactDrag.position}
          isDragging={contactDrag.isDragging}
          dragRef={contactDrag.elementRef}
          onMouseDown={handleWindowMouseDown(
            "contact",
            contactDrag.handleMouseDown,
            windows.contact.isMaximized
          )}
          className="bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          <AboutMe initialTab="Contact" windowId="contact" />
        </WindowContainer>
      )}
    </>
  );
}
