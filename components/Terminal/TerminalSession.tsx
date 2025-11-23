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
import {
  ABOUT_CONTENT,
  EXPERIENCE_CONTENT,
  PROJECTS_CONTENT,
  SKILLS_CONTENT,
  CONTACT_CONTENT,
} from "@/components/AboutMe/constants";

// Helper functions to format data
const formatExperience = () => {
  return EXPERIENCE_CONTENT.experiences
    .map(
      (exp) =>
        `Title: ${exp.title}\nCompany: ${exp.company}\nDate: ${exp.dateText}\nDetails:\n${exp.bullets
          .map((b) => `- ${b}`)
          .join("\n")}`
    )
    .join("\n\n");
};

const formatProjects = () => {
  return PROJECTS_CONTENT.projects
    .map(
      (proj) =>
        `Name: ${proj.name}\nDescription: ${proj.description}\nTags: ${proj.tags.join(
          ", "
        )}\nLinks: ${proj.links.join(", ")}`
    )
    .join("\n\n");
};

const formatSkills = () => {
  return SKILLS_CONTENT.categories
    .map(
      (cat) =>
        `${cat.title}:\n${cat.skills.map((s) => `- ${s.name}`).join("\n")}`
    )
    .join("\n\n");
};

const formatLanguages = () => {
  const languages = SKILLS_CONTENT.categories.find(
    (cat) => cat.title === "Languages"
  );
  return languages
    ? languages.skills.map((s) => `- ${s.name}`).join("\n")
    : "No languages found.";
};

const formatContact = () => {
  return `Email: ${CONTACT_CONTENT.email}\nLocation: ${
    CONTACT_CONTENT.location
  }\nSocials:\n${CONTACT_CONTENT.socials
    .map((s) => `- ${s.name}: ${s.url}`)
    .join("\n")}`;
};

// Define built-in commands and their static responses
const BUILT_IN_COMMANDS: Record<string, string | (() => string)> = {
  help: `Available commands:\nabout, education, experience, projects, skills, languages, certifications, talks, leadership, resume, contact, creator, all, clear`,
  about: ABOUT_CONTENT.bio,
  education: "Education info not configured.",
  experience: formatExperience,
  projects: formatProjects,
  skills: formatSkills,
  languages: formatLanguages,
  certifications: "Certifications info not configured.",
  resume: () => {
    window.open(
      "/assets/documents/Adarsh_Tiwari_-Software_Development_Engineer_-2024.pdf (8) (1).pdf",
      "_blank"
    );
    return "Opening resume...";
  },
  contact: formatContact,
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
      <div className="flex-1 pb-2">
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
