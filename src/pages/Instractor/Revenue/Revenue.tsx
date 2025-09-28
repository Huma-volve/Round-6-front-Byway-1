import TransactionsTable from "./TransactionsTable";

function Revenue() {
  return (
    <div className="flex justify-center font-sans">
      <div className=" flex flex-col gap-5  w-[60%]  p-4">
        <div className=" flex flex-col gap-5 w-2/3">
          <div className="flex flex-col">
            <h1 className=" font-semibold text-xl text-gray-900 ">
              Revenue Analytics
            </h1>
            <div className="flex justify-between">
              <div className="flex flex-col ">
                <h1 className=" font-semibold text-base text-gray-900 ">
                  Revenue
                </h1>
                <p className="text-[12px] text-gray-disable">
                  Get top insights about your performance
                </p>
              </div>

              <button className="bg-secondary-main text-white rounded-[8px] px-2">
                Get paid
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            {/* Square */}
            <div className="px-4 py-3 border-gray-border rounded-[8px] border flex flex-col ">
              <h1 className="font-semibold text-gray-900 text-2xl">
                + $24,340
              </h1>
              <p className="text-[14px] text-gray-700"> Total Profits</p>
            </div>
            {/* Square */}
            <div className="px-4 py-3 border-gray-border rounded-[8px] border flex flex-col ">
              <h1 className="font-semibold text-gray-900 text-2xl">
                + $44,340
              </h1>
              <p className="text-[14px] text-gray-700"> available balance</p>
            </div>
            {/* Square */}
            <div className="px-4 py-3 border-gray-border rounded-[8px] border flex flex-col ">
              <h1 className="font-semibold text-gray-900 text-2xl">+ $98.76</h1>
              <p className="text-[14px] text-gray-700"> Last Transaction</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] bg-blue-100">
image
        </div>
        <TransactionsTable/>
      </div>
    </div>
  );
}

export default Revenue;
