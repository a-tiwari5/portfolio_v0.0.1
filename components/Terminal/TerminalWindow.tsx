/**
 * TerminalWindow Component (Server Component)
 * Main terminal window container with header and content area
 * This is a server component for better performance
 */

import { WindowHeader } from "@/components/Window";
import { TERMINAL_CONFIG } from "@/constants/terminal";
import type { TerminalWindowProps } from "@/types/terminal";

export function TerminalWindow({
  children,
  className = "",
}: TerminalWindowProps) {
  const { USERNAME, HOSTNAME } = TERMINAL_CONFIG.PROMPT;
  const title = `${USERNAME}@${HOSTNAME}`;

  return (
    <main
      className={`flex w-full h-full flex-col rounded-lg overflow-hidden bg-white sm:items-start shadow-[0_2px_10px_0_rgba(0,0,0,0.25)] ${className}`}
    >
      <WindowHeader windowId="terminal" title={title} />
      <section className="p-2 w-full flex-1 overflow-auto">{children}</section>
    </main>
  );
}
