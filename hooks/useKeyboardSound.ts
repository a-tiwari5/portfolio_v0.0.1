/**
 * useKeyboardSound Hook
 * Custom hook for managing keyboard keystroke sound effects
 */

import { useRef, useEffect, useCallback } from "react";
import { TERMINAL_CONFIG, SOUND_TRIGGER_KEYS } from "@/constants/terminal";
import type { UseKeyboardSoundOptions, UseKeyboardSoundReturn } from "@/types/terminal";

export function useKeyboardSound(
  options: UseKeyboardSoundOptions = {}
): UseKeyboardSoundReturn {
  const {
    soundPath = TERMINAL_CONFIG.AUDIO.KEYSTROKE_SOUND_PATH,
    volume = TERMINAL_CONFIG.AUDIO.DEFAULT_VOLUME,
    enabled = true,
  } = options;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!enabled) return;

    // Initialize audio element
    audioRef.current = new Audio(soundPath);
    audioRef.current.volume = volume;

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundPath, volume, enabled]);

  const playSound = useCallback(() => {
    if (!enabled || !audioRef.current) return;

    try {
      // Reset audio to start for rapid keystrokes
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        // Silently handle autoplay restrictions
        console.warn("Audio playback failed:", error);
      });
    } catch (error) {
      console.warn("Error playing keystroke sound:", error);
    }
  }, [enabled]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Play sound for character keys or specific action keys
      const shouldPlaySound =
        e.key.length === 1 || SOUND_TRIGGER_KEYS.includes(e.key as any);

      if (shouldPlaySound) {
        playSound();
      }
    },
    [playSound]
  );

  return {
    playSound,
    handleKeyDown,
  };
}

