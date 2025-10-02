import photo from "../../../assets/images/9bbcf2a8f6d1f753b286332b007b2076174bf01a.png";
import cover from "../../../assets/images/46d2a2e63f8edfbb3b98e709fc5a9c081abd6897.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Star } from "lucide-react";

export default function CourseDetails() {
  return (
    <div className="flex flex-col gap-[30px] px-4 sm:px-6 md:px-10">
      <Breadcrumb className="pl-[50px]">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/instructor/profile">Profile</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/instructor/courses">My Course</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/instructor/coursedetails" className="text-[#2563EB]">
              Course Details
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <img src={cover} className="w-full rounded-[12px]" />

      <div className="flex flex-col gap-4">
        <p className="font-[600] text-[20px] sm:text-[28px] md:text-[36px] text-[#1E1E1E] leading-snug">
          Introduction to user interface and user experience design
        </p>
        <p className="font-[500] text-[16px] sm:text-[20px] md:text-[32px] text-[#727272] max-w-[1000px] leading-snug">
          Begin your journey in user interface and user experience design.
          You'll learn to design wireframes, user flows, and interactive
          prototypes using Figma.
        </p>
        <p className="font-[500] text-[16px] sm:text-[20px] md:text-[24px] text-[#1E1E1E]">
          Instructor: Omnya Ali{" "}
        </p>
      </div>

      <div className="font-[500] text-[20px] sm:text-[26px] md:text-[32px] py-[11px] flex bg-white border border-[#3D5DAB] rounded-[20px] w-full sm:max-w-[396px] justify-center items-center">
        Lessons:
      </div>

      <div className="flex flex-col gap-[20px] w-full max-w-[686px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[20px] mb-[20px]">
          <img src={cover} className="w-full sm:w-[260px] rounded-[8px]" />
          <p className="font-[500] text-[18px] sm:text-[20px] md:text-[24px]">
            ✅ Lesson 1: Introduction to UI/UX
          </p>
        </div>
        <hr />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[20px] mb-[20px]">
          <img src={cover} className="w-full sm:w-[260px] rounded-[8px]" />
          <p className="font-[500] text-[18px] sm:text-[20px] md:text-[24px]">
            ✅ Lesson 2: Design Principles
          </p>
        </div>
        <hr />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[20px] mb-[20px]">
          <img src={cover} className="w-full sm:w-[260px] rounded-[8px]" />
          <p className="font-[500] text-[18px] sm:text-[20px] md:text-[24px]">
            ✅ Lesson 3: Wireframing
          </p>
        </div>
        <hr />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[20px] mb-[20px]">
          <img src={cover} className="w-full sm:w-[260px] rounded-[8px]" />
          <p className="font-[500] text-[18px] sm:text-[20px] md:text-[24px]">
            🔲 Lesson 4: Prototyping
          </p>
        </div>
        <hr />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[20px] mb-[20px]">
          <img src={cover} className="w-full sm:w-[260px] rounded-[8px]" />
          <p className="font-[500] text-[18px] sm:text-[20px] md:text-[24px]">
            🔲 Lesson 5: User Testing
          </p>
        </div>
        <hr />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[20px] mb-[20px]">
          <img src={cover} className="w-full sm:w-[260px] rounded-[8px]" />
          <p className="font-[500] text-[18px] sm:text-[20px] md:text-[24px]">
            🔲 Lesson 6: Final Project
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] ">
        <div className="w-full rounded-[16px] bg-white border border-[#E2E8F0] flex flex-col p-4 gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
              <div className="flex items-center gap-3">
                <img
                  src={photo}
                  className="size-[50px] sm:size-[60px] rounded-full"
                />
                <p className="font-[500] text-[16px] sm:text-[20px]">
                  Mohamed Ali
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-[600] text-[12px] sm:text-[14px] text-[#727272]">
                  (1200 Ratings)
                </p>
                <div className="flex items-center gap-1">
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                </div>
              </div>
            </div>

            <p className="font-[400] text-[12px] sm:text-[13px] text-[#334155] whitespace-nowrap">
              Reviewed on 22nd March, 2024
            </p>
          </div>

          <p className="font-[400] text-[#334155] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-full sm:max-w-[850px]">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </p>
        </div>
        <div className="w-full rounded-[16px] bg-white border border-[#E2E8F0] flex flex-col p-4 gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
              <div className="flex items-center gap-3">
                <img
                  src={photo}
                  className="size-[50px] sm:size-[60px] rounded-full"
                />
                <p className="font-[500] text-[16px] sm:text-[20px]">
                  Mohamed Ali
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <p className="font-[600] text-[12px] sm:text-[14px] text-[#727272]">
                  (1200 Ratings)
                </p>
                <div className="flex items-center gap-1">
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                  <Star className="size-[14px] sm:size-[15px] text-[#EAB308]" />
                </div>
              </div>
            </div>

            <p className="font-[400] text-[12px] sm:text-[13px] text-[#334155] whitespace-nowrap">
              Reviewed on 22nd March, 2024
            </p>
          </div>

          <p className="font-[400] text-[#334155] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-full sm:max-w-[850px]">
            I was initially apprehensive, having no prior design experience. But
            the instructor, John Doe, did an amazing job of breaking down
            complex concepts into easily digestible modules. The video lectures
            were engaging, and the real-world examples really helped solidify my
            understanding.
          </p>
        </div>
      </div>
    </div>
  );
}
