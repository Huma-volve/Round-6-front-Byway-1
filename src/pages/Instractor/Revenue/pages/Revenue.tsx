import TransactionsTable from "../components/TransactionsTable";
import search from "../../../../assets/images/SearchIcon.png";
import filter from "../../../../assets/images/FilterTransactions.png";
import ChartComponent from "../components/ChartComponent ";

function Revenue() {
  return (
    <div className="flex justify-center font-sans">
      <div className="flex flex-col gap-5 w-full md:w-[90%] lg:w-[75%] xl:w-[60%] p-4">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col">
            <h1 className="font-semibold text-xl text-gray-900">
              Revenue Analytics
            </h1>

            <div className="flex flex-col sm:flex-row sm:justify-between mt-2 gap-2">
              <div className="flex flex-col">
                <h2 className="font-semibold text-base text-gray-900">
                  Revenue
                </h2>
                <p className="text-[12px] text-gray-disable">
                  Get top insights about your performance
                </p>
              </div>

              <button className="bg-secondary-main text-white rounded-[8px] px-4 py-2 w-fit">
                Get Paid
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="w-full sm:w-[48%] lg:w-[30%] px-4 py-3 border border-gray-border rounded-[8px] flex flex-col">
              <h1 className="font-semibold text-gray-900 text-2xl">
                + $24,340
              </h1>
              <p className="text-[14px] text-gray-700">Total Profits</p>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] px-4 py-3 border border-gray-border rounded-[8px] flex flex-col">
              <h1 className="font-semibold text-gray-900 text-2xl">
                + $44,340
              </h1>
              <p className="text-[14px] text-gray-700">Available Balance</p>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] px-4 py-3 border border-gray-border rounded-[8px] flex flex-col">
              <h1 className="font-semibold text-gray-900 text-2xl">+ $98.76</h1>
              <p className="text-[14px] text-gray-700">Last Transaction</p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className=""><ChartComponent /></div>

        <h2 className="font-semibold text-base text-gray-900">Transactions</h2>

        {/* Search and Filter  */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
          <div className="relative w-full sm:w-auto">
            <input
              type="search"
              className="w-full border border-gray-border rounded-[8px] p-2.5 pr-10"
              placeholder="Search User"
            />
            <img
              src={search}
              alt="Search icon"
              className="absolute right-2 top-2.5 w-5 h-5"
            />
          </div>

          <div className="flex items-center gap-2">
            <h3 className="text-base text-gray-900">Filter</h3>
            <img src={filter} alt="Filter icon" className="h-[14px] w-[20px]" />
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
}

export default Revenue;
