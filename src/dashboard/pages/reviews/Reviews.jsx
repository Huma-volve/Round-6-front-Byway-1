// import { useState } from "react";
// import { Eye } from "lucide-react";

// const Reviews = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const reviews = [
//     {
//       id: 1,
//       course: "UI/UX Design Basics",
//       reviewer: "Salma Ali",
//       rating: 5,
//       comment: "The course was really helpful..",
//       date: "25 Jul 2025",
//       status: "Normal",
//     },
//     {
//       id: 2,
//       course: "JavaScript",
//       reviewer: "Salma Ahmed",
//       rating: 1,
//       comment: "Bad course, waste of money..",
//       date: "24 Jul 2025",
//       status: "Normal",
//     },
//   ];

//   const renderStars = (count) => {
//     return (
//       <div className="flex">
//         {[...Array(5)].map((_, i) => (
//           <span
//             key={i}
//             className={i < count ? "text-yellow-400" : "text-gray-300"}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold text-blue-600 mb-2">
//         Reviews & Ratings
//       </h2>
//       <p className="text-gray-600 mb-4">
//         Manage student feedback and monitor course ratings.
//       </p>

//       <div className="bg-white shadow-md rounded-lg overflow-hidden border">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-4 py-2">Course Name</th>
//               <th className="px-4 py-2">Reviewer</th>
//               <th className="px-4 py-2">Rating</th>
//               <th className="px-4 py-2">Comment Preview</th>
//               <th className="px-4 py-2">Date</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reviews.map((review) => (
//               <tr key={review.id} className="border-t">
//                 <td className="px-4 py-3 text-blue-600 font-medium">
//                   {review.course}
//                 </td>
//                 <td className="px-4 py-3">{review.reviewer}</td>
//                 <td className="px-4 py-3">{renderStars(review.rating)}</td>
//                 <td className="px-4 py-3">{review.comment}</td>
//                 <td className="px-4 py-3">{review.date}</td>
//                 <td className="px-4 py-3 text-green-600">{review.status}</td>
//                 <td className="px-4 py-3 relative">
//                   <button
//                     onClick={() =>
//                       setOpenMenu(openMenu === review.id ? null : review.id)
//                     }
//                     className="bg-gray-100 text-gray-800 px-3 py-1 rounded shadow flex items-center gap-1"
//                   >
//                     <Eye className="w-4 h-4" /> View
//                   </button>

//                   {openMenu === review.id && (
//                     <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md border z-10">
//                       <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
//                         View Full Review
//                       </button>
//                       <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
//                         Delete Review
//                       </button>
//                       <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
//                         Report
//                       </button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Reviews;

// import React, { useState } from "react";
// import { Eye } from "lucide-react";

// const Reviews = () => {
//   const [openMenu, setOpenMenu] = useState(null);

//   const reviews = [
//     {
//       id: 1,
//       courseName: "UI/UX Design Basics",
//       reviewer: "Salma Ali",
//       rating: 4,
//       comment: "The course was really helpful..",
//       date: "25 Jul 2025",
//       status: "Normal",
//     },
//     {
//       id: 2,
//       courseName: "JavaScript",
//       reviewer: "Salma Ahmed",
//       rating: 1,
//       comment: "Bad course, waste of money..",
//       date: "24 Jul 2025",
//       status: "Reported",
//     },
//   ];

//   const renderStars = (rating) => {
//     return (
//       <div className="flex gap-0.5">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span key={star} className="text-yellow-400 text-xl">
//             {star <= rating ? "⭐" : "☆"}
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-blue-600 mb-2">
//         Reviews & Ratings
//       </h1>
//       <p className="text-gray-700 mb-6">
//         Manage student feedback and monitor course ratings.
//       </p>

