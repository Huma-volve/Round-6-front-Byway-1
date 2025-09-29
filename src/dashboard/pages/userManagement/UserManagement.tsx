import { useState } from "react";
import OutletLayout from "@/dashboard/components/OutletLayout";
import DataTable from "@/dashboard/components/DataTable";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface IUserRow {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  regDate: string;
}

const users: IUserRow[] = [
  {
    id: 1,
    name: "Nour Ali",
    email: "nour@mail.com",
    role: "Instructor",
    status: "Active",
    regDate: "2024-06-15",
  },
  {
    id: 2,
    name: "Omar Tarek",
    email: "omar@mail.com",
    role: "Instructor",
    status: "Active",
    regDate: "2024-05-12",
  },
  {
    id: 3,
    name: "Salma Ahmed",
    email: "salma@mail.com",
    role: "Learner",
    status: "Blocked",
    regDate: "2024-05-10",
  },
];

function CustomAction({ rowId }: { rowId?: number }) {
  return (
    <>
      <DropdownMenuItem>
        <Link to={`user-profile/${rowId}`}>View Profile</Link>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-error-800 focus:text-error-800">
        Block / Unblock
      </DropdownMenuItem>
      <DropdownMenuItem className="text-error-800 focus:text-error-800">
        Delete User
      </DropdownMenuItem>
    </>
  );
}

function UserManagement() {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <OutletLayout
      title="User Management"
      subTitle="Manage all registered users including learners and instructors."
    >
      {/* Search Bar */}
      <div className="mb-4 relative max-w-md">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />
        <Input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 border-gray-400"
        />
      </div>

      {/* Table */}
      <DataTable<IUserRow> data={filteredUsers}>
        <CustomAction />
      </DataTable>
    </OutletLayout>
  );
}

export default UserManagement;
