/**
 * Terminal Type Definitions
 * TypeScript interfaces and types for terminal components
 */

export interface TerminalInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoFocus?: boolean;
  enableSound?: boolean;
}

export interface TerminalWindowProps {
  children: React.ReactNode;
  className?: string;
}

export interface UseKeyboardSoundOptions {
  soundPath?: string;
  volume?: number;
  enabled?: boolean;
}

export interface UseKeyboardSoundReturn {
  playSound: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
