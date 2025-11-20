import Image from "next/image";
import { SKILLS_CONTENT } from "../constants";

export const SkillsTab = () => {
  return (
    <div className="flex flex-col overflow-auto p-6 gap-6">
      {SKILLS_CONTENT.categories.map((category) => (
        <div key={category.title} className="w-full">
          <h3 className="text-lg font-bold text-black/80 mb-3 px-1">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-[#E5E5EA] hover:bg-[#F5F5F5] hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-xs font-medium text-black/90 text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
