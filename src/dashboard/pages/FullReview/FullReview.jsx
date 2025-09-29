// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const FullReview = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // هنا ممكن تجيب الداتا من API أو من State
//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-blue-600 mb-4">
//           Full Review - ID: {id}
//         </h1>
//         <p className="text-gray-700 mb-6">
//           هنا هيبان تفاصيل الريفيو اللي رقمه {id}.
//         </p>

//         <button
//           onClick={() => navigate(-1)}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FullReview;
//  ------------------- 2 ---------------------
import React from "react";

const FullReview = () => {
  const FullReviews = [
    { title: "Course", description: "UI/UX Design Basics" },
    { title: "Reviewer", description: "Salma Ali" },
    { title: "Date", description: "25 Jul 2025" },
    {
      title: "Comment",
      description:
        "The course was really helpful and covered all the basics. Loved the visuals and the instructor's way of explanation.",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Full Review</h1>
      <div className="space-y-6 max-w-2xl">
        {FullReviews.map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {review.title === "Comment" ? (
              <>
                <p className="font-semibold text-gray-800 mb-2">
                  {review.title}:
                </p>
                <p className="text-gray-600">{review.description}</p>
              </>
            ) : (
              <div className="flex items-start gap-4">
                <p className="font-semibold text-gray-800 w-32">
                  {review.title}:
                </p>
                <p className="text-gray-600 flex-1">{review.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullReview;
