// import React, { useState, useEffect } from "react";
// import { Eye } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Reviews = () => {
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       courseName: "UI/UX Design Basics",
//       reviewer: "Mohamed Ahmed",
//       rating: 4,
//       comment: "The course was really helpful..",
//       date: "25 Jul 2025",
//       status: "Normal",
//     },
//     {
//       id: 2,
//       courseName: "JavaScript",
//       reviewer: "Sayed Ahmed",
//       rating: 1,
//       comment: "Bad course, waste of money..",
//       date: "24 Jul 2025",
//       status: "Reported",
//     },
//   ]);

//   const [openMenu, setOpenMenu] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         !event.target.closest(".review-menu") &&
//         !event.target.closest(".review-menu-btn")
//       ) {
//         setOpenMenu(null);
//       }
//     };
//     const handleKey = (e) => {
//       if (e.key === "Escape") setOpenMenu(null);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleKey);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleKey);
//     };
//   }, []);

//   const renderStars = (rating) => (
//     <div className="flex gap-0.5">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <span
//           key={star}
//           className={`text-xl ${
//             star <= rating ? "text-yellow-400" : "text-gray-300"
//           }`}
//           aria-hidden
//         >
//           ★
//         </span>
//       ))}
//     </div>
//   );

//   const handleDelete = (id) => {
//     setReviews((prev) => prev.filter((r) => r.id !== id));
//     setOpenMenu(null);
//   };

//   const handleReport = (review) => {
//     navigate("/reports", { state: { reportedId: review.id, review } });
//     setOpenMenu(null);
//   };

//   return (
//     <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
//       <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
//         Reviews & Ratings
//       </h1>
//       <p className="text-gray-700 mb-6 text-sm sm:text-base">
//         Manage student feedback and monitor course ratings.
//       </p>

//       {/* ✅ Scroll افقي للجدول في الشاشات الصغيرة */}
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
//         <div className="overflow-x-auto">
//           <table className="w-full min-w-[600px]">
//             <thead>
//               <tr className="border-b border-gray-200 bg-gray-50 text-sm sm:text-base">
//                 <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
//                   Course
//                 </th>
//                 <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
//                   Reviewer
//                 </th>
//                 <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
//                   Rating
//                 </th>
//                 <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
//                   Comment
//                 </th>
//                 <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
//                   Date
//                 </th>
//                 <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
//                   Status
//                 </th>
//                 <th className="text-left py-3 px-2 sm:px-4 font-semibold text-gray-700">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {reviews.map((review) => (
//                 <tr
//                   key={review.id}
//                   className="border-b border-gray-100 hover:bg-gray-50 transition text-sm sm:text-base"
//                 >
//                   <td className="py-3 px-2 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
//                     {review.courseName}
//                   </td>
//                   <td className="py-3 px-2 sm:px-4 text-gray-900 whitespace-nowrap">
//                     {review.reviewer}
//                   </td>
//                   <td className="py-3 px-2 sm:px-4">
//                     {renderStars(review.rating)}
//                   </td>
//                   <td className="py-3 px-2 sm:px-4 text-gray-700 max-w-[150px] sm:max-w-[250px] truncate">
//                     {review.comment}
//                   </td>
//                   <td className="py-3 px-2 sm:px-4 text-gray-700 whitespace-nowrap">
//                     {review.date}
//                   </td>
//                   <td className="py-3 px-2 sm:px-4">
//                     <span
//                       className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${
//                         review.status === "Normal"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {review.status}
//                     </span>
//                   </td>
//                   <td className="py-3 px-2 sm:px-4 relative">
//                     {/* زر المينيو */}
//                     <button
//                       aria-haspopup="true"
//                       aria-expanded={openMenu === review.id}
//                       onClick={() =>
//                         setOpenMenu(openMenu === review.id ? null : review.id)
//                       }
//                       className="review-menu-btn flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition text-xs sm:text-sm"
//                     >
//                       View <Eye size={14} />
//                     </button>

