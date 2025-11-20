"use client";

import { useState, useEffect } from "react";
import { NavigationSidebar, TabContent } from "./components";
import { TabType } from "./types";
import { WindowType } from "@/contexts/WindowContext";

interface AboutMeProps {
  initialTab?: TabType;
  windowId?: WindowType;
}

const AboutMe = ({ initialTab = "About", windowId = "about" }: AboutMeProps) => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  // Update active tab when initialTab prop changes
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <section className="flex h-full w-full">
      <NavigationSidebar 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
        windowId={windowId}
      />
      <TabContent activeTab={activeTab} />
    </section>
  );
};

export default AboutMe;
