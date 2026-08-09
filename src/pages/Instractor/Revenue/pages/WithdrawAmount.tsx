function WithdrawAmount() {
  return (
    <div className="  py-9  items-center flex flex-col  ">
      <div className="flex px-3 md:px-0 md:w-[70%] flex-col text-gray-900 gap-4 font-sans">
        <h1 className=" font-semibold  text-xl"> Withdraw Amount</h1>
        <h1>
          Available Balance:<span className="font-semibold">+ $44,340</span>
        </h1>
        <h1>
          Minimum Withdrawal:<span className="font-semibold"> $40,340</span>
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className=" font-semibold  text-lg">Enter amount </h1>
          <input className="border-[1px] w-[20%] rounded-[8px] text-[14px]  p-4 border-gray-border outline-none " />
          <p className="text-sm text-[#727272]">
            You can withdraw any amount between $40,340 and $44,340
          </p>
        </div>
        <button
          // onClick={() => navigate("")}
          className="bg-[#5BAE61] md:w-[20%] rounded-[8px] font-sans font-semibold text-[18px] cursor-pointer hover:bg-[#035c09] text-white py-2 px-6 "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default WithdrawAmount;
