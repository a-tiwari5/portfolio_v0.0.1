import AboutIcon from "@/public/assets/about.svg";
import ExperienceIcon from "@/public/assets/experience.svg";
import ProjectsIcon from "@/public/assets/projects.svg";
import ContactIcon from "@/public/assets/contact.svg";
import SkillsIcon from "@/public/assets/skills.svg";
import { Tab } from "./types";

export const TABS: Tab[] = [
  {
    label: "About",
    href: "/about",
    icon: <AboutIcon width={24} height={24} />,
  },
  {
    label: "Skills",
    href: "/skills",
    icon: <SkillsIcon width={24} height={24} />,
  },
  {
    label: "Experience",
    href: "/experience",
    icon: <ExperienceIcon width={24} height={24} />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <ProjectsIcon width={24} height={24} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <ContactIcon width={24} height={24} />,
  },
];

export const ABOUT_CONTENT = {
  avatar: {
    src: "/assets/about-me/images/user-avatar.png",
    alt: "User Avatar",
    width: 50,
    height: 50,
  },
  name: "Adarsh Tiwari",
  title: "Software & AI Engineer",
  location: "Gurugram, India",
  bio: "I'm a software and AI engineer specializing in building production-grade AI systems and full-stack applications. I work extensively with LLMs, RAG pipelines, real-time interaction systems, and scalable frontend architectures. My focus is on creating fast, reliable products that blend intuitive UX with powerful AI capabilities.",
  systemInfo: [
    { label: "Version", value: "AdarshOS 2.4.1" },
    { label: "Status", value: "Running Smoothly" },
    { label: "Build", value: "TypeScript, React, Next.js" },
  ],
};

