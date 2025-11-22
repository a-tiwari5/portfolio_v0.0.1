"use client";

import {
  AboutIcon,
  ExperienceIcon,
  ProjectsIcon,
  ContactIcon,
  TerminalIcon,
} from "./icons";
import { useWindow } from "@/contexts/WindowContext";

const HomeScreenDock = () => {
  const { windows, openWindow, restoreWindow } = useWindow();

  const handleIconClick = (
    windowId: "about" | "experience" | "projects" | "contact" | "terminal"
  ) => {
    const window = windows[windowId];
    if (window.isOpen && window.isMinimized) {
      // If window is open but minimized, restore it
      restoreWindow(windowId);
    } else if (!window.isOpen) {
      // If window is closed, open it
      openWindow(windowId);
    }
    // If window is already open and not minimized, do nothing (it's already visible)
  };

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
      {/* Dock container with glassmorphism */}
      <div className="relative px-2 py-2 md:px-4 md:py-4 dock-container">
        <svg style={{ display: "none" }}>
          <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.01"
              numOctaves={2}
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="200"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>

        <div className="flex items-center gap-2 md:gap-4 relative z-10">
          {/* About Icon */}
          <div
            onClick={() => handleIconClick("about")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-150 relative"
          >
            <AboutIcon />
            {windows.about.isOpen && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </div>

          {/* Experience Icon */}
          <div
            onClick={() => handleIconClick("experience")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-150 relative"
          >
            <ExperienceIcon />
            {windows.experience.isOpen && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </div>

          {/* Projects Icon */}
          <div
            onClick={() => handleIconClick("projects")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-150 relative"
          >
            <ProjectsIcon />
            {windows.projects.isOpen && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </div>

          {/* Contact Icon */}
          <div
            onClick={() => handleIconClick("contact")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-150 relative"
          >
            <ContactIcon />
            {windows.contact.isOpen && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </div>

          {/* Terminal Icon */}
          <div
            onClick={() => handleIconClick("terminal")}
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-150 relative"
          >
            <TerminalIcon />
            {windows.terminal.isOpen && (
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenDock;
