import { PROJECTS_CONTENT } from "../constants";

export const ProjectsTab = () => {
  return (
    <div className="flex flex-col overflow-auto p-3 sm:p-4 md:p-6">
      <div className="max-w-4xl w-full mx-auto space-y-4 sm:space-y-5 md:space-y-6">
        {PROJECTS_CONTENT.projects.map((project, index) => (
          <div
            key={`${project.name}-${index}`}
            className="relative bg-white rounded-lg sm:rounded-xl border border-[#E5E5EA] p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
          >
            {/* Project Name and Tags */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
              <h3 className="text-lg font-bold text-black/80 leading-tight">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-[#F5F5F5] text-black/90 rounded-md border border-[#E5E5EA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-black/90 leading-relaxed mb-3 sm:mb-4">
              {project.description}
            </p>

            {/* Links */}
            {project.links.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-black/80 hover:bg-black rounded-lg transition-colors duration-200"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Project
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
