"use client";

import { WindowProvider } from "@/contexts/WindowContext";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <WindowProvider>{children}</WindowProvider>;
}
