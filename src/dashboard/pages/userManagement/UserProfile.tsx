import { useParams } from "react-router-dom";
import OutletLayout from "@/dashboard/components/OutletLayout";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface IUserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  nationality: string;
  regDate: string;
  totalCourses: string;
  avgRating: string;
  totalEarnings: string;
  bio: string;
}

// بيانات مؤقتة (بدل الـ API)
const users: IUserProfile[] = [
  {
    id: 1,
    name: "Nour Ali",
    email: "nour@mail.com",
    role: "Instructor",
    status: "Active",
    nationality: "Egyptian",
    regDate: "15 June 2024",
    totalCourses: "5 Courses",
    avgRating: "4.8 / 5",
    totalEarnings: "$1,250",
    bio: "Passionate UI/UX mentor",
  },
  {
    id: 2,
    name: "Omar Tarek",
    email: "omar@mail.com",
    role: "Instructor",
    status: "Active",
    nationality: "Egyptian",
    regDate: "12 May 2024",
    totalCourses: "3 Courses",
    avgRating: "4.5 / 5",
    totalEarnings: "$980",
    bio: "Backend developer & mentor",
  },
];

function UserProfile() {
  const { id } = useParams<{ id: string }>();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <p>User not found</p>;

  return (
    <OutletLayout
      title="User Profile"
      subTitle="View detailed information about this user."
    >
      <Card className="p-6 flex flex-col gap-6">
        {/* الصف الأول */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Full Name
            </p>
            <p className="mt-2 ml-2">{user.name}</p>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Email Address
            </p>
            <a
              href={`mailto:${user.email}`}
              className="mt-2 block text-primary-500 ml-2"
            >
              {user.email}
            </a>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Role
            </p>
            <p className="mt-2 ml-2">{user.role}</p>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Status
            </p>
            <p
              className={`mt-2 ml-2 ${
                user.status === "Active" ? "text-green-600" : "text-red-600"
              }`}
            >
              {user.status}
            </p>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Nationality
            </p>
            <p className="mt-2 ml-2">{user.nationality}</p>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Registration Date
            </p>
            <p className="mt-2 ml-2">{user.regDate}</p>
          </div>
        </div>

        {/* الصف الثاني */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Total Courses
            </p>
            <p className="mt-2 ml-2">{user.totalCourses}</p>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Average Rating
            </p>
            <p className="mt-2 ml-2 flex items-center gap-1">
              <Star size={16} className="text-yellow-500" />
              {user.avgRating}
            </p>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Total Earnings
            </p>
            <p className="mt-2 ml-2">{user.totalEarnings}</p>
          </div>
          <div>
            <p className="border rounded-md py-3 px-3 text-sm font-medium bg-gray-50">
              Bio / About Instructor
            </p>
            <p className="mt-2 ml-2">{user.bio}</p>
          </div>
        </div>
      </Card>
    </OutletLayout>
  );
}

export default UserProfile;
