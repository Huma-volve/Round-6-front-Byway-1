// import { useState } from "react";

// const CourseCard = ({ course, onDelete, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState(course);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     onEdit(formData);
//     setIsEditing(false);
//   };

//   return (
//     <div className="border p-3 rounded flex flex-col justify-between h-full shadow-sm hover:shadow-md transition">
//       {/* Video */}
//       {course.video && (
//         <div className="w-full aspect-video mb-3">
//           <video
//             src={course.video}
//             controls
//             className="w-full h-full rounded object-contain"
//           />
//         </div>
//       )}

//       {/* Editing Mode */}
//       {isEditing ? (
//         <div className="flex flex-col gap-2 flex-grow">
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="border px-2 py-1 w-full rounded text-sm"
//           />
//           <input
//             type="text"
//             name="instructor"
//             value={formData.instructor}
//             onChange={handleChange}
//             className="border px-2 py-1 w-full rounded text-sm"
//           />
//           <input
//             type="number"
//             name="ratings"
//             value={formData.ratings}
//             onChange={handleChange}
//             className="border px-2 py-1 w-full rounded text-sm"
//           />

//           {/* Buttons */}
//           <div className="flex justify-between mt-4">
//             <button
//               className="px-3 py-1 rounded bg-green-500 text-white text-sm hover:bg-green-600"
//               onClick={handleSave}
//             >
//               Save
//             </button>
//             <button
//               className="px-3 py-1 rounded bg-gray-400 text-white text-sm hover:bg-gray-500"
//               onClick={() => setIsEditing(false)}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Info */}
//           <div className="flex-grow">
//             <h3 className="font-semibold text-base mb-1">{course.title}</h3>
//             <p className="text-sm text-gray-700 mb-1">
//               Instructor: {course.instructor}
//             </p>
//             <p className="text-sm text-gray-700 mb-2">
//               Ratings: {course.ratings}
//             </p>
//           </div>

//           {/* Buttons at bottom */}
//           <div className="flex justify-between mt-4">
//             <button
//               className="px-3 py-1 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 cursor-pointer"
//               onClick={() => setIsEditing(true)}
//             >
//               Edit
//             </button>
//             <button
//               className="px-3 py-1 rounded bg-red-500 text-white text-sm hover:bg-red-600 cursor-pointer"
//               onClick={onDelete}
//             >
//               Delete
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CourseCard;

//  -------------- TypeScript -------------------

import { useState } from "react";
import type { ChangeEvent } from "react";
import type { Course } from "@/types";

// export type Course = {
//   id: string; // UUID
//   title: string;
//   instructor: string;
//   ratings: number;
//   video?: string;
// };

type CourseCardProps = {
  course: Course;
  onDelete: () => void;
  onEdit: (updatedCourse: Course) => void;
};

const CourseCard: React.FC<CourseCardProps> = ({ course, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<Course>({ ...course });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "ratings" ? Number(value) : value,
    }));
  };

  const handleSave = () => {
    onEdit(formData);
    setIsEditing(false);
  };

  return (
    <div className="border p-3 rounded flex flex-col justify-between h-full shadow-sm hover:shadow-md transition">
      {/* Video */}
      {course.video && (
        <div className="w-full aspect-video mb-3">
          <video
            src={course.video}
            controls
            className="w-full h-full rounded object-contain"
          />
        </div>
      )}

      {/* Editing Mode */}
      {isEditing ? (
        <div className="flex flex-col gap-2 flex-grow">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border px-2 py-1 w-full rounded text-sm"
          />
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            className="border px-2 py-1 w-full rounded text-sm"
          />
          <input
            type="number"
            name="ratings"
            value={formData.ratings}
            onChange={handleChange}
            className="border px-2 py-1 w-full rounded text-sm"
          />

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              className="px-3 py-1 rounded bg-green-500 text-white text-sm hover:bg-green-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="px-3 py-1 rounded bg-gray-400 text-white text-sm hover:bg-gray-500"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Info */}
          <div className="flex-grow">
            <h3 className="font-semibold text-base mb-1">{course.title}</h3>
            <p className="text-sm text-gray-700 mb-1">
              Instructor: {course.instructor}
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Ratings: {course.ratings}
            </p>
          </div>

          {/* Buttons at bottom */}
          <div className="flex justify-between mt-4">
            <button
              className="px-3 py-1 rounded bg-blue-500 text-white text-sm hover:bg-blue-600 cursor-pointer"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 rounded bg-red-500 text-white text-sm hover:bg-red-600 cursor-pointer"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseCard;
