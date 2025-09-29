import { useNavigate } from "react-router-dom";

import PageNavigation from "@/components/common/PageNavigation";
import RatingStars from "@/components/common/RatingStars";
import { Button } from "@/components/ui/button";
import LectureLink from "./components/LectureLink";
import ReviewCard from "../../components/common/ReviewCard";

function CourseDetails() {
    const navigate = useNavigate();

    function handleBuyCourse() {
        navigate("/payment", { state: { courseId: 1 } });
    }

    //! CHANGE LATER
    const lectures: string[] = [
        "Introduction to UI/UX",
        "Design Principles",
        "Design Principles",
        "Prototyping",
        "User Testing",
        "Final Project",
    ];
    //! CHANGE LATER

    return (
        <>
            <PageNavigation
                prevPages={[
                    {
                        id: "browse courses",
                        label: "Browse Courses",
                        path: "/courses",
                    },
                ]}
                curPage="Course Details"
            />

            <div className="mt-8">
                <h1 className="text-blue font-bold text-2xl md:text-3xl">
                    UI/UX Design
                </h1>
                <p className="text-gray-700 ml-2 mt-1">Created by Omnya Ali</p>
                <div className="flex flex-col gap-2">
                    <h2 className="text-gray-900 font-bold text-lg md:text-xl mt-4">
                        Introduction to user interface and user experience
                        design
                    </h2>
                    <p className="text-gray-600">
                        Begin your journey in user interface and user experience
                        design. You'll learn to design wireframes, user flows,
                        and interactive prototypes using Figma.
                    </p>
                    <p className="text-gray-900 font-medium">
                        Duration: 7 weeks
                    </p>
                    <div className="flex items-center gap-2">
                        <p className="w-fit px-2 py-0.5 bg-blue opacity-50 text-white text-sm rounded-sm">
                            <span className="opacity-100">Bestseller</span>
                        </p>
                        <p className="text-gray-700 font-medium text-sm">
                            (1200 Ratings)
                        </p>
                        <RatingStars starsNum={5} size={14} />
                    </div>
                    <p className="text-primary-main font-semibold text-lg">
                        400 EGP
                    </p>
                    <Button
                        onClick={handleBuyCourse}
                        className="bg-primary-main font-semibold max-w-72 rounded-sm text-base hover:scale-105 transition-all"
                    >
                        Buy Now
                    </Button>
                </div>
            </div>

            <div className="mt-6 mb-12">
                <h3 className="font-semibold border-1 border-blue py-1 px-4 rounded-sm w-fit mb-6">
                    Content
                </h3>
                <div className="flex flex-col gap-6">
                    {lectures.map((lecture, i) => (
                        <LectureLink label={`Lecture ${i + 1}: ${lecture}`} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <ReviewCard />
                <ReviewCard />
            </div>
        </>
    );
}

export default CourseDetails;
