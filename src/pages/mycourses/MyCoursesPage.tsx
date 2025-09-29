import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import UiUxCover from "@/assets/images/UiUx cover.png";
import GraphicCover from "@/assets/images/graphic design cover.png";
import PythonCover from "@/assets/images/PythonCover.png";
import JavaScriptCover from "@/assets/images/JsCover.png";

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  hours: number;
  lectures: number;
  level: string;
  image: string;
}

// fallback data
const fallbackCourses: Course[] = [
  {
    id: 1,
    title: "UI/UX Design",
    instructor: "Omnya Ali",
    rating: 5,
    reviews: 1200,
    hours: 22,
    lectures: 155,
    level: "Beginner",
    image: UiUxCover,
  },
  {
    id: 2,
    title: "Graphic Design",
    instructor: "Amira Mohamed",
    rating: 5,
    reviews: 1200,
    hours: 22,
    lectures: 155,
    level: "Beginner",
    image: GraphicCover,
  },
  {
    id: 3,
    title: "Python",
    instructor: "Salma Ahmed",
    rating: 5,
    reviews: 1200,
    hours: 22,
    lectures: 155,
    level: "Beginner",
    image: PythonCover,
  },
  {
    id: 4,
    title: "JavaScript",
    instructor: "Ola Mostafa",
    rating: 5,
    reviews: 1200,
    hours: 22,
    lectures: 155,
    level: "Beginner",
    image: JavaScriptCover,
  },
];

export default function MyCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(`${API_URL}/my-courses`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Course[] = await res.json();

        if (data && data.length > 0) {
          setCourses(data);
        } else {
          setCourses(fallbackCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses(fallbackCourses);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) {
    return <p className="p-8 text-gray-600">Loading courses...</p>;
  }

  return (
    <div className="p-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/courses">Browse Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-black font-medium">My courses</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Link to={`/my-courses/${course.id}`} key={course.id}>
            <Card className="shadow-md rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <CardHeader className="p-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold mb-2">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-gray-500 mb-2">
                  By {course.instructor}
                </p>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 mb-2">
                  {Array.from({ length: course.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">
                    ({course.reviews} Ratings)
                  </span>
                </div>

                {/* Course Details */}
                <p className="text-sm text-gray-600">
                  {course.hours} Total Hours, {course.lectures} Lectures,{" "}
                  {course.level}
                </p>

                {/* Progress Bar */}
                <div className="mt-3">
                  <Progress value={20} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
