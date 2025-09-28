import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
export default function CourseDetails() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex items-center pl-6 gap-[4px] sm:gap-[6px] md:gap-[8px]  flex-wrap">
        <NavLink
          to="/addlink"
          className={({ isActive }) =>
            isActive
              ? "text-[10px] sm:text-[12px] md:text-[14px] font-[400] text-[#2563EB]"
              : "text-[10px] sm:text-[12px] md:text-[14px] font-[400]"
          }
        >
          Profile
        </NavLink>
        <ChevronRight className="size-[16px] sm:size-[18px] md:size-[20px]" />
        <NavLink
          to="/addlink"
          className={({ isActive }) =>
            isActive
              ? "text-[10px] sm:text-[12px] md:text-[14px] font-[400] text-[#2563EB]"
              : "text-[10px] sm:text-[12px] md:text-[14px] font-[400]"
          }
        >
          My Course
        </NavLink>
        <ChevronRight className="size-[16px] sm:size-[18px] md:size-[20px]" />
        <NavLink
          to="/coursedetails"
          className={({ isActive }) =>
            isActive
              ? "text-[10px] sm:text-[12px] md:text-[14px] font-[400] text-[#2563EB]"
              : "text-[10px] sm:text-[12px] md:text-[14px] font-[400]"
          }
        >
          Course Details
        </NavLink>
      </div>
    </div>
  );
}
