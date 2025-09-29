import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-32 object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold">{course.title}</h3>
        <p className="text-xs text-gray-500">By {course.instructor}</p>
        <p className="text-xs text-gray-500">({course.ratings} Ratings)</p>
        <div className="flex items-center text-yellow-500 text-sm mt-1">
          {"★".repeat(5)}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
