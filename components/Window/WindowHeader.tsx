/**
 * WindowHeader Component (Client Component)
 * Generic macOS-style window header with control buttons
 */

"use client";

import { useWindow, WindowType } from "@/contexts/WindowContext";
import { useCallback, useMemo } from "react";

interface WindowButton {
  id: "close" | "minimize" | "maximize";
  label: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
}

interface WindowHeaderProps {
  windowId: WindowType;
  title: string;
  className?: string;
  hideTitle?: boolean;
}

export function WindowHeader({
  windowId,
  title,
  className = "",
  hideTitle = false,
}: WindowHeaderProps) {
  const { closeWindow, minimizeWindow, maximizeWindow } = useWindow();

  // Memoize button configuration
  const windowButtons: WindowButton[] = useMemo(
    () => [
      {
        id: "close",
        label: "Close",
        bgColor: "bg-[#FF5D5B]",
        borderColor: "border-[#CF544D]",
        icon: (
          <div className="window-btn-icon w-[6px] h-[6px]">
            <span className="absolute w-[6px] h-[0.75px] bg-[#460100] top-1/2 left-0 rotate-45" />
            <span className="absolute w-[6px] h-[0.75px] bg-[#460100] top-1/2 left-0 -rotate-45" />
          </div>
        ),
      },
      {
        id: "minimize",
        label: "Minimize",
        bgColor: "bg-[#FFBB39]",
        borderColor: "border-[#CFA64E]",
        icon: (
          <span className="window-btn-icon w-[50%] h-px bg-[#460100] rounded-[0.5px]" />
        ),
      },
      {
        id: "maximize",
        label: "Maximize",
        bgColor: "bg-[#00CD4E]",
        borderColor: "border-[#0EA642]",
        icon: (
          <div className="window-btn-icon w-[6px] h-[6px]">
            <span className="absolute w-[2px] h-[0.75px] bg-[#024D0F] top-px left-0 -rotate-45" />
            <span className="absolute w-[2px] h-[0.75px] bg-[#024D0F] top-px right-0 rotate-45" />
            <span className="absolute w-[2px] h-[0.75px] bg-[#024D0F] bottom-px left-0 rotate-45" />
            <span className="absolute w-[2px] h-[0.75px] bg-[#024D0F] bottom-px right-0 -rotate-45" />
          </div>
        ),
      },
    ],
    []
  );

  // Memoize button click handler
  const handleButtonClick = useCallback(
    (e: React.MouseEvent, buttonId: "close" | "minimize" | "maximize") => {
      // Stop propagation to prevent triggering drag
      e.stopPropagation();

      switch (buttonId) {
        case "close":
          closeWindow(windowId);
          break;
        case "minimize":
          minimizeWindow(windowId);
          break;
        case "maximize":
          maximizeWindow(windowId);
          break;
      }
    },
    [windowId, closeWindow, minimizeWindow, maximizeWindow]
  );

  return (
    <nav
      data-drag-handle
      className={`bg-[#F5F5F5] h-12 w-full flex items-center px-4 relative ${className}`}
    >
      {/* Control buttons */}
      <ul className="flex items-center gap-2 relative z-10">
        {windowButtons.map((button) => (
          <li key={button.id}>
            <button
              onClick={(e) => handleButtonClick(e, button.id)}
              className={`window-btn h-4 w-4 rounded-full relative cursor-pointer overflow-hidden border ${button.bgColor} ${button.borderColor}`}
              aria-label={button.label}
              type="button"
            >
              {button.icon}
            </button>
          </li>
        ))}
      </ul>

      {/* Window title - centered */}
      {!hideTitle && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <span className="text-sm font-bold text-black select-none">
            {title}
          </span>
        </div>
      )}
    </nav>
  );
}
