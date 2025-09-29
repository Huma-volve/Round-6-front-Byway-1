import OutletLayout from "@/dashboard/components/OutletLayout";
import StateCard from "@/dashboard/components/StateCard";
import Chart from "./components/Chart";
import DataTable from "@/dashboard/components/DataTable";

const statisticsData: {
  id: number;
  value: string;
  title: string;
}[] = [
  {
    id: 1,
    value: "4200",
    title: "Active Learners",
  },
  {
    id: 2,
    value: "240",
    title: "Active Instructors",
  },
  {
    id: 3,
    value: "380",
    title: "Published Courses",
  },
  {
    id: 4,
    value: "$102,000",
    title: "Total Revenue",
  },
];

const topRatedCoursesData: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    description: "UI/UX Design",
    title: "Instructor: Omnya Ali ⭐ 4.9 (1,200 students)",
  },
  {
    id: 2,
    description: "JavaScript",
    title: "Instructor: Ola Mostafa ⭐ 4.9 (1,300 students)",
  },
];

const tableData: {
  id: number;
  Customer: string;
  date: string;
  type: string;
  Amount: string;
}[] = [
  {
    id: 1,
    Customer: "Jon Doe",
    date: "2022-01-01",
    type: "credit",
    Amount: "$100",
  },
  {
    id: 2,
    Customer: "Jane Doe",
    date: "2022-01-01",
    type: "credit",
    Amount: "$200",
  },
  {
    id: 3,
    Customer: "John Doe",
    date: "2022-01-01",
    type: "credit",
    Amount: "$300",
  },
];

function Dashboard() {
  return (
    <>
      <OutletLayout title="Welcome back, Admin 👋" titleColor="text-black">
        <p>Here’s a quick overview of your platform performance</p>
      </OutletLayout>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statisticsData.map(
          (item: { id: number; value: string; title: string }) => (
            <StateCard
              key={item.id}
              value={item.value}
              title={item.title}
              width="w-full"
            />
          )
        )}
      </div>

      <Chart />

      <OutletLayout title="Top Rated Courses">
        <p>Here’s a quick overview of your platform performance</p>
      </OutletLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topRatedCoursesData.map(
          (item: { id: number; title: string; description: string }) => (
            <StateCard
              key={item.id}
              title={item.title}
              value={item.description}
              width="w-full"
            />
          )
        )}
      </div>

      <OutletLayout title="Recent Payout Requests">
        <DataTable data={tableData}></DataTable>
      </OutletLayout>
    </>
  );
}

export default Dashboard;
