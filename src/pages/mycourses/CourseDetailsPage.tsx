import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import uiux from "@/assets/images/UiUx cover.png";
import { CheckCircle, Star } from "lucide-react";

// بيانات افتراضية (fallback)
const fallbackCourse = {
  title: "UI/UX Design",
  instructor: "Omnya Ali",
  description: "Introduction to user interface and user experience design",
  duration: "7 weeks",
  progress: 20,
  status: "In Progress",
  image: uiux,
};

const fallbackLessons = [
  "Introduction to UI/UX",
  "Design Principles",
  "Wireframing",
  "Prototyping",
  "User Testing",
  "Final Project",
];

export default function CourseDetailPage() {
  const { id } = useParams(); // get course id from URL
  const API_URL = import.meta.env.VITE_BASE_URL;

  const [course, setCourse] = useState(fallbackCourse);
  const [lessons, setLessons] = useState(fallbackLessons);
  const [loading, setLoading] = useState(true);

  // Feedback modal states
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`${API_URL}/courses/${id}`);
        if (!res.ok) throw new Error("Failed to fetch course");
        const data = await res.json();

        setCourse(data.course || fallbackCourse);
        setLessons(data.lessons || fallbackLessons);
      } catch (error) {
        console.error("Error fetching course:", error);
        setCourse(fallbackCourse);
        setLessons(fallbackLessons);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${API_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: id,
          rating,
          feedback,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit feedback");

      // Close popup after success
      setOpen(false);
      setRating(0);
      setFeedback("");
      alert("Feedback submitted successfully ✅");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback ❌");
    }
  };

  if (loading) return <p className="p-8">Loading...</p>;

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
            <BreadcrumbLink href="/my-courses">My courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-black font-medium">My Course Details</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Course Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="text-blue-600">Instructor: {course.instructor}</p>
          <p className="text-gray-600 mt-2">{course.description}</p>
          <p className="mt-2">Duration: {course.duration}</p>
          <p>Progress: {course.progress}%</p>
          <p>Status: {course.status}</p>
        </div>
        <img
          src={course.image}
          alt={course.title}
          className="w-full rounded-xl shadow"
        />
      </div>

      {/* Lessons Section */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Lessons:</h2>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Give Feedback
        </Button>
      </div>

      <div className="grid gap-4">
        {lessons.map((lesson, i) => (
          <Link
            key={i}
            to={`/my-courses/${id}/lesson/${i + 1}`} // صفحة الفيديو
            className="block"
          >
            <Card className="p-4 cursor-pointer hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <img
                  src={course.image || "/fallback-image.jpg"}
                  alt={lesson}
                  className="w-24 h-16 object-cover rounded"
                />
                <CheckCircle className="w-5 h-5 text-green-500" />
                <p className="font-medium">
                  Lesson {i + 1}: {lesson}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Feedback Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg mx-auto">
          <DialogHeader>
            <DialogTitle>Give Feedback</DialogTitle>
            <DialogDescription>
              Share your rating and opinion about this course.
            </DialogDescription>
          </DialogHeader>

          {/* Rating stars */}
          <div className="flex gap-2 my-4 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => setRating(star)}
                className={`w-8 h-8 cursor-pointer ${
                  rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Feedback textarea */}
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your opinion..."
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          />

          <DialogFooter className="flex justify-center mt-4">
            <Button onClick={handleSubmit} className="bg-blue-500 text-white">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
