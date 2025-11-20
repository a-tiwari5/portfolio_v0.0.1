/**
 * TypingEffect Component
 * Displays text with a typing animation effect, line by line
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingEffectProps {
  lines: {
    text: string;
    className?: string;
  }[];
  typingSpeed?: number; // milliseconds per character
  delayBetweenLines?: number; // milliseconds between lines
  onComplete?: () => void;
}

export function TypingEffect({
  lines,
  typingSpeed = 30,
  delayBetweenLines = 200,
  onComplete,
}: TypingEffectProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const currentLine = lines[currentLineIndex].text;
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < currentLine.length) {
        setDisplayedText(currentLine.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        // Move to next line after delay
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          setDisplayedText("");
        }, delayBetweenLines);
      }
    };

    typeChar();
  }, [currentLineIndex, lines, typingSpeed, delayBetweenLines, onComplete]);

  return (
    <div className="text-black mb-4 whitespace-pre-line">
      <AnimatePresence mode="wait">
        {lines.map((line, index) => {
          if (index < currentLineIndex) {
            // Already completed lines
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={line.className}
              >
                {line.text}
              </motion.div>
            );
          } else if (index === currentLineIndex) {
            // Currently typing line
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={line.className}
              >
                {displayedText}
                <span className="animate-pulse">▊</span>
              </motion.div>
            );
          }
          return null;
        })}
      </AnimatePresence>
    </div>
  );
}