//                     {/* المينيو */}
//                     {openMenu === review.id && (
//                       <div className="review-menu absolute right-0 mt-2 w-44 sm:w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10 text-sm sm:text-base">
//                         <button
//                           onClick={() => {
//                             navigate("/full-review");
//                             setOpenMenu(null);
//                           }}
//                           className="w-full text-left px-4 py-2 sm:py-3 hover:bg-gray-50 text-gray-900 font-medium border-b border-gray-100"
//                         >
//                           View Full Review
//                         </button>

//                         <button
//                           onClick={() => handleDelete(review.id)}
//                           className="w-full text-left px-4 py-2 sm:py-3 hover:bg-gray-50 text-red-600 font-medium border-b border-gray-100"
//                         >
//                           Delete Review
//                         </button>

//                         <button
//                           onClick={() => handleReport(review)}
//                           className="w-full text-left px-4 py-2 sm:py-3 hover:bg-gray-50 text-gray-900 font-medium"
//                         >
//                           Report
//                         </button>
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

//---------  TypeScript  -------------



import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Review = {
  id: number;
  courseName: string;
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
  status: "Normal" | "Reported";
};

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      courseName: "UI/UX Design Basics",
      reviewer: "Mohamed Ahmed",
      rating: 4,
      comment: "The course was really helpful..",
      date: "25 Jul 2025",
      status: "Normal",
    },
    {
      id: 2,
      courseName: "JavaScript",
      reviewer: "Sayed Ahmed",
      rating: 1,
      comment: "Bad course, waste of money..",
      date: "24 Jul 2025",
      status: "Reported",
    },
  ]);

  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".review-menu") &&
        !target.closest(".review-menu-btn")
      ) {
        setOpenMenu(null);
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg sm:text-xl ${star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  );

  const handleDelete = (id: number) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    setOpenMenu(null);
  };

  const handleReport = (review: Review) => {
    navigate("/reports", { state: { reportedId: review.id, review } });
    setOpenMenu(null);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-2">
        Reviews & Ratings
      </h1>
      <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-lg">
        Manage student feedback and monitor course ratings.
      </p>

      {/* ✅ Responsive table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-6">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-xs sm:text-sm md:text-base">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-[#1C1C1E]">
                  Course
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-[#1C1C1E]">
                  Reviewer
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-[#1C1C1E]">
                  Rating
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-[#1C1C1E]">
                  Comment
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-[#1C1C1E]">
                  Date
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-[#1C1C1E]">
                  Status
                </th>
                <th className="text-left py-3 px-2 sm:px-4 font-semibold text-[#1C1C1E]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>

              {reviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-2 sm:px-4 font-medium text-[#000000] ">
                    {review.courseName}
                  </td>
                  <td className="py-3 px-2 sm:px-4 text-gray-900">
                    {review.reviewer}
                  </td>
                  <td className="py-3 px-2 sm:px-4">{renderStars(review.rating)}</td>
                  <td className="py-3 px-2 sm:px-4 text-[#000000] max-w-[150px] sm:max-w-[250px] truncate">
                    {review.comment}
                  </td>
                  <td className="py-3 px-2 sm:px-4 text-[#000000] whitespace-nowrap ">
                    {review.date}
                  </td>
                  <td className="py-3 px-2 sm:px-4">
                    <span
                      className={`px-2 py-1 rounded text-[10px] sm:text-xs md:text-sm font-medium ${review.status === "Normal"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                    >
                      {review.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 sm:px-4 relative">
                    <button
                      aria-haspopup="true"
                      aria-expanded={openMenu === review.id}
                      onClick={() =>
                        setOpenMenu(openMenu === review.id ? null : review.id)
                      }
                      className="review-menu-btn flex items-center justify-center gap-1 sm:gap-2 w-full sm:w-auto px-2 sm:px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition text-xs sm:text-sm"
                    >
                      View <Eye size={14} />
                    </button>
                    {/* DropMenu */}
                    {openMenu === review.id && (
                      <div className="review-menu absolute right-0 mt-2 w-40 sm:w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10 text-xs sm:text-sm md:text-base">
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
