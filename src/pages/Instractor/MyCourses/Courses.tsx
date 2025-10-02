// import React, { useState, useEffect } from "react";
// import CourseCard from "./CourseCard";
// import Pagination from "./Pagination";
// import video from "../../../assets/video/video.mp4";

// const Courses = () => {
//   const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];

//   // الكورسات الافتراضية
//   const defaultCourses = [
//     {
//       id: crypto.randomUUID(),
//       title: "React Basics",
//       instructor: "Ahmed",
//       ratings: 900,
//       category: "Development",
//       date: "2024-02-15",
//       video: video,
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Advanced React",
//       instructor: "Sara",
//       ratings: 850,
//       category: "Development",
//       date: "2024-03-10",
//       video: video,
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "UI/UX Design Fundamentals",
//       instructor: "Laila",
//       ratings: 750,
//       category: "Design",
//       date: "2024-01-20",
//       video: video,
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Marketing 101",
//       instructor: "Hassan",
//       ratings: 600,
//       category: "Marketing",
//       date: "2024-02-01",
//       video: video,
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Next.js for Beginners",
//       instructor: "Mona",
//       ratings: 500,
//       category: "Development",
//       date: "2024-02-25",
//       video: video,
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Photoshop Basics",
//       instructor: "Tamer",
//       ratings: 650,
//       category: "Design",
//       date: "2024-03-05",
//       video: video,
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Social Media Marketing",
//       instructor: "Dina",
//       ratings: 700,
//       category: "Marketing",
//       date: "2024-03-12",
//       video: video,
//     },
//     {
//       id: crypto.randomUUID(),
//       title: "Advanced CSS & Tailwind",
//       instructor: "Ahmed",
//       ratings: 800,
//       category: "Development",
//       date: "2024-01-28",
//       video: video,
//     },
//   ];

