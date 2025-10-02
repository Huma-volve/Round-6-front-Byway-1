import star from "@/assets/images/icon.png";
import { Button } from "@/components/ui/button";

export default function Reports() {
  return (
    <>
      <div>
        <h5 className="text-[32px] font-medium text-[#587DBD]">
          Reports & Analytics
        </h5>
        <p className="text-[20px] font-normal text-[#0F172A]">
          Track platform performance with real-time insights and exportable
          reports.
        </p>
        <div className="ms-10 my-16">
          <div className="flex space-x-10 items-center">
            <div className="py-[12px] px-[16px] h-[59px] bg-white rounded-[8px]">
              <p className="text-2xl font-medium text-[#0F172A]">
                Learners: 1,450
              </p>
            </div>
            <div className="py-[12px] px-[16px] h-[59px] bg-white rounded-[8px]">
              <p className="text-2xl font-medium text-[#0F172A]">
                Instructors: 120
              </p>
            </div>
            <div className="py-[12px] px-[16px] h-[59px] bg-white rounded-[8px]">
              <p className="text-2xl font-medium text-[#0F172A]">
                Courses: 310
              </p>
            </div>
            <div className="py-[12px] px-[16px] h-[59px] bg-white rounded-[8px]">
              <p className="text-2xl font-medium text-[#0F172A]">
                Earnings: $24,000
              </p>
            </div>
          </div>
          <div className="w-1/3 space-y-3 my-10 p-5 bg-white rounded-[8px]">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium">Course</p>
              <p className="text-2xl font-medium">Rating</p>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium">UI/UX Design</p>
              <div className="flex items-center space-x-2">
                <img src={star} alt="starIcon" />
                <p className="text-2xl font-medium">4.9</p>
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium">JavaScript</p>
              <div className="flex items-center space-x-2">
                <img src={star} alt="starIcon" />
                <p className="text-2xl font-medium">4.9</p>
              </div>
            </div>
          </div>
          <div>
            <Button className="py-3 px-4 h-[58px] bg-[#587dbd] text-2xl font-medium cursor-pointer">Download as PDF</Button>
          </div>
        </div>
      </div>
    </>
  );
}
