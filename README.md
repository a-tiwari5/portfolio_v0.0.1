# Portfolio - Interactive Terminal

A modern portfolio website featuring an interactive terminal interface built with Next.js 15, React, and TypeScript.

## ✨ Features

- 🖥️ **Interactive Terminal UI** - macOS-style terminal with custom caret
- 🔊 **Keystroke Sound Effects** - Authentic typing experience with audio feedback
- 📱 **Responsive Design** - Works seamlessly across all devices
- ⚡ **Modern Tech Stack** - Built with Next.js 15 and TypeScript
- 🎨 **Tailwind CSS** - Beautiful, utility-first styling
- 🏗️ **Clean Architecture** - Follows industry best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed architecture documentation.

```
portfolio/
├── app/              # Next.js app router
├── components/       # React components
├── hooks/           # Custom React hooks
├── constants/       # Configuration constants
├── types/           # TypeScript definitions
└── public/          # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Roboto Mono (terminal), Inter (general)

## 🧩 Key Components

### Terminal Components
- **TerminalWindow**: Main container with macOS-style window
- **TerminalHeader**: Window control buttons (close, minimize, maximize)
- **TerminalInput**: Custom input with animated caret

### Custom Hooks
- **useKeyboardSound**: Manages keystroke sound effects

## 🎨 Customization

### Changing Terminal Prompt
Edit `constants/terminal.ts`:

```typescript
PROMPT: {
  USERNAME: "your-username",
  HOSTNAME: "your-hostname",
  SYMBOL: "$", // or ">", "#", etc.
}
```

### Adjusting Sound Volume
Modify volume when calling the hook:

```typescript
const { handleKeyDown } = useKeyboardSound({ volume: 0.5 }); // 50% volume
```

### Custom Colors
Update `constants/terminal.ts` or use Tailwind classes.

## 📚 Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

### Project Documentation
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed architecture guide

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
