// import React, { useState } from "react";
// import CourseCard from "./CourseCard";
// import Pagination from "./Pagination";
// import card from "../../../assets/images/card.png";

// const MyCourses = () => {
//   const allCourses = [
//     {
//       title: "UI/UX Design",
//       instructor: "Mohamed Ali",
//       ratings: 1200,
//       category: "Design",
//       date: "2023-09-01",
//       image: card,
//     },
//     {
//       title: "React Basics",
//       instructor: "Ahmed",
//       ratings: 900,
//       category: "Development",
//       date: "2024-02-15",
//       image: card,
//     },
//     {
//       title: "Digital Marketing",
//       instructor: "Sara",
//       ratings: 750,
//       category: "Marketing",
//       date: "2024-01-10",
//       image: card,
//     },
//     {
//       title: "Advanced JavaScript",
//       instructor: "Mo",
//       ratings: 1100,
//       category: "Development",
//       date: "2024-05-05",
//       image: card,
//     },
//     {
//       title: "Python for Data Science",
//       instructor: "Mona",
//       ratings: 800,
//       category: "Development",
//       date: "2024-03-20",
//       image: card,
//     },
//     {
//       title: "Graphic Design Basics",
//       instructor: "Nada",
//       ratings: 600,
//       category: "Design",
//       date: "2024-04-01",
//       image: card,
//     },
//   ];

//   const [courses, setCourses] = useState(allCourses);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOption, setSortOption] = useState("Relevance");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [newCourse, setNewCourse] = useState({
//     title: "",
//     instructor: "",
//     category: "Design",
//     date: "",
//     image: card,
//   });

//   const coursesPerPage = 4;

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

//   const handleAddCourse = () => {
//     setCourses([newCourse, ...courses]);
//     setIsModalOpen(false);
//     setCurrentPage(1);
//     // Reset form
//     setNewCourse({
//       title: "",
//       instructor: "",
//       category: "Design",
//       date: "",
//       image: card,
//     });
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-10">
//       {/* Breadcrumb */}
//       <div className="text-sm font-normal text-gray-500 mb-4">
//         Home &gt; Profile &gt;{" "}
//         <span className="text-blue-600 font-medium">My courses</span>
//       </div>

//       {/* Toolbar */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-lg font-semibold">
//           Courses ({filteredCourses.length})
//         </h2>
//         <div className="flex items-center gap-3">
//           <div>
//             <label className="text-sm mr-2 text-gray-600">Sort By</label>
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

//           <button
//             className="cursor-pointer rounded px-4 py-1 text-sm font-medium border"
//             onClick={() => setIsModalOpen(true)}
//           >
//             Add Course +
//           </button>
//         </div>
//       </div>

//       {/* Courses Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//         {currentCourses.map((course, idx) => (
//           <CourseCard key={idx} course={course} />
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
//                 className="border px-2 py-1 rounded"
//                 value={newCourse.title}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, title: e.target.value })
//                 }
//               />
//               <input
//                 type="text"
//                 placeholder="Instructor"
//                 className="border px-2 py-1 rounded"
//                 value={newCourse.instructor}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, instructor: e.target.value })
//                 }
//               />
//               <select
//                 className="border px-2 py-1 rounded"
//                 value={newCourse.category}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, category: e.target.value })
//                 }
//               >
//                 <option value="Design">Design</option>
//                 <option value="Development">Development</option>
//                 <option value="Marketing">Marketing</option>
//               </select>
//               <input
//                 type="date"
//                 className="border px-2 py-1 rounded"
//                 value={newCourse.date}
//                 onChange={(e) =>
//                   setNewCourse({ ...newCourse, date: e.target.value })
//                 }
//               />
//               <div className="flex justify-end gap-2 mt-4">
//                 <button
//                   className="px-4 py-1 rounded border hover:bg-gray-100"
//                   onClick={() => setIsModalOpen(false)}
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

// export default MyCourses;
// -------------------------

import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Pagination from "./Pagination";
import card from "../../../assets/images/card.png";

const Courses = () => {
  const allCourses = [
    {
      title: "UI/UX Design",
      instructor: "Mohamed Ali",
      ratings: 1200,
      category: "Design",
      date: "2023-09-01",
      image: card,
    },
    {
      title: "React Basics",
      instructor: "Ahmed",
      ratings: 900,
      category: "Development",
      date: "2024-02-15",
      image: card,
    },
    {
      title: "Digital Marketing",
      instructor: "Sara",
      ratings: 750,
      category: "Marketing",
      date: "2024-01-10",
      image: card,
    },
    {
      title: "Advanced JavaScript",
      instructor: "Mo",
      ratings: 1100,
      category: "Development",
      date: "2024-05-05",
      image: card,
    },
    {
      title: "Python for Data Science",
      instructor: "Mona",
      ratings: 800,
      category: "Development",
      date: "2024-03-20",
      image: card,
    },
    {
      title: "Graphic Design Basics",
      instructor: "Nada",
      ratings: 600,
      category: "Design",
      date: "2024-04-01",
      image: card,
    },
  ];

  const [courses, setCourses] = useState(allCourses);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newCourse, setNewCourse] = useState({
    title: "",
    instructor: "",
    category: "Design",
    date: "",
    ratings: "",
    image: card,
  });

  const [errors, setErrors] = useState({});

  const coursesPerPage = 4;

  let filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  if (sortOption === "Newest") {
    filteredCourses = [...filteredCourses].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } else if (sortOption === "Popular") {
    filteredCourses = [...filteredCourses].sort(
      (a, b) => b.ratings - a.ratings
    );
  }

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const validateForm = () => {
    const newErrors = {};
    if (!newCourse.title) newErrors.title = "Title is required";
    if (!newCourse.instructor) newErrors.instructor = "Instructor is required";
    if (!newCourse.category) newErrors.category = "Category is required";
    if (!newCourse.date) newErrors.date = "Date is required";
    if (newCourse.ratings === "" || newCourse.ratings < 0)
      newErrors.ratings = "Ratings must be 0 or more";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddCourse = () => {
    if (!validateForm()) return;

    const courseToAdd = { ...newCourse, image: card };
    setCourses([courseToAdd, ...courses]);
    setIsModalOpen(false);
    setCurrentPage(1);
    setNewCourse({
      title: "",
      instructor: "",
      category: "Design",
      date: "",
      ratings: "",
      image: card,
    });
    setErrors({});
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="text-sm font-normal text-gray-500 mb-4">
        Home &gt; Profile &gt;{" "}
        <span className="text-blue-600 font-medium">My courses</span>
      </div>

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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentCourses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
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
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h3 className="text-lg font-semibold mb-4">Add New Course</h3>
            <div className="flex flex-col gap-3">
              {/* Title */}
              <div>
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
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              {/* Instructor */}
              <div>
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.instructor}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
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
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <input
                  type="date"
                  className="border px-2 py-1 rounded w-full"
                  value={newCourse.date}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, date: e.target.value })
                  }
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              {/* Ratings */}
              <div>
                <input
                  type="number"
                  placeholder="Ratings"
                  className="border px-2 py-1 rounded w-full"
                  value={newCourse.ratings || ""}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      ratings: Number(e.target.value),
                    })
                  }
                  min={0}
                />
                {errors.ratings && (
                  <p className="text-red-500 text-sm mt-1">{errors.ratings}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 mt-4">
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
        </div>
      )}
    </div>
  );
};

export default Courses;