//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-gray-200">
//                 <th className="text-left py-4 px-4 font-semibold text-gray-800">
//                   Course Name
//                 </th>
//                 <th className="text-left py-4 px-4 font-semibold text-gray-800">
//                   Reviewer
//                 </th>
//                 <th className="text-left py-4 px-4 font-semibold text-gray-800">
//                   Rating
//                 </th>
//                 <th className="text-left py-4 px-4 font-semibold text-gray-800">
//                   Comment Preview
//                 </th>
//                 <th className="text-left py-4 px-4 font-semibold text-gray-800">
//                   Date
//                 </th>
//                 <th className="text-left py-4 px-4 font-semibold text-gray-800">
//                   Status
//                 </th>
//                 <th className="text-left py-4 px-4 font-semibold text-gray-800">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr key={review.id} className="border-b border-gray-100">
//                   <td className="py-4 px-4 font-medium text-gray-900">
//                     {review.courseName}
//                   </td>
//                   <td className="py-4 px-4 text-gray-900">{review.reviewer}</td>
//                   <td className="py-4 px-4">{renderStars(review.rating)}</td>
//                   <td className="py-4 px-4 text-gray-700">{review.comment}</td>
//                   <td className="py-4 px-4 text-gray-700">{review.date}</td>
//                   <td className="py-4 px-4">
//                     <span
//                       className={`font-semibold ${
//                         review.status === "Normal"
//                           ? "text-green-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {review.status}
//                     </span>
//                   </td>
//                   <td className="py-4 px-4 relative">
//                     {review.status === "Normal" ? (
//                       <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors">
//                         View <Eye size={16} />
//                       </button>
//                     ) : (
//                       <div className="relative">
//                         <button
//                           onClick={() =>
//                             setOpenMenu(
//                               openMenu === review.id ? null : review.id
//                             )
//                           }
//                           className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors"
//                         >
//                           View <Eye size={16} />
//                         </button>

//                         {openMenu === review.id && (
//                           <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
//                             <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-900 font-medium border-b border-gray-100">
//                               View Full Review
//                             </button>
//                             <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-red-600 font-medium border-b border-gray-100">
//                               Delete Review
//                             </button>
//                             <button className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-900 font-medium">
//                               Report
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Reviews;

// --------------------------

import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      courseName: "UI/UX Design Basics",
      reviewer: "Salma Ali",
      rating: 4,
      comment: "The course was really helpful..",
      date: "25 Jul 2025",
      status: "Normal",
    },
    {
      id: 2,
      courseName: "JavaScript",
      reviewer: "Salma Ahmed",
      rating: 1,
      comment: "Bad course, waste of money..",
      date: "24 Jul 2025",
      status: "Reported",
    },
  ]);

  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".review-menu") &&
        !event.target.closest(".review-menu-btn")
      ) {
        setOpenMenu(null);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const renderStars = (rating) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );

  const handleDelete = (id) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    setOpenMenu(null);
  };

  const handleReport = (review) => {
    navigate("/reports", { state: { reportedId: review.id, review } });
    setOpenMenu(null);
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
        Reviews & Ratings
      </h1>
      <p className="text-gray-700 mb-6 text-sm sm:text-base">
        Manage student feedback and monitor course ratings.
      </p>

      {/* ✅ Scroll افقي للجدول في الشاشات الصغيرة */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-sm sm:text-base">
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                  Course
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                  Reviewer
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                  Rating
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                  Comment
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition text-sm sm:text-base"
                >
                  <td className="py-3 px-2 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    {review.courseName}
                  </td>
                  <td className="py-3 px-2 sm:px-4 text-gray-900 whitespace-nowrap">
                    {review.reviewer}
                  </td>
                  <td className="py-3 px-2 sm:px-4">
                    {renderStars(review.rating)}
                  </td>
                  <td className="py-3 px-2 sm:px-4 text-gray-700 max-w-[150px] sm:max-w-[250px] truncate">
                    {review.comment}
                  </td>
                  <td className="py-3 px-2 sm:px-4 text-gray-700 whitespace-nowrap">
                    {review.date}
                  </td>
                  <td className="py-3 px-2 sm:px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${
                        review.status === "Normal"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {review.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 sm:px-4 relative">
                    {/* زر المينيو */}
                    <button
                      aria-haspopup="true"
                      aria-expanded={openMenu === review.id}
                      onClick={() =>
                        setOpenMenu(openMenu === review.id ? null : review.id)
                      }
                      className="review-menu-btn flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition text-xs sm:text-sm"
                    >
                      View <Eye size={14} />
                    </button>

                    {/* المينيو */}
                    {openMenu === review.id && (
                      <div className="review-menu absolute right-0 mt-2 w-44 sm:w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10 text-sm sm:text-base">
                        <button
                          onClick={() => {
                            navigate("/full-review");
                            setOpenMenu(null);
                          }}
                          className="w-full text-left px-4 py-2 sm:py-3 hover:bg-gray-50 text-gray-900 font-medium border-b border-gray-100"
                        >
                          View Full Review
                        </button>

                        <button
                          onClick={() => handleDelete(review.id)}
                          className="w-full text-left px-4 py-2 sm:py-3 hover:bg-gray-50 text-red-600 font-medium border-b border-gray-100"
                        >
                          Delete Review
                        </button>

                        <button
                          onClick={() => handleReport(review)}
                          className="w-full text-left px-4 py-2 sm:py-3 hover:bg-gray-50 text-gray-900 font-medium"
                        >
                          Report
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
