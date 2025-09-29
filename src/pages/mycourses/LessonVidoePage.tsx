import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";

// بيانات افتراضية (fallback)
const fallbackCourse = {
  title: "UI/UX Design",
  instructor: "Omnya Ali",
};

const fallbackLessons = [
  {
    id: 1,
    title: "Introduction to UI/UX",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Design Principles",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Wireframing",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Prototyping",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "User Testing",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Final Project",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function LessonVideoPage() {
  const { courseId, lessonId } = useParams();
  const API_URL = import.meta.env.VITE_BASE_URL;

  const [course, setCourse] = useState(fallbackCourse);
  const [lessons, setLessons] = useState(fallbackLessons);
  const [loading, setLoading] = useState(true);

  // Feedback modal states
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const currentLessonIndex = Number(lessonId) - 1;
  const currentLesson = lessons[currentLessonIndex] || fallbackLessons[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/courses/${courseId}`);
        if (!res.ok) throw new Error("Failed to fetch course data");
        const data = await res.json();

        setCourse(data.course || fallbackCourse);
        setLessons(data.lessons || fallbackLessons);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCourse(fallbackCourse);
        setLessons(fallbackLessons);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId]);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${API_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId,
          lessonId,
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
      {/* الفيديو */}
      <iframe
        width="100%"
        height="450"
        src={currentLesson.videoUrl}
        title={currentLesson.title}
        className="rounded-lg shadow mb-6"
        allowFullScreen
      ></iframe>

      {/* عنوان الدرس */}
      <h1 className="text-2xl font-bold mb-2">
        Lesson {lessonId}: {currentLesson.title}
      </h1>
      <p className="text-gray-600 mb-4">Course: {course.title}</p>

      {/* Feedback Button */}
      <Button
        variant="secondary"
        className="mb-6"
        onClick={() => setOpen(true)}
      >
        Give Feedback
      </Button>

      {/* باقي الدروس */}
      <h2 className="text-xl font-semibold mb-4">Other Lessons</h2>
      <div className="grid gap-4">
        {lessons.map((lesson, i) => (
          <Link
            key={lesson.id}
            to={`/my-courses/${courseId}/lesson/${i + 1}`}
            className="block"
          >
            <Card
              className={`p-4 cursor-pointer hover:shadow-lg transition ${
                i === currentLessonIndex ? "border-blue-500" : ""
              }`}
            >
              <p className="font-medium">
                Lesson {i + 1}: {lesson.title}
              </p>
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
              Share your rating and opinion about this lesson.
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
