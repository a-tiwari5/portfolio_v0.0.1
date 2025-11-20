# Project Structure

This document outlines the architecture and organization of the portfolio project.

## Directory Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page (main entry point)
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
│
├── components/                   # React Components
│   └── Terminal/                # Terminal-related components
│       ├── index.ts             # Barrel export
│       ├── TerminalWindow.tsx   # Main terminal container
│       ├── TerminalHeader.tsx   # macOS-style header
│       └── TerminalInput.tsx    # Input with custom caret
│
├── hooks/                        # Custom React Hooks
│   └── useKeyboardSound.ts      # Keystroke sound effect hook
│
├── constants/                    # Application Constants
│   └── terminal.ts              # Terminal configuration
│
├── types/                        # TypeScript Type Definitions
│   └── terminal.ts              # Terminal-related types
│
├── public/                       # Static Assets
│   └── assets/
│       └── sounds/              # Audio files
│           ├── key-stroke-hard-press.wav
│           └── key-stroke-light.wav
│
└── [config files]               # Configuration files
    ├── tsconfig.json
    ├── next.config.ts
    ├── package.json
    └── eslint.config.mjs
```

## Architecture Principles

### 1. **Separation of Concerns**
- **Components**: Pure UI components with minimal logic
- **Hooks**: Reusable business logic and side effects
- **Constants**: Centralized configuration
- **Types**: Type safety throughout the application

### 2. **Component Organization**
- Each feature has its own directory (e.g., `Terminal/`)
- Related components are co-located
- Barrel exports (`index.ts`) for clean imports

### 3. **Code Quality Standards**
- **TypeScript**: Full type safety with interfaces
- **Documentation**: JSDoc comments for all exported functions
- **Naming Conventions**:
  - Components: PascalCase (`TerminalInput`)
  - Hooks: camelCase with `use` prefix (`useKeyboardSound`)
  - Constants: UPPER_SNAKE_CASE (`TERMINAL_CONFIG`)
  - Types: PascalCase with descriptive suffixes (`TerminalInputProps`)

### 4. **Import Aliases**
Using `@/` alias for cleaner imports:
```typescript
import { TerminalWindow } from "@/components/Terminal";
import { useKeyboardSound } from "@/hooks/useKeyboardSound";
import { TERMINAL_CONFIG } from "@/constants/terminal";
```

## Component Hierarchy

```
Home (page.tsx)
└── TerminalWindow
    ├── TerminalHeader
    └── TerminalInput
```

## Data Flow

1. **User Input** → `TerminalInput` captures keyboard events
2. **Sound Effect** → `useKeyboardSound` hook plays audio
3. **State Management** → Local state in `page.tsx`
4. **Rendering** → Custom caret follows text position

## Best Practices Implemented

✅ **Modularity**: Small, focused components and hooks  
✅ **Reusability**: Components accept props for customization  
✅ **Type Safety**: Comprehensive TypeScript types  
✅ **Performance**: Optimized with `useCallback` and `useRef`  
✅ **Maintainability**: Clear documentation and comments  
✅ **Scalability**: Easy to add new features or components  
✅ **Accessibility**: ARIA labels and semantic HTML  

## Adding New Features

### Adding a New Component
1. Create component file in appropriate directory
2. Add TypeScript types to `types/` folder
3. Export from barrel file (`index.ts`)
4. Document with JSDoc comments

### Adding a New Hook
1. Create hook file in `hooks/` directory
2. Prefix name with `use`
3. Add return type interface
4. Document parameters and return values

### Adding Constants
1. Add to appropriate constants file
2. Use `as const` for type safety
3. Group related constants in objects

## Testing Strategy (Future)
- Unit tests for hooks
- Component tests with React Testing Library
- E2E tests for user flows

## Performance Considerations
- Lazy loading for large components
- Memoization with `useMemo` and `useCallback`
- Audio optimization with ref cleanup
- Minimal re-renders with proper state management

