export type TabType = "About" | "Skills" | "Experience" | "Projects" | "Contact";

export interface Tab {
  label: TabType;
  href: string;
  icon: React.ReactNode;
}

