/**
 * TerminalSession Component (Client Component)
 * Manages terminal session state and input
 * This is the only client component in the terminal feature
 */

"use client";

import { useState } from "react";
import { TerminalInput } from "./components/TerminalInput/TerminalInput";
import { TypingEffect } from "./TypingEffect";

// Define built-in commands and their static responses
const BUILT_IN_COMMANDS: Record<string, string | (() => string)> = {
  help: `Available commands:\nabout, education, experience, projects, skills, languages, certifications, talks, leadership, resume, contact, creator, all, clear`,
  about: `Adarsh Tiwari is a Software & AI Engineer, currently at Preplaced, with 2.8 years of experience.`,
  education: "Education info not configured.",
  experience: "Experience info not configured.",
  projects: "Projects info not configured.",
  skills: "Skills info not configured.",
  languages: "Languages info not configured.",
  certifications: "Certifications info not configured.",
  talks: "Talks info not configured.",
  leadership: "Leadership info not configured.",
  resume: "Resume download not implemented.",
  contact:
    "Contact: adarshtiwari0395@gmail.com\nLinkedIn: https://www.linkedin.com/in/tiwariat",
  creator: "Creator: Adarsh Tiwari",
  all: "Use each command to get specific info.",
  clear: () => "__CLEAR__", // Special value
};

type Turn = { prompt: string; response: string };

export function TerminalSession() {
  const [inputValue, setInputValue] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]); // history as pairs
  const [isLoading, setIsLoading] = useState(false);

  // Handle command or prompt submission
  const handleCommand = async (userInput: string) => {
    const commandKey = userInput.trim().toLowerCase();
    const builtin = BUILT_IN_COMMANDS[commandKey];
    setInputValue("");
    if (builtin) {
      const response = typeof builtin === "function" ? builtin() : builtin;
      if (response === "__CLEAR__") {
        setTurns([]);
        return;
      }
      setTurns((prev) => [...prev, { prompt: userInput, response }]);
    } else {
      setIsLoading(true);
      setTurns((prev) => [...prev, { prompt: userInput, response: "" }]); // placeholder for ongoing
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userMessage: userInput }),
        });
        const data = await res.json();
        setTurns((prev) => {
          // Update the last turn's response
          const all = [...prev];
          all[all.length - 1] = {
            ...all[all.length - 1],
            response: data.reply || "[No response from AI]",
          };
          return all;
        });
      } catch (e) {
        setTurns((prev) => {
          const all = [...prev];
          all[all.length - 1] = {
            ...all[all.length - 1],
            response: "[Error communicating with AI]",
          };
          return all;
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() && !isLoading) {
      handleCommand(inputValue.trim());
    }
  };

  const [typingComplete, setTypingComplete] = useState(false);

  // Initialization lines for typing effect
  const initLines = [
    { text: "Initializing byte-knight v1.0...", className: "" },
    {
      text: "Channeling legacy of Babbage, Lovelace, Turing... OK.",
      className: "mt-2",
    },
    { text: "Parsing lineage of data... OK.", className: "mt-1" },
    { text: "Protocol established. Welcome.", className: "mt-2" },
    { text: "", className: "mt-4" },
    {
      text: `I am Byte Knight, an AI built to present the work of Adarsh Tiwari.
  Type 'help' for a list of commands, or ask me a question in plain English.`,
    },
  ];

  return (
    <div className="flex flex-col h-full w-full font-roboto-mono text-xs">
      {/* Chat/terminal history rendered as grouped prompt/response pairs */}
      {/* Terminal input stays at bottom */}
      <TypingEffect
        lines={initLines}
        typingSpeed={30}
        delayBetweenLines={300}
        onComplete={() => setTypingComplete(true)}
      />
      <div className="flex-1 overflow-y-auto pb-2">
        {turns.map((turn, idx) => (
          <div key={idx} className="mb-2">
            <div className="grid grid-cols-[auto_1fr] gap-2 w-full">
              {/* Terminal prompt */}
              <span className="font-bold text-black whitespace-nowrap">$</span>
              <span className="text-black leading-[16px] break-all whitespace-pre-wrap">
                {turn.prompt}
              </span>
            </div>
            {turn.response && (
              <div className="grid grid-cols-[auto_1fr] gap-2 w-full mt-1">
                <span />
                <span className="text-black leading-[16px] break-all whitespace-pre-wrap">
                  {turn.response}
                </span>
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="grid grid-cols-[auto_1fr] gap-2 w-full mb-2">
            <span className="font-bold text-black whitespace-nowrap">$</span>
            <span className="text-gray-400">AI is typing...</span>
          </div>
        )}
      </div>
      {typingComplete && (
        <div className="mt-auto">
          <TerminalInput
            value={inputValue}
            onChange={setInputValue}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}
