import { useState } from "react";
import { Play, Star, User } from "lucide-react";
import OutletLayout from "@/dashboard/components/OutletLayout";
import courseLogo from "../../../assets/images/courseLogo.png";
import person from "../../../assets/images/person.png";

export default function CourseDetails() {
  const [activeLesson, setActiveLesson] = useState<number>(0);

  type ILessons = {
    id: number;
    title: string;
  };

  const lessons: ILessons[] = [
    { id: 1, title: "Introduction to UI/UX" },
    { id: 2, title: "Design Principles" },
    { id: 3, title: "Wireframing" },
    { id: 4, title: "Prototyping" },
    { id: 5, title: "User Testing" },
    { id: 6, title: "Final Project" },
  ];

  return (
    <div className="min-h-screen rounded-2xl">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <OutletLayout
          title="Course details"
          subTitle="View detailed information."
        >
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8">
            {/* Left Column - Video Preview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Card */}
              <img src={courseLogo} alt="courseLogo" />
              {/* Course Info */}
              <div className=" rounded-2xl p-8">
                <div className="flex items-start space-x-3 mb-6">
                  <div>
                    <p className="text-sm text-slate-500">Instructor</p>
                    <p className="font-semibold text-slate-800">Onnaya Ai</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Introduction to user interface and user experience design
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Begin your journey in user interface and user experience
                  design. You'll learn to design wireframes, user flows, and
                  interactive prototypes using Figma.
                </p>
              </div>

              {/* Review */}
            </div>

            {/* Right Column - Lessons */}
            <div className="lg:col-span-1">
              <div className=" rounded-2xl p-6  sticky top-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Lessons:
                </h3>
                <div className="space-y-3">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson.id)}
                      className={`group cursor-pointer p-4 rounded-2xl  overflow-hidden transition-all hover:shadow-md`}
                    >
                      <div className="flex flex-col md:flex-row">
                        <img
                          src={courseLogo}
                          alt="courseLogo"
                          className="w-[226px] h-[135px] rounded-2xl"
                        />
                        <div className="flex items-center space-x-4 p-4 !text-black">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs  mb-1">Lesson {index + 1}</p>
                            <p className="text-sm font-semibold   transition-colors">
                              {lesson.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg mt-7">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12  rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                <img src={person} alt="person" className="rounded-3xl" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-slate-800">Mohamed Ali</p>
                  <p className="text-xs text-slate-500">
                    Posted 6-9 March 2025
                  </p>
                </div>
                <div className="flex items-center mb-3">
                  <p className="text-sm text-slate-600 mr-2">(3159 Ratings)</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  I was totally apprehensive, having no prior design experience.
                  But this instructor was clear, not just with teaching the
                  concepts but with breaking them down into digestible modules.
                  The video lectures were engaging, and the real-world examples
                  really helped solidify my understanding.
                </p>
              </div>
            </div>
          </div>
        </OutletLayout>
      </div>
    </div>
  );
}
