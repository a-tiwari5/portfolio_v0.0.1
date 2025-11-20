import { EXPERIENCE_CONTENT } from "../constants";

export const ExperienceTab = () => {
  return (
    <div className="flex flex-col overflow-auto p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl w-full mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {EXPERIENCE_CONTENT.experiences.map((experience, index) => (
          <div
            key={`${experience.company}-${index}`}
            className="relative bg-white rounded-lg sm:rounded-xl border border-[#E5E5EA] p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Company and Title */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-black/80 leading-tight">
                  {experience.company}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-black/90 mt-1 leading-snug">
                  {experience.title}
                </p>
              </div>
              {experience.dateText && (
                <div className="text-xs sm:text-sm text-black/90 sm:text-right whitespace-pre-line sm:shrink-0">
                  {experience.dateText}
                </div>
              )}
            </div>

            {/* Divider */}
            <hr className="border-t border-[#E5E5EA] mb-3 sm:mb-4" />

            {/* Bullet Points */}
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {experience.bullets.map((bullet, bulletIndex) => (
                <li
                  key={bulletIndex}
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-black/90 leading-relaxed"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/40 mt-1.5 sm:mt-2 shrink-0" />
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
