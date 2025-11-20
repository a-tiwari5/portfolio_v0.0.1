/**
 * TerminalInput Component (Client Component)
 * Custom terminal input with blinking caret and keyboard sound support
 * Note: This must be a client component due to refs and hooks
 */

"use client";

import { useRef, useState } from "react";
import { getTerminalPrompt } from "@/constants/terminal";
import { useKeyboardSound } from "@/hooks/useKeyboardSound";
import type { TerminalInputProps } from "@/types/terminal";
import { TypingEffect } from "./TypingEffect";

export function TerminalInput({
  value,
  onChange,
  onKeyDown,
  autoFocus = true,
  enableSound = true,
}: TerminalInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [typingComplete, setTypingComplete] = useState(false);
  const { handleKeyDown: handleKeyboardSound } = useKeyboardSound({
    enabled: enableSound,
  });

  // Initialization lines for typing effect
  const initLines = [
    { text: "Initializing byte-knight v1.0...", className: "" },
    {
      text: "Channeling legacy of Babbage, Lovelace, Turing... OK.",
      className: "mt-2",
    },
    { text: "Parsing lineage of data... OK.", className: "mt-1" },
    { text: "Protocol established. Welcome.", className: "mt-2" },
  ];

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyDownInternal = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Play keyboard sound
    handleKeyboardSound(e);

    // Call parent's onKeyDown if provided
    onKeyDown?.(e);
  };

  return (
    <div className="font-roboto-mono text-xs w-full">
      {/* Initialization text with typing effect */}
      <TypingEffect
        lines={initLines}
        typingSpeed={30}
        delayBetweenLines={300}
        onComplete={() => setTypingComplete(true)}
      />

      {/* Show input only after typing is complete */}
      {typingComplete && (
        <div className="grid grid-cols-[auto_1fr] gap-2 w-full">
          {/* Terminal prompt */}
          <span className="font-bold text-black whitespace-nowrap">
            {getTerminalPrompt()}
          </span>

          {/* Input area */}
          <div
            className="relative cursor-text min-h-[16px] overflow-hidden"
            onClick={handleWrapperClick}
          >
            {/* Visible text content and custom caret */}
            <div className="text-black leading-[16px] break-all">
              <span className="select-none pointer-events-none whitespace-pre-wrap">
                {value}
              </span>
              <span className="terminal-caret" />
            </div>

            {/* Invisible input for keyboard capture */}
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDownInternal}
              className="absolute inset-0 opacity-0 cursor-text w-full h-full"
              autoFocus={autoFocus}
              aria-label="Terminal input"
            />
          </div>
        </div>
      )}
    </div>
  );
}