//   const [courses, setCourses] = useState(
//     savedCourses.length ? savedCourses : defaultCourses
//   );
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("Relevance");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [newCourse, setNewCourse] = useState({
//     title: "",
//     instructor: "",
//     category: "Design",
//     date: "",
//     ratings: "",
//     video: "",
//   });

//   const [errors, setErrors] = useState({});
//   const coursesPerPage = 4;

//   useEffect(() => {
//     localStorage.setItem("courses", JSON.stringify(courses));
//   }, [courses]);

//   // فلترة وفرز
//   let filteredCourses =
//     selectedCategory === "All"
//       ? courses
//       : courses.filter((c) => c.category === selectedCategory);

//   if (sortOption === "Newest") {
//     filteredCourses = [...filteredCourses].sort(
//       (a, b) => new Date(b.date) - new Date(a.date)
//     );
//   } else if (sortOption === "Popular") {
//     filteredCourses = [...filteredCourses].sort(
//       (a, b) => b.ratings - a.ratings
//     );
//   }

//   const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
//   const startIndex = (currentPage - 1) * coursesPerPage;
//   const endIndex = startIndex + coursesPerPage;
//   const currentCourses = filteredCourses.slice(startIndex, endIndex);

//   // Validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!newCourse.title) newErrors.title = "Title is required";
//     if (!newCourse.instructor) newErrors.instructor = "Instructor is required";
//     if (!newCourse.category) newErrors.category = "Category is required";
//     if (!newCourse.date) newErrors.date = "Date is required";
//     if (newCourse.ratings === "" || newCourse.ratings < 0)
//       newErrors.ratings = "Ratings must be 0 or more";
//     if (!newCourse.video) newErrors.video = "Video is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAddCourse = () => {
//     if (!validateForm()) return;

//     // إضافة id فريد للكورس الجديد
//     const courseWithId = { ...newCourse, id: crypto.randomUUID() };
//     setCourses([courseWithId, ...courses]);
//     setIsModalOpen(false);
//     setCurrentPage(1);
//     setNewCourse({
//       title: "",
//       instructor: "",
//       category: "Design",
//       date: "",
//       ratings: "",
//       video: "",
//     });
//     setErrors({});
//   };

//   const handleDeleteCourse = (id) => {
//     setCourses(courses.filter((course) => course.id !== id));
//   };

//   const handleEditCourse = (id, updatedCourse) => {
//     setCourses(
//       courses.map((course) =>
//         course.id === id ? { ...course, ...updatedCourse } : course
//       )
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-10">
//       {/* Toolbar */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
//         <h2 className="text-lg font-semibold">
//           Courses ({filteredCourses.length})
//         </h2>

//         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
//           {/* Sort */}
//           <div className="flex items-center gap-2">
//             <label className="text-sm text-gray-600">Sort By</label>
//             <select
//               className="border rounded px-2 py-1 text-sm cursor-pointer"
//               value={sortOption}
//               onChange={(e) => {
//                 setSortOption(e.target.value);
//                 setCurrentPage(1);
//               }}
//             >
//               <option value="Relevance">Relevance</option>
//               <option value="Newest">Newest</option>
//               <option value="Popular">Popular</option>
//             </select>
//           </div>

//           {/* Filter */}
//           <select
//             className="border rounded px-3 py-1 text-sm cursor-pointer"
//             value={selectedCategory}
//             onChange={(e) => {
//               setSelectedCategory(e.target.value);
//               setCurrentPage(1);
//             }}
//           >
//             <option value="All">All</option>
//             <option value="Design">Design</option>
//             <option value="Development">Development</option>
//             <option value="Marketing">Marketing</option>
//           </select>

//           {/* Add Button */}
//           <button
//             className="rounded px-4 py-1 text-sm font-medium cursor-pointer border"
//             onClick={() => setIsModalOpen(true)}
//           >
//             Add Course +
//           </button>
//         </div>
//       </div>

//       {/* Courses Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {currentCourses.map((course) => (
//           <CourseCard
//             key={course.id}
//             course={course}
//             onDelete={() => handleDeleteCourse(course.id)}
//             onEdit={(updatedCourse) =>
//               handleEditCourse(course.id, updatedCourse)
//             }
//           />
//         ))}
//       </div>

//       {/* Pagination */}
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded shadow-md w-96">
//             <h3 className="text-lg font-semibold mb-4">Add New Course</h3>
//             <div className="flex flex-col gap-3">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 className="border px-2 py-1 rounded w-full"
//                 value={newCourse.title}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, title: e.target.value })
//                 }
//               />
//               {errors.title && (
//                 <p className="text-red-500 text-sm">{errors.title}</p>
//               )}

//               <input
//                 type="text"
//                 placeholder="Instructor"
//                 className="border px-2 py-1 rounded w-full"
//                 value={newCourse.instructor}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, instructor: e.target.value })
//                 }
//               />
//               {errors.instructor && (
//                 <p className="text-red-500 text-sm">{errors.instructor}</p>
//               )}

//               <select
//                 className="border px-2 py-1 rounded w-full"
//                 value={newCourse.category}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, category: e.target.value })
//                 }
//               >
//                 <option value="">Select Category</option>
//                 <option value="Design">Design</option>
//                 <option value="Development">Development</option>
//                 <option value="Marketing">Marketing</option>
//               </select>
//               {errors.category && (
//                 <p className="text-red-500 text-sm">{errors.category}</p>
//               )}

//               <input
//                 type="date"
//                 className="border px-2 py-1 rounded w-full"
//                 value={newCourse.date}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, date: e.target.value })
//                 }
//               />
//               {errors.date && (
//                 <p className="text-red-500 text-sm">{errors.date}</p>
//               )}

//               <input
//                 type="number"
//                 placeholder="Ratings"
//                 className="border px-2 py-1 rounded w-full"
//                 value={newCourse.ratings}
//                 onChange={(e) =>
//                   setNewCourse({
//                     ...newCourse,
//                     ratings: Number(e.target.value),
//                   })
//                 }
//                 min={0}
//               />
//               {errors.ratings && (
//                 <p className="text-red-500 text-sm">{errors.ratings}</p>
//               )}

//               {/* رفع فيديو */}
//               <input
//                 type="file"
//                 accept="video/*"
//                 className="border px-2 py-1 rounded w-full"
//                 onChange={(e) => {
//                   const file = e.target.files[0];
//                   if (file) {
//                     const previewUrl = URL.createObjectURL(file);
//                     setNewCourse({ ...newCourse, video: previewUrl });
//                   }
//                 }}
//               />
//               {errors.video && (
//                 <p className="text-red-500 text-sm">{errors.video}</p>
//               )}

//               {newCourse.video && (
//                 <div className="w-full aspect-video mt-2">
//                   <video
//                     src={newCourse.video}
//                     controls
//                     className="w-full rounded"
//                   />
//                 </div>
//               )}

//               <div className="flex justify-end gap-2 mt-4">
//                 <button
//                   className="px-4 py-1 rounded border hover:bg-gray-100"
//                   onClick={() => {
//                     setIsModalOpen(false);
//                     setErrors({});
//                   }}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="px-4 py-1 rounded bg-yellow-400 hover:bg-yellow-500"
//                   onClick={handleAddCourse}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;

//  -------------- TypeScript -------------------

import React, { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";
import video from "../../../assets/video/video.mp4";
import type { Course } from "@/types";
// type Course = {
//   id: string;
//   title: string;
//   instructor: string;
//   ratings: number;
//   category: string;
//   date: string;
//   video: string;
// };

type Errors = {
  title?: string;
  instructor?: string;
  category?: string;
  date?: string;
  ratings?: string;
  video?: string;
};

const Courses: React.FC = () => {
  const savedCourses: Course[] =
    JSON.parse(localStorage.getItem("courses") || "[]") || [];

  // الكورسات الافتراضية
  const defaultCourses: Course[] = [
    {
      id: crypto.randomUUID(),
      title: "React Basics",
      instructor: "Ahmed",
      ratings: 900,
      category: "Development",
      date: "2024-02-15",
      video: video,
    },
    {
      id: crypto.randomUUID(),
      title: "Advanced React",
      instructor: "Sara",
      ratings: 850,
      category: "Development",
      date: "2024-03-10",
      video: video,
    },
    {
      id: crypto.randomUUID(),
      title: "UI/UX Design Fundamentals",
      instructor: "Laila",
      ratings: 750,
      category: "Design",
      date: "2024-01-20",
      video: video,
    },
    {
      id: crypto.randomUUID(),
      title: "Marketing 101",
      instructor: "Hassan",
      ratings: 600,
      category: "Marketing",
      date: "2024-02-01",
      video: video,
    },
    {
      id: crypto.randomUUID(),
      title: "Next.js for Beginners",
      instructor: "Mona",
      ratings: 500,
      category: "Development",
      date: "2024-02-25",
      video: video,
    },
    {
      id: crypto.randomUUID(),
      title: "Photoshop Basics",
      instructor: "Tamer",
      ratings: 650,
      category: "Design",
      date: "2024-03-05",
      video: video,
    },
    {
      id: crypto.randomUUID(),
      title: "Social Media Marketing",
      instructor: "Dina",
      ratings: 700,
      category: "Marketing",
      date: "2024-03-12",
      video: video,
    },
    {
      id: crypto.randomUUID(),
      title: "Advanced CSS & Tailwind",
      instructor: "Ahmed",
      ratings: 800,
      category: "Development",
      date: "2024-01-28",
      video: video,
    },
  ];

  const [courses, setCourses] = useState<Course[]>(
    savedCourses.length ? savedCourses : defaultCourses
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("Relevance");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [newCourse, setNewCourse] = useState<Omit<Course, "id">>({
    title: "",
    instructor: "",
    category: "Design",
    date: "",
    ratings: 0,
    video: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const coursesPerPage = 6;

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  // فلترة وفرز
  let filteredCourses = selectedCategory === "All"
    ? courses
    : courses.filter((c) => c.category === selectedCategory);

  if (sortOption === "Newest") {
    filteredCourses = [...filteredCourses].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } else if (sortOption === "Popular") {
    filteredCourses = [...filteredCourses].sort((a, b) => b.ratings - a.ratings);
  }

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  // Validation
  const validateForm = () => {
    const newErrors: Errors = {};
    if (!newCourse.title) newErrors.title = "Title is required";
    if (!newCourse.instructor) newErrors.instructor = "Instructor is required";
    if (!newCourse.category) newErrors.category = "Category is required";
    if (!newCourse.date) newErrors.date = "Date is required";
    if (newCourse.ratings === undefined || newCourse.ratings < 0)
      newErrors.ratings = "Ratings must be 0 or more";
    if (!newCourse.video) newErrors.video = "Video is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddCourse = () => {
    if (!validateForm()) return;

    const courseWithId: Course = { ...newCourse, id: crypto.randomUUID() };
    setCourses([courseWithId, ...courses]);
    setIsModalOpen(false);
    setCurrentPage(1);
    setNewCourse({
      title: "",
      instructor: "",
      category: "Design",
      date: "",
      ratings: 0,
      video: "",
    });
    setErrors({});
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  const handleEditCourse = (id: string, updatedCourse: Course) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, ...updatedCourse } : course
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-lg font-semibold">
          Courses ({filteredCourses.length})
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort By</label>
            <select
              className="border rounded px-2 py-1 text-sm cursor-pointer"
              value={sortOption}
              onChange={(e) => {
                setSortOption(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="Relevance">Relevance</option>
              <option value="Newest">Newest</option>
              <option value="Popular">Popular</option>
            </select>
          </div>

          {/* Filter */}
          <select
            className="border rounded px-3 py-1 text-sm cursor-pointer"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All">All</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
          </select>

          {/* Add Button */}
          <button
            className="rounded px-4 py-1 text-sm font-medium cursor-pointer border"
            onClick={() => setIsModalOpen(true)}
          >
            Add Course +
          </button>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onDelete={() => handleDeleteCourse(course.id)}
            onEdit={(updatedCourse) => handleEditCourse(course.id, updatedCourse)}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-md w-96 max-h-[90vh] flex flex-col">
            <h3 className="text-lg font-semibold p-4 border-b">Add New Course</h3>

            {/* محتوى المودال قابل للتمرير */}
            <div className="flex-1 overflow-auto p-4 flex flex-col gap-3">
              <input
                type="text"
                placeholder="Title"
                className="border px-2 py-1 rounded w-full"
                value={newCourse.title}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, title: e.target.value })
                }
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}

              <input
                type="text"
                placeholder="Instructor"
                className="border px-2 py-1 rounded w-full"
                value={newCourse.instructor}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, instructor: e.target.value })
                }
              />
              {errors.instructor && (
                <p className="text-red-500 text-sm">{errors.instructor}</p>
              )}

              <select
                className="border px-2 py-1 rounded w-full"
                value={newCourse.category}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, category: e.target.value })
                }
              >
                <option value="">Select Category</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category}</p>
              )}

              <input
                type="date"
                className="border px-2 py-1 rounded w-full"
                value={newCourse.date}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, date: e.target.value })
                }
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date}</p>
              )}

              <input
                type="number"
                placeholder="Ratings"
                className="border px-2 py-1 rounded w-full"
                value={newCourse.ratings}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewCourse({ ...newCourse, ratings: Number(e.target.value) })
                }
                min={0}
              />
              {errors.ratings && (
                <p className="text-red-500 text-sm">{errors.ratings}</p>
              )}

              <input
                type="file"
                accept="video/*"
                className="border px-2 py-1 rounded w-full"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const previewUrl = URL.createObjectURL(file);
                    setNewCourse({ ...newCourse, video: previewUrl });
                  }
                }}
              />
              {errors.video && (
                <p className="text-red-500 text-sm">{errors.video}</p>
              )}

              {newCourse.video && (
                <div className="w-full aspect-video mt-2">
                  <video
                    src={newCourse.video}
                    controls
                    className="w-full rounded"
                  />
                </div>
              )}
            </div>

            {/* الأزرار ثابتة أسفل المودال */}
            <div className="p-4 border-t flex justify-end gap-2">
              <button
                className="px-4 py-1 rounded border hover:bg-gray-100"
                onClick={() => {
                  setIsModalOpen(false);
                  setErrors({});
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-1 rounded bg-yellow-400 hover:bg-yellow-500"
                onClick={handleAddCourse}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Courses;
