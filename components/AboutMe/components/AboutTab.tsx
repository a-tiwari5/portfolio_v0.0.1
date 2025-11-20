import Image from "next/image";
import { ABOUT_CONTENT } from "../constants";

export const AboutTab = () => {
  const { avatar, name, title, location, bio, systemInfo } = ABOUT_CONTENT;

  return (
    <div className="flex flex-col overflow-auto items-center p-3 sm:p-4 md:p-6 max-w-2xl mx-auto w-full">
      <div className="bg-gray-200 rounded-full min-w-[60px] min-h-[60px] w-[60px] h-[60px] sm:min-w-[70px] sm:min-h-[70px] sm:w-[70px] sm:h-[70px] p-2 overflow-hidden mb-3 sm:mb-4">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          width={avatar.width}
          height={avatar.height}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-bold text-black/80">{name}</h3>
      <p className="text-sm sm:text-base text-black/90 mt-1">{title}</p>
      <p className="text-xs sm:text-sm text-black/90 mt-0.5">{location}</p>
      <p className="text-xs sm:text-sm text-black/90 mt-3 sm:mt-4 text-center sm:text-left leading-relaxed px-2 sm:px-0">
        {bio}
      </p>
      <hr className="w-full border-t border-[#E5E5EA] my-3 sm:my-4" />
      <ul className="w-full flex flex-col gap-2 text-xs sm:text-sm text-black/90">
        {systemInfo.map((info) => (
          <li key={info.label} className="flex items-center gap-2">
            <span className="font-medium min-w-[60px] sm:min-w-[70px]">
              {info.label}
            </span>
            <span className="flex-1 text-center">{info.value}</span>
          </li>
        ))}
        <hr className="w-full border-t border-[#E5E5EA] my-2 sm:my-4" />
      </ul>
    </div>
  );
};
