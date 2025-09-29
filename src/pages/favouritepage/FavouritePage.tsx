/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import uiux from "@/assets/images/UiUx cover.png";
import graphic from "@/assets/images/graphic design cover.png";

interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
}

interface Instructor {
  id: number;
  name: string;
  specialization: string;
  avatar: string;
}

// fallback data if API fails
const fallbackCourses: Course[] = [
  {
    id: 1,
    title: "UI/UX Design",
    instructor: "Omnya Ali",
    image: uiux,
  },
  {
    id: 2,
    title: "Graphic Design",
    instructor: "Amira Mohamed",
    image: graphic,
  },
];

const fallbackInstructors: Instructor[] = [
  {
    id: 1,
    name: "Omnya Ali",
    specialization: "UI/UX Design",
    avatar: "https://via.placeholder.com/50.png?text=O",
  },
  {
    id: 2,
    name: "Amira Mohamed",
    specialization: "Graphic Design",
    avatar: "https://via.placeholder.com/50.png?text=A",
  },
];

export default function FavouritePage() {
  const [activeTab, setActiveTab] = useState<"courses" | "instructors">(
    "courses"
  );
  const [courses, setCourses] = useState<Course[]>([]);
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("/api/courses");
        if (!res.ok) throw new Error("Failed");
        const data: Course[] = await res.json();
        setCourses(data.length ? data : fallbackCourses);
      } catch (err) {
        setCourses(fallbackCourses);
      }
    };

    const fetchInstructors = async () => {
      try {
        const res = await fetch("/api/instructors");
        if (!res.ok) throw new Error("Failed");
        const data: Instructor[] = await res.json();
        setInstructors(data.length ? data : fallbackInstructors);
      } catch (err) {
        setInstructors(fallbackInstructors);
      }
    };

    fetchCourses();
    fetchInstructors();
  }, []);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="text-sm text-gray-600 mb-6">
        <span className="text-gray-400">Browse Courses</span>
        <span className="mx-2">›</span>
        <span className="font-medium text-indigo-600">Favourite</span>
      </div>

      {/* Tabs */}
      <div className="flex space-x-3 mb-8">
        <Button
          onClick={() => setActiveTab("courses")}
          className={`rounded-full px-6 py-2 text-sm font-medium transition ${
            activeTab === "courses"
              ? "bg-black text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Courses
        </Button>

        <Button
          onClick={() => setActiveTab("instructors")}
          className={`rounded-full px-6 py-2 text-sm font-medium transition ${
            activeTab === "instructors"
              ? "bg-black text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Instructors
        </Button>
      </div>

      {/* Courses Tab */}
      {activeTab === "courses" && (
        <div className="space-y-5">
          {courses.map((course) => (
            <Card className="shadow-sm hover:shadow-md transition rounded-xl">
              <div className="flex items-center justify-between p-4">
                {/* Left side: image + text */}
                <div className="flex items-center gap-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      By {course.instructor}
                    </p>
                  </div>
                </div>

                {/* Right side: heart */}
                <div>
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Instructors Tab */}
      {activeTab === "instructors" && (
        <div className="space-y-5">
          {instructors.map((instructor) => (
            <Card
              key={instructor.id}
              className="rounded-xl border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between p-4">
                {/* Left side: avatar + text */}
                <div className="flex items-center space-x-4">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-12 h-12 rounded-full bg-gray-100"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-800">
                      {instructor.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {instructor.specialization}
                    </p>
                  </div>
                </div>

                {/* Right side: heart */}
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500 cursor-pointer" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
