export const ContactIcon = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="contact-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4da5ff" />
          <stop offset="100%" stopColor="#0066ff" />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="432" height="432" rx="110" fill="url(#contact-bg)" />
      <rect x="116" y="176" width="280" height="180" rx="26" fill="#ffffff" />
      <path
        d="M132 192l124 100 124-100"
        fill="none"
        stroke="#d6d9e2"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M132 344l88-78"
        fill="none"
        stroke="#d6d9e2"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        d="M372 344l-88-78"
        fill="none"
        stroke="#d6d9e2"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </svg>
  );
};

