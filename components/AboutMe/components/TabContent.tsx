import { TabType } from "../types";
import { AboutTab } from "./AboutTab";
import { SkillsTab } from "./SkillsTab";
import { ExperienceTab } from "./ExperienceTab";
import { ProjectsTab } from "./ProjectsTab";
import { ContactTab } from "./ContactTab";

interface TabContentProps {
  activeTab: TabType;
}

export const TabContent = ({ activeTab }: TabContentProps) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "About":
        return <AboutTab />;
      case "Skills":
        return <SkillsTab />;
      case "Experience":
        return <ExperienceTab />;
      case "Projects":
        return <ProjectsTab />;
      case "Contact":
        return <ContactTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="flex flex-col overflow-auto flex-[3] border border-[#E5E5EA]">
      <header className="h-12 px-4 py-2 text-black flex items-center border-b border-[#E5E5EA]">
        <h2 className="text-lg font-bold">{activeTab}</h2>
      </header>
      {renderTabContent()}
    </div>
  );
};
