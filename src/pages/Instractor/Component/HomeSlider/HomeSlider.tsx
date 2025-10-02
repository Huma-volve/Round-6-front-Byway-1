import React from "react";
import Slider from "react-slick";
import SliderImg from "@/assets/images/sliderimg.png";
import ratingIcon from "@/assets/images/ratings5.png";

function HomeSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="border p-2 rounded-2xl shadow-2xs mx-1 space-y-2">
            <img src={SliderImg} alt="img-slider" className="w-full" />
            <h3 className="text-[18px] font-semibold text-[#0F172A]">
              Beginner’s Guide to UI UX{" "}
            </h3>
            <p className="text-[14px] font-normal">
              By <span className="font-bold text-[#334155]">Omnya Ali</span>
            </p>
            <div className="flex items-center">
              <img src={ratingIcon} alt="rating" className="me-2" />
              <span className="text-[12px] font-semibold text-[#334155]">
                (1200 Ratings)
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#334155]">
              22 Total Hours. 155 Lectures. Beginner
            </p>
            <p className="text-[20px] font-semibold text-[#0F172A]">400 EGP</p>
          </div>
        </div>
        <div>
          <div className="border p-2 rounded-2xl shadow-2xs mx-1 space-y-2">
            <img src={SliderImg} alt="img-slider" className="w-full" />
            <h3 className="text-[18px] font-semibold text-[#0F172A]">
              Beginner’s Guide to UI UX{" "}
            </h3>
            <p className="text-[14px] font-normal">
              By <span className="font-bold text-[#334155]">Omnya Ali</span>
            </p>
            <div className="flex items-center">
              <img src={ratingIcon} alt="rating" className="me-2" />
              <span className="text-[12px] font-semibold text-[#334155]">
                (1200 Ratings)
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#334155]">
              22 Total Hours. 155 Lectures. Beginner
            </p>
            <p className="text-[20px] font-semibold text-[#0F172A]">400 EGP</p>
          </div>
        </div>
        <div>
          <div className="border p-2 rounded-2xl shadow-2xs mx-1 space-y-2">
            <img src={SliderImg} alt="img-slider" className="w-full" />
            <h3 className="text-[18px] font-semibold text-[#0F172A]">
              Beginner’s Guide to UI UX{" "}
            </h3>
            <p className="text-[14px] font-normal">
              By <span className="font-bold text-[#334155]">Omnya Ali</span>
            </p>
            <div className="flex items-center">
              <img src={ratingIcon} alt="rating" className="me-2" />
              <span className="text-[12px] font-semibold text-[#334155]">
                (1200 Ratings)
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#334155]">
              22 Total Hours. 155 Lectures. Beginner
            </p>
            <p className="text-[20px] font-semibold text-[#0F172A]">400 EGP</p>
          </div>
        </div>
        <div>
          <div className="border p-2 rounded-2xl shadow-2xs mx-1 space-y-2">
            <img src={SliderImg} alt="img-slider" className="w-full" />
            <h3 className="text-[18px] font-semibold text-[#0F172A]">
              Beginner’s Guide to UI UX{" "}
            </h3>
            <p className="text-[14px] font-normal">
              By <span className="font-bold text-[#334155]">Omnya Ali</span>
            </p>
            <div className="flex items-center">
              <img src={ratingIcon} alt="rating" className="me-2" />
              <span className="text-[12px] font-semibold text-[#334155]">
                (1200 Ratings)
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#334155]">
              22 Total Hours. 155 Lectures. Beginner
            </p>
            <p className="text-[20px] font-semibold text-[#0F172A]">400 EGP</p>
          </div>
        </div>
        <div>
          <div className="border p-2 rounded-2xl shadow-2xs mx-1 space-y-2">
            <img src={SliderImg} alt="img-slider" className="w-full" />
            <h3 className="text-[18px] font-semibold text-[#0F172A]">
              Beginner’s Guide to UI UX{" "}
            </h3>
            <p className="text-[14px] font-normal">
              By <span className="font-bold text-[#334155]">Omnya Ali</span>
            </p>
            <div className="flex items-center">
              <img src={ratingIcon} alt="rating" className="me-2" />
              <span className="text-[12px] font-semibold text-[#334155]">
                (1200 Ratings)
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#334155]">
              22 Total Hours. 155 Lectures. Beginner
            </p>
            <p className="text-[20px] font-semibold text-[#0F172A]">400 EGP</p>
          </div>
        </div>
        <div>
          <div className="border p-2 rounded-2xl shadow-2xs mx-1 space-y-2">
            <img src={SliderImg} alt="img-slider" className="w-full" />
            <h3 className="text-[18px] font-semibold text-[#0F172A]">
              Beginner’s Guide to UI UX{" "}
            </h3>
            <p className="text-[14px] font-normal">
              By <span className="font-bold text-[#334155]">Omnya Ali</span>
            </p>
            <div className="flex items-center">
              <img src={ratingIcon} alt="rating" className="me-2" />
              <span className="text-[12px] font-semibold text-[#334155]">
                (1200 Ratings)
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#334155]">
              22 Total Hours. 155 Lectures. Beginner
            </p>
            <p className="text-[20px] font-semibold text-[#0F172A]">400 EGP</p>
          </div>
        </div>
        <div>
          <div className="border p-2 rounded-2xl shadow-2xs mx-1 space-y-2">
            <img src={SliderImg} alt="img-slider" className="w-full" />
            <h3 className="text-[18px] font-semibold text-[#0F172A]">
              Beginner’s Guide to UI UX{" "}
            </h3>
            <p className="text-[14px] font-normal">
              By <span className="font-bold text-[#334155]">Omnya Ali</span>
            </p>
            <div className="flex items-center">
              <img src={ratingIcon} alt="rating" className="me-2" />
              <span className="text-[12px] font-semibold text-[#334155]">
                (1200 Ratings)
              </span>
            </div>
            <p className="text-[14px] font-normal text-[#334155]">
              22 Total Hours. 155 Lectures. Beginner
            </p>
            <p className="text-[20px] font-semibold text-[#0F172A]">400 EGP</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