export const SKILLS_CONTENT = {
  categories: [
    {
      title: "Languages",
      skills: [
        {
          name: "Python",
          icon: "/assets/about-me/icons/skills/python_icon.svg",
        },
        {
          name: "TypeScript",
          icon: "/assets/about-me/icons/skills/typescript_icon.svg",
        },
        {
          name: "HTML5",
          icon: "/assets/about-me/icons/skills/html5_icon.svg",
        },
        {
          name: "CSS",
          icon: "/assets/about-me/icons/skills/css_icon.svg",
        },
        {
          name: "SCSS",
          icon: "/assets/about-me/icons/skills/scss_icon.svg",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: "/assets/about-me/icons/skills/react_icon.svg",
        },
        {
          name: "Next.js",
          icon: "/assets/about-me/icons/skills/next.js_icon.svg",
        },
        {
          name: "Redux",
          icon: "/assets/about-me/icons/skills/redux_icon.svg",
        },
        {
          name: "Tailwind",
          icon: "/assets/about-me/icons/skills/tailwind_icon.svg",
        },
        {
          name: "Material UI",
          icon: "/assets/about-me/icons/skills/material ui_icon.svg",
        },
        {
          name: "Webpack",
          icon: "/assets/about-me/icons/skills/webpack_icon.svg",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "/assets/about-me/icons/skills/node.js_icon.svg",
        },
        {
          name: "FastAPI",
          icon: "/assets/about-me/icons/skills/fastapi_icon.svg",
        },
        {
          name: "Express",
          icon: "/assets/about-me/icons/skills/express_icon.svg",
        },
        {
          name: "Socket.IO",
          icon: "/assets/about-me/icons/skills/socket.io_icon.svg",
        },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        {
          name: "MongoDB",
          icon: "/assets/about-me/icons/skills/mongodb_icon.svg",
        },
        {
          name: "Firebase",
          icon: "/assets/about-me/icons/skills/firebase_icon.svg",
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        {
          name: "OpenAI",
          icon: "/assets/about-me/icons/skills/openai_icon.svg",
        },
        {
          name: "Gen AI",
          icon: "/assets/about-me/icons/skills/genai_icon.svg",
        },
        {
          name: "LangChain",
          icon: "/assets/about-me/icons/skills/langchain_icon.svg",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        {
          name: "Git",
          icon: "/assets/about-me/icons/skills/git_icon.svg",
        },
        {
          name: "GitHub",
          icon: "/assets/about-me/icons/skills/github_icon.svg",
        },
        {
          name: "Bitbucket",
          icon: "/assets/about-me/icons/skills/bitbucket_icon.svg",
        },
        {
          name: "Jira",
          icon: "/assets/about-me/icons/skills/jira_icon.svg",
        },
      ],
    },
  ],
};

export const EXPERIENCE_CONTENT = {
  experiences: [
    {
      company: "Preplaced",
      title: "Senior Software and AI Engineer",
      dateText: "Jan 2024 - Present",
      bullets: [
        "Architected and developed end-to-end web applications using React, Next.js, FastAPI, and Python, implementing modular frontend components, optimized API design, and robust data flow across the stack",
        "Implemented a learning session feature using LiveKit, enabling users to engage in real-time voice conversations with LeecoAI across various learning topics.",
        "Developed a robust STT → LLM → TTS pipeline integrating speech recognition, prompt processing, and speech generation to mimic a real-time human mentor experience.",
        "Developed AI-driven systems integrating LLMs, custom prompt pipelines, and RAG-based retrieval layers, leveraging vector databases and caching to deliver low-latency, contextually relevant responses.",
        "Engineered LeecoAI Mentor, a React-based browser extension leveraging DOM parsing and event listeners to dynamically extract problem context from platforms like LeetCode, GeeksforGeeks, and YouTube.",
        "Integrated LLM-powered inference pipelines with optimized prompt construction and context retrieval, enabling real-time code explanations and adaptive learning recommendations directly within the user interface.",
        "Designed and optimized a modular prompt-engineering framework, improving consistency of AI responses across multiple learning paths and reducing hallucinations by ~20%.",
        "Developed a robust A/B experimentation framework to evaluate and optimize AI models and prompting strategies, running 8–10 concurrent tests that improved trial conversion rates from 7% to 12%.",
        "Awarded Employee of the Month twice in a row for consistently delivering high-impact features and exceeding performance expectations.",
        "Reduced coding bugs by 50% and technical debt by implementing robust code review processes at Peplaced.",
        "Awarded for outstanding contribution to a major release at Preplaced, recognizing exceptional performance and impact in delivering a critical project.",
        "Increased conversion rates through A/B testing strategies implemented in collaboration with Product Managers at Preplaced.",
        "Coordinated successful product releases, managing dependencies and ensuring on-time delivery with zero critical issues.",
        "Mentored intern developers, fostering continuous learning and improvement.",
      ],
    },
    {
      company: "Tensorgo",
      title: "Full Stack Developer",
      dateText: "Jan 2023 - Dec 2023",
      bullets: [
        "Engineered end-to-end product features using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring seamless integration between client and server layers.",
        "Developed modular, reusable React components with optimized rendering patterns to improve UI performance.",
        "Designed and implemented RESTful APIs with Express.js and MongoDB, focusing on efficient data modeling, indexing, and query optimization.",
        "Collaborated with cross-functional teams to deliver scalable, production-grade full-stack solutions aligned with product and performance goals.",
      ],
    },
  ],
};

export const PROJECTS_CONTENT = {
  projects: [
    {
      name: "LeecoAI",
      description:
        "An AI-powered learning platform that provides personalized learning paths, real-time guidance, and interactive lessons for faster learning.",
      links: ["https://www.leeco.ai/"],
      tags: ["AI", "Education", "LLM", "Real-time"],
    },
    {
      name: "LeecoAI Extension",
      description:
        "A browser extension that integrates LeecoAI into coding and learning platforms, offering context-aware assistance, instant explanations, and smart session guidance.",
      links: [
        "https://chromewebstore.google.com/detail/leeco-ai-your-everyday-le/phbhomcaiapjeoghkpegkkccfidalfaa",
      ],
      tags: ["Browser Extension", "AI", "Chrome"],
    },
    {
      name: "EmytPlus",
      description:
        "A B2B analytics dashboard for sales teams, HR, and managers to analyze Zoom and other meeting platforms. Provides insights on engagement, performance, and communication.",
      links: ["https://emytplus.com/"],
      tags: ["Analytics", "B2B", "Dashboard"],
    },
    {
      name: "StreamOn",
      description:
        "A streaming platform project showcasing real-time video streaming capabilities with modern web technologies.",
      links: ["https://stream-on-snowy.vercel.app/"],
      tags: ["Streaming", "Real-time", "Web"],
    },
    {
      name: "Express CRUD Generator",
      description:
        "A backend utility project that creates CRUD boilerplate for Express-based apps, accelerating development workflow.",
      links: [],
      tags: ["Backend", "Node.js", "Utility"],
    },
    {
      name: "Omni Food",
      description:
        "A modern, responsive frontend food-themed UI project with beautiful design and smooth user experience.",
      links: ["https://omnifood-desktop-nine.vercel.app/"],
      tags: ["Frontend", "UI/UX", "Responsive"],
    },
  ],
};

export const CONTACT_CONTENT = {
  title: "Let's Connect",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
  email: "adarshtiwari0395@gmail.com",
  location: "Gurugram, India",
  socials: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/tiwariat",
      handle: "@adarsh-tiwari",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/a-tiwari5",
      handle: "@adarsh-tiwari",
    },
    {
      name: "Email",
      icon: "email",
      url: "mailto:adarshtiwari0395@gmail.com",
      handle: "adarshtiwari0395@gmail.com",
    },
  ],
};
