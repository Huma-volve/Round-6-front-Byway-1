import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { ICourse } from "@/types";
import coursePlaceholder from "@/assets/images/course-placeholder.svg";
import RatingStars from "@/components/common/RatingStars";
import { Link } from "react-router-dom";

type CourseCardProps = {
    course: ICourse;
};

function CourseCard({ course }: CourseCardProps) {
    const [image, setImage] = useState(course.image);

    return (
        <div className="max-w-72 flex flex-col gap-4 border-gray-border">
            <Link
                to={`/courses/${course.id}`}
                className="rounded-md w-full h-40 overflow-hidden"
            >
                <img
                    src={image}
                    alt={course.title}
                    onError={() => setImage(coursePlaceholder)}
                    className="w-full h-full object-cover object-center"
                />
            </Link>
            <Card className="flex-1">
                <CardHeader className="-mb-4">
                    <CardTitle className="text-gray-900">
                        <Link
                            to={`/courses/${course.id}`}
                            className="w-full h-full"
                        >
                            {course.title}
                        </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-700">
                        By Omnya Ali
                    </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                    <div className="flex items-center gap-2 mb-2">
                        <RatingStars starsNum={5} />
                        <p className="text-gray-700 font-medium text-sm">
                            (1200 Ratings)
                        </p>
                    </div>

                    <p className="capitalize text-gray-700 text-sm mb-2">
                        {course.duration_hours !== 0
                            ? `${course.duration_hours} total hours.`
                            : `${course.total_minutes} total minutes.`}{" "}
                        {course.lessons_count} Lectures. {course.level}
                    </p>

                    <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold text-gray-900">
                            {course.price} EGP
                        </p>
                        <Button className="bg-primary-main">Add to cart</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default CourseCard;
