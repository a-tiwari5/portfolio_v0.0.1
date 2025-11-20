export const TerminalIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="terminal-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2b2f36" />
          <stop offset="100%" stopColor="#0f1114" />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="432" height="432" rx="110" fill="url(#terminal-bg)" />
      <path
        d="M150 200l60 56-60 56"
        stroke="#53ff9c"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="256"
        y1="312"
        x2="360"
        y2="312"
        stroke="#53ff9c"
        strokeWidth="28"
        strokeLinecap="round"
      />
    </svg>
  );
};

