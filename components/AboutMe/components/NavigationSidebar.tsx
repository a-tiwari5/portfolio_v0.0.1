import { WindowHeader } from "@/components/Window/WindowHeader";
import { TABS } from "../constants";
import { TabType } from "../types";
import { WindowType } from "@/contexts/WindowContext";

interface NavigationSidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  windowId: WindowType;
}

export const NavigationSidebar = ({
  activeTab,
  onTabChange,
  windowId,
}: NavigationSidebarProps) => {
  return (
    <div className="h-full w-full flex-1 min-w-[100px] sm:min-w-[140px] md:min-w-[180px]">
      <WindowHeader windowId={windowId} title="About" hideTitle={true} />
      <nav className="flex flex-col gap-1.5 sm:gap-2 bg-[#F5F5F5] h-full px-1.5 sm:px-2 py-1.5 sm:py-2">
        {TABS.map((tab) => (
          <li
            key={tab.label}
            onClick={() => onTabChange(tab.label)}
            className={`text-black text-xs sm:text-sm hover:bg-[#E5E5EA] px-2 py-1.5 sm:py-2 rounded-md transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
              activeTab === tab.label ? "bg-[#E5E5EA]" : ""
            }`}
          >
            <span className="shrink-0">{tab.icon}</span>
            <span className="truncate">{tab.label}</span>
          </li>
        ))}
      </nav>
    </div>
  );
};
