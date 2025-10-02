import star from "../../../assets/images/star.png";
import nextarrow from "../../../assets/images/nextarrow.png";
import backarrow from "../../../assets/images/backarrow.png";
function Reviews() {
  const pages = [1, 2, 3];
  return (
    <div className="flex justify-center text-[#0F172A]">
      <div className="flex flex-col gap-4 py-6 px-2 md:px-0 md:py-8 md:w-[60%]  ">
        <h1 className=" font-[inter] text-xl font-semibold">Reviews (12)</h1>
        <div className="flex flex-col gap-3 ">
          {/* Card */}
          <div className="border-[1px] border-[#E2E8F0] rounded-2xl p-4 ">
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm">Course name: </h1>
              <span className="font-semibold text-lg ">
                Beginner’s Guide to UI UX
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm">Rating: </h1>
              <span className="font-semibold flex text-xl gap-0.5 ">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={star} alt="star"></img>
                ))}
              </span>
            </div>
            <div className="flex gap-1.5">
              <h1 className="text-sm">Review: </h1>
              <p className="font-normal text-[#334155] text-base">
                I was initially apprehensive, having no prior design experience.
                But the instructor, John Doe, did an amazing job of breaking
                down complex concepts into easily digestible modules. The video
                lectures were engaging, and the real-world examples really
                helped solidify my understanding.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#E2E8F0] rounded-2xl p-4 ">
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm">Course name: </h1>
              <span className="font-semibold text-lg ">
                Beginner’s Guide to UI UX
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm">Rating: </h1>
              <span className="font-semibold flex text-xl gap-0.5 ">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={star} alt="star"></img>
                ))}
              </span>
            </div>
            <div className="flex gap-1.5">
              <h1 className="text-sm">Review: </h1>
              <p className="font-normal text-[#334155] text-base">
                I was initially apprehensive, having no prior design experience.
                But the instructor, John Doe, did an amazing job of breaking
                down complex concepts into easily digestible modules. The video
                lectures were engaging, and the real-world examples really
                helped solidify my understanding.
              </p>
            </div>
          </div>
          <div className="border-[1px] border-[#E2E8F0] rounded-2xl p-4 ">
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm">Course name: </h1>
              <span className="font-semibold text-lg ">
                Beginner’s Guide to UI UX
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm">Rating: </h1>
              <span className="font-semibold flex text-xl gap-0.5 ">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={star} alt="star"></img>
                ))}
              </span>
            </div>
            <div className="flex gap-1.5">
              <h1 className="text-sm">Review: </h1>
              <p className="font-normal text-[#334155] text-base">
                I was initially apprehensive, having no prior design experience.
                But the instructor, John Doe, did an amazing job of breaking
                down complex concepts into easily digestible modules. The video
                lectures were engaging, and the real-world examples really
                helped solidify my understanding.
              </p>
            </div>
          </div>
        </div>
        {/* Pagination Section */}
        <div className="flex justify-center border-[#E2E8F0]">
          <div
            className="inline-flex rounded-[8px] border-[1px]   "
            style={{ boxShadow: " 0px 0px 8px 0px #3B82F61F" }}
          >
            <button className="cursor-pointer px-4 py-2   ">
              <img src={backarrow} alt="" />
            </button>
            {pages.map((page) => (
              <button
                className="cursor-pointer px-4 py-2 border-x-[1px]  "
                key={page}
                onClick={()=>console.log(page)}
              >
                {page}
              </button>
            ))}

            <button className="cursor-pointer px-4 py-2  ">
              <img src={nextarrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
