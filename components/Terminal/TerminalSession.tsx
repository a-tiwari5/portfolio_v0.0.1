/**
 * TerminalSession Component (Client Component)
 * Manages terminal session state and input
 * This is the only client component in the terminal feature
 */

"use client";

import { useState } from "react";
import { TerminalInput } from "./TerminalInput";

export function TerminalSession() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle Enter key for command execution
    if (e.key === "Enter" && inputValue.trim()) {
      console.log("Command entered:", inputValue);
      // TODO: Process command here
      // setInputValue(""); // Clear input after command
    }
  };

  return (
    <TerminalInput
      value={inputValue}
      onChange={setInputValue}
      onKeyDown={handleKeyDown}
    />
  );
}

