interface CourseReview {
  course: string;
  reviewer: string;
  date: Date;
  comment: string;
}

function ReviewDetails() {
  const courseReview: CourseReview = {
    course: "UI/UX Design Basics",
    reviewer: "Salma Ali",
    date: new Date(),
    comment:
      "The course was really helpful and covered all the basics. Loved the visuals and the instructor's way of explanation.",
  };

  const fields = [
    { label: "Course", value: courseReview.course },
    { label: "Reviewer", value: courseReview.reviewer },
    { label: "Date", value: courseReview.date.toLocaleDateString() },
    { label: "Comment", value: courseReview.comment },
  ];

  return (
    <div className="p-8 flex flex-col gap-5 bg-[#EBEBEB] h-screen">
      <h1 className="text-[#587DBD] font-sans text-[24px] md:text-[30px] font-medium">
        Full Review:
      </h1>

      {fields.map((field, index) => (
        <div
          key={index}
          className="bg-white w-fit font-medium font-sans text-[14px] md:text-[18px] px-4 py-4 rounded-[10px]"
        >
          <p>
            {field.label}: {field.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ReviewDetails;
