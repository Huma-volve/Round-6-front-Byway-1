import chart from "../../../../assets/images/chart.png";

export default function Chart() {
  return (
    <>
      <div className="py-6">
        <h1 className="text-2xl font-semibold">Monthly Revenue Overview</h1>
        <p className="text-sm text-gray-500">
          Select Period:{" "}
          <select title="Select Period" name="period" id="">
            <option value="">All</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </p>
        <div className="w-full">
          <img src={chart} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}
