export const ProjectsIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="proj-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#31d78f" />
          <stop offset="100%" stopColor="#0a9b5b" />
        </linearGradient>
      </defs>
      <rect
        x="40"
        y="40"
        width="432"
        height="432"
        rx="110"
        fill="url(#proj-bg)"
      />
      <path
        d="M132 190c0-16 12-28 28-28h90l24 32h106c16 0 28 12 28 28v134c0 16-12 28-28 28H160c-16 0-28-12-28-28V190z"
        fill="#ffffff"
      />
      <path
        d="M214 246l-40 40 40 40"
        fill="none"
        stroke="#21b575"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M298 246l40 40-40 40"
        fill="none"
        stroke="#21b575"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
