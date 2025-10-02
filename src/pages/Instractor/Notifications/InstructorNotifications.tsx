function InstructorNotifications() {
  return (
    <div className="flex justify-center py-8 ">
      <div className="flex flex-col gap-3 p-2 md:p-0 lg:w-[50%] ">
        {/* Card */}
        <div className="border-[1px] h-[100px] rounded-[8px] p-3.5 border-[#7272722E] ">
          <div className="flex justify-between items-center">
            <h1 className="font-medium font-sans text-sm text-[#0F172A] ">
              Mohamed Ali enrolled in your course 'Design Thinking
            </h1>
            <h1 className="text-[#727272] text-[12px]">Just Now</h1>
          </div>
        </div>
        {/* Card */}
        <div className="border-[1px] h-[100px] rounded-[8px] p-3.5 border-[#7272722E] ">
          <div className="flex justify-between items-center">
            <h1 className="font-medium font-sans text-sm text-[#0F172A] ">
              Mohamed Ali enrolled in your course 'Design Thinking
            </h1>
            <h1 className="text-[#727272] text-[12px]">8 minutes ago</h1>
          </div>
        </div>
        {/* Card */}
        <div className="border-[1px] h-[100px] rounded-[8px] p-3.5 border-[#7272722E] ">
          <div className="flex justify-between items-center">
            <h1 className="font-medium font-sans text-sm text-[#0F172A] ">
              Student Sara Ahmed submitted her assignment for 'Lesson 4
            </h1>
            <h1 className="text-[#727272] text-[12px]">15 minutes ago</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorNotifications;
