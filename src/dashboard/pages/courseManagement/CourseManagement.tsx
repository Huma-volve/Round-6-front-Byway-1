import DataTable from "@/dashboard/components/DataTable";
import OutletLayout from "@/dashboard/components/OutletLayout";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

function CourseManagement() {
  type ICourses = {
    id: number;
    "Course Title": string;
    Instructor: string;
    Category: string;
    Status: string;
    "Created Date": string;
  };

  const data: ICourses[] = [
    {
      id: 1,
      "Course Title": "UI/UX Design Basics",
      Instructor: "Nour Ali",
      Category: "Design",
      Status: "Published",
      "Created Date": "10 Jul 2024",
    },
    {
      id: 2,
      "Course Title": "JavaScript Fundamentals",
      Instructor: "Ahmed Saeed",
      Category: "Programming",
      Status: "Draft",
      "Created Date": "15 Aug 2024",
    },
    {
      id: 3,
      "Course Title": "Advanced React",
      Instructor: "Aya Hassan",
      Category: "Development",
      Status: "Published",
      "Created Date": "20 Sep 2024",
    },
  ];

  const CustomActions = ({
    rowId,
    onEdit,
  }: {
    rowId?: number;
    onEdit?: () => void;
  }) => {
    return (
      <>
        <DropdownMenuItem>
          <Link to={`/course-management-details/${rowId}`}>View Course</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-primary-main focus:text-primary-main cursor-pointer"
          onClick={onEdit}
        >
          Edit Course
        </DropdownMenuItem>

        <DropdownMenuItem className="text-error-800 focus:text-error-800 cursor-pointer">
          Delete Course
        </DropdownMenuItem>
      </>
    );
  };

  return (
    <div className="bg-[#eeeeeee8]">
      <OutletLayout
        title="Courses Management"
        children=""
        subTitle="View, filter, and manage all published and pending courses on the platform."
      />
      <DataTable<ICourses> data={data}>
        <CustomActions />
      </DataTable>
    </div>
  );
}

export default CourseManagement;
