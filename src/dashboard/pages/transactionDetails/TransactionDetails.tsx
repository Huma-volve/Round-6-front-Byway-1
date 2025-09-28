function TransactionDetails() {
  return (
    <div className="bg-[#EBEBEB] py-8 px-4 sm:px-6 w-full min-h-screen flex flex-col gap-[30px]">
      <p className="font-[500] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[#587DBD] text-center sm:text-left">
        Withdrawal Details
      </p>
      <div className="flex flex-col gap-[15px]">
        <div className="bg-white py-[14px] px-[10px] flex justify-center sm:justify-start items-center font-[500] text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-fit rounded-[10px]">
          Instructor: Nour Ali
        </div>
        <div className="bg-white py-[14px] px-[10px] flex justify-center sm:justify-start items-center font-[500] text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-fit rounded-[10px]">
          Request Date: 28 Jul 2025
        </div>
        <div className="bg-white py-[14px] px-[10px] flex justify-center sm:justify-start items-center font-[500] text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-fit rounded-[10px]">
          Amount: $150.00
        </div>
        <div className="bg-white py-[14px] px-[10px] flex justify-center sm:justify-start items-center font-[500] text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-fit rounded-[10px]">
          Method: Bank Transfer
        </div>
        <div className="bg-white py-[14px] px-[10px] flex justify-center sm:justify-start items-center font-[500] text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-fit rounded-[10px]">
          Bank Name: CIB
        </div>
        <div className="bg-white py-[14px] px-[10px] flex justify-center sm:justify-start items-center font-[500] text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-fit rounded-[10px]">
          Account Number: **** 1423
        </div>
        <div className="bg-white py-[14px] px-[10px] flex justify-center sm:justify-start items-center font-[500] text-[16px] sm:text-[18px] md:text-[20px] w-full sm:w-fit rounded-[10px]">
          Status: <span className="text-[#E26E02]">Pending</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
