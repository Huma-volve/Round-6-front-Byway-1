import PageNavigation from "@/components/common/PageNavigation";
import ReviewCard from "@/components/common/ReviewCard";
import CourseCard from "../courses/components/CourseCard";
import StateCard from "../../components/common/StateCard";
import UserAvatar from "@/components/common/UserAvatar";

function InstructorDetails() {
    return (
        <div className="flex flex-col gap-8">
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

            <div className="flex items-center gap-4 mt-4">
                <UserAvatar
                    className="w-24 h-24"
                    src="https://github.com/shadcn.png"
                    userName="Omnya Ali"
                />
                <div className="font-semibold sm:text-lg text-gray-950">
                    <p>Omnya Ali - 2.5 Million</p>
                    <p>+Enrollments Worldwide</p>
                </div>
            </div>
            <div className="flex items-center gap-20">
                <StateCard
                    title="1000+"
                    label="number of students"
                    addBorder={false}
                />
                <StateCard
                    title="15+"
                    label="number of reviews"
                    addBorder={false}
                />
            </div>

            <div>
                <h2 className="text-gray-900 font-bold text-lg mb-2">
                    About me
                </h2>
                <p className="text-gray-900">
                    I'm a certified UI/UX designer with 5+ years of experience
                    in teaching and designing user-centric products. I’ve helped
                    over 1,000 students kickstart their design careers through
                    hands-on, practical courses.
                </p>
            </div>

            <div>
                <h2 className="text-gray-900 font-bold text-lg mb-2">
                    My courses
                </h2>
                <div>{/* <CourseCard /> */}</div>
            </div>

            <div className="flex flex-col gap-4">
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    );
}

export default InstructorDetails;
