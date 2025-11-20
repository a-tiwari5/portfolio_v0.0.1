/**
 * Terminal Configuration Constants
 * Centralized configuration for terminal behavior and appearance
 */

export const TERMINAL_CONFIG = {
  // Audio settings
  AUDIO: {
    KEYSTROKE_SOUND_PATH: "/assets/sounds/key-stroke-hard-press.wav",
    DEFAULT_VOLUME: 0.3,
  },

  // Terminal prompt
  PROMPT: {
    USERNAME: "byte-knight",
    HOSTNAME: "adarsh",
    SYMBOL: "%",
  },

  // Terminal window colors (macOS style)
  WINDOW_COLORS: {
    CLOSE: "#D83B3B",
    MINIMIZE: "#E2C423",
    MAXIMIZE: "#03CA0B",
  },

  // Caret settings
  CARET: {
    COLOR: "#03CA0B",
    BLINK_SPEED: "1s",
  },
} as const;

/**
 * Keys that should trigger keystroke sound
 */
export const SOUND_TRIGGER_KEYS = [
  "Backspace",
  "Delete",
  "Enter",
  "Space",
] as const;

/**
 * Generate terminal prompt string
 */
export const getTerminalPrompt = () => {
  const { USERNAME, HOSTNAME, SYMBOL } = TERMINAL_CONFIG.PROMPT;
  return `${USERNAME}@${HOSTNAME} ~ ${SYMBOL}`;
};

