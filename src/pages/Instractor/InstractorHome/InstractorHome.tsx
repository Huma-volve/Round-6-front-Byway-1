import { Button } from "@/components/ui/button";
import HomeSlider from "../Component/HomeSlider/HomeSlider";
import star from "@/assets/images/icon.png";
import rating from "@/assets/images/ratings.png";
import rating2 from "@/assets/images/ratings2.png";
import rating3 from "@/assets/images/ratings3.png";
import rating4 from "@/assets/images/ratings4.png";
import rating5 from "@/assets/images/ratings5.png";
import ReviewImg from "@/assets/images/avatarrev.png";
import { useState } from "react";

export default function InstractorHome() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div>
        <div className="flex md:justify-between flex-col md:flex-row  ">
          <div>
            <p className="text-2xl font-medium text-[#334155]">Instructor</p>
            <h4 className="text-[32px] font-semibold text-[#334155]">
              Omnya Ali
            </h4>
            <p className="text-2xl font-medium text-[#334155]">
              Web developer, UX/UI Designer, and Teacher
            </p>
            <div className="flex space-x-16 my-15">
              <div>
                <p className="text-2xl font-semibold text-[#5BAE61]">
                  Total Students
                </p>
                <span className="text-2xl font-semibold text-[#0F172A]">
                  1000
                </span>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#EA4335]">Reviews</p>
                <span className="text-2xl font-semibold text-[#0F172A]">
                  154
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mb-6">
              <p className="text-[64px] font-semibold text-[#3B82F6]  py-5 px-10 rounded-full bg-[#BFCDEF]">
                O
              </p>
            </div>
            <div className="flex flex-col  items-center space-y-2">
              <Button className="w-[200px] cursor-pointer h-[48px] text-[20px] font-medium text-[#3B82F6] py-2.5 px-6 border border-[#020617]">
                Website
              </Button>
              <Button className="w-[200px] cursor-pointer h-[48px] text-[20px] font-medium text-[#3D5DAB] py-2.5 px-6 border border-[#020617]">
                Twitter
              </Button>
              <Button className="w-[200px] cursor-pointer h-[48px] text-[20px] font-medium text-[#EA4335] py-2.5 px-6 border border-[#020617]">
                Youtube
              </Button>
            </div>
          </div>
        </div>
        <div className="my-5">
          <p className="text-2xl font-semibold text-[#3D5DAB]">Your courses</p>
          <div className="my-3">
            <HomeSlider />
          </div>
          <div className="my-2 md:my-10">
            <HomeSlider />
          </div>
        </div>

        <p className="text-[20px] font-semibold text-[#0F172A]">
          Learner Reviews
        </p>
        <div className="grid grid-cols-6 md:grid-cols-12 my-10">
          <div className="col-span-6 md:col-span-3">
            <div className="flex items-center space-x-2 mb-2">
              <img src={star} alt="star-icon" />
              <p className="text-[20px] font-semibold text-[#0F172A]">4.6</p>
              <span className="text-[14px] font-medium text-[#334155]">
                146,951 reviews
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-2 ">
                <img src={rating5} alt="rating" />
                <span>80%</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 ">
                <img src={rating4} alt="rating" />
                <span>10%</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 ">
                <img src={rating3} alt="rating" />
                <span>5%</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 ">
                <img src={rating2} alt="rating" />
                <span>3%</span>
              </div>
              <div className="flex items-center space-x-2 mb-2 ">
                <img src={rating} alt="rating" />
                <span>2%</span>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-9 space-y-3">
            {showAll ? (
              <>
                <div className="flex flex-col md:flex-row gap-6 items-start border border-neutral-400 p-4 rounded-2xl justify-between">
                  <div className="flex items-center space-x-2 w-full md:w-1/3">
                    <img src={ReviewImg} alt="review-avatar" />
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Mohamed
                    </p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-row items-center space-x-5 md:space-x-12">
                      <div className="flex items-center space-x-2">
                        <img src={star} alt="star-icon" />
                        <span className="text-[18px] font-semibold text-[#0F172A]">
                          5
                        </span>
                      </div>

                      <p className="text-[14px] font-normal text-[#334155]">
                        Reviewed on 22nd March, 2024
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#334155] my-2">
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start border border-neutral-400 p-4 rounded-2xl justify-between">
                  <div className="flex items-center space-x-2 w-full md:w-1/3">
                    <img src={ReviewImg} alt="review-avatar" />
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Mohamed
                    </p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-row items-center space-x-5 md:space-x-12">
                      <div className="flex items-center space-x-2">
                        <img src={star} alt="star-icon" />
                        <span className="text-[18px] font-semibold text-[#0F172A]">
                          5
                        </span>
                      </div>

                      <p className="text-[14px] font-normal text-[#334155]">
                        Reviewed on 22nd March, 2024
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#334155] my-2">
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start border border-neutral-400 p-4 rounded-2xl justify-between">
                  <div className="flex items-center space-x-2 w-full md:w-1/3">
                    <img src={ReviewImg} alt="review-avatar" />
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Mohamed
                    </p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-row items-center space-x-5 md:space-x-12">
                      <div className="flex items-center space-x-2">
                        <img src={star} alt="star-icon" />
                        <span className="text-[18px] font-semibold text-[#0F172A]">
                          5
                        </span>
                      </div>

                      <p className="text-[14px] font-normal text-[#334155]">
                        Reviewed on 22nd March, 2024
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#334155] my-2">
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start border border-neutral-400 p-4 rounded-2xl justify-between">
                  <div className="flex items-center space-x-2 w-full md:w-1/3">
                    <img src={ReviewImg} alt="review-avatar" />
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Mohamed
                    </p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-row items-center space-x-5 md:space-x-12">
                      <div className="flex items-center space-x-2">
                        <img src={star} alt="star-icon" />
                        <span className="text-[18px] font-semibold text-[#0F172A]">
                          5
                        </span>
                      </div>

                      <p className="text-[14px] font-normal text-[#334155]">
                        Reviewed on 22nd March, 2024
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#334155] my-2">
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start border border-neutral-400 p-4 rounded-2xl justify-between">
                  <div className="flex items-center space-x-2 w-full md:w-1/3">
                    <img src={ReviewImg} alt="review-avatar" />
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Mohamed
                    </p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-row items-center space-x-5 md:space-x-12">
                      <div className="flex items-center space-x-2">
                        <img src={star} alt="star-icon" />
                        <span className="text-[18px] font-semibold text-[#0F172A]">
                          5
                        </span>
                      </div>

                      <p className="text-[14px] font-normal text-[#334155]">
                        Reviewed on 22nd March, 2024
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#334155] my-2">
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col md:flex-row gap-6 items-start border border-neutral-400 p-4 rounded-2xl justify-between">
                  <div className="flex items-center space-x-2 w-full md:w-1/3">
                    <img src={ReviewImg} alt="review-avatar" />
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Mohamed
                    </p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-row items-center space-x-5 md:space-x-12">
                      <div className="flex items-center space-x-2">
                        <img src={star} alt="star-icon" />
                        <span className="text-[18px] font-semibold text-[#0F172A]">
                          5
                        </span>
                      </div>

                      <p className="text-[14px] font-normal text-[#334155]">
                        Reviewed on 22nd March, 2024
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#334155] my-2">
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-start border border-neutral-400 p-4 rounded-2xl justify-between">
                  <div className="flex items-center space-x-2 w-full md:w-1/3">
                    <img src={ReviewImg} alt="review-avatar" />
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Mohamed
                    </p>
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-row items-center space-x-5 md:space-x-12">
                      <div className="flex items-center space-x-2">
                        <img src={star} alt="star-icon" />
                        <span className="text-[18px] font-semibold text-[#0F172A]">
                          5
                        </span>
                      </div>

                      <p className="text-[14px] font-normal text-[#334155]">
                        Reviewed on 22nd March, 2024
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#334155] my-2">
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
              </>
            )}

            <div>
              <Button
                onClick={() => setShowAll(!showAll)}
                className="cursor-pointer py-2.5 px-6 rounded-[8px] border border-neutral-400 text-[#0F172A] h-[48px] hover:bg-[#0F172A] hover:text-white"
              >
                {showAll ? "View less Reviews" : "View more Reviews"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
