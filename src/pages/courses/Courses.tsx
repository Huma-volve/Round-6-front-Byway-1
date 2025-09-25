import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { getCourses } from "@/api/courses/courses";
import type { ICourse, ICourseResponse } from "@/types";
import CourseCard from "./components/CourseCard";
import { Loader } from "@/components/common/Loader";
import PagePagination from "@/components/common/PagePagination";
import AlertMsg from "@/components/common/AlertMsg";
import NoData from "@/components/common/NoData";
import TopCategories from "./components/TopCategories";
import States from "./components/States";

function Courses() {
    const [coursesRes, setCoursesRes] = useState<ICourseResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [searchParams] = useSearchParams();

    const courses = coursesRes?.data;

    useEffect(() => {
        async function fetchCourses() {
            try {
                setIsLoading(true);
                const res = await getCourses({
                    q: searchParams.get("q") || "",
                    category: searchParams.get("category") || "",
                });
                setCoursesRes(res);
            } catch (error: unknown) {
                if (axios.isAxiosError(error)) {
                    setError(error.response?.data?.message || error.message);
                } else {
                    setError(
                        "An unexpected error occurred. Cannot get courses."
                    );
                }
            } finally {
                setIsLoading(false);
            }
        }
        fetchCourses();
    }, []);

    return (
        <>
            <TopCategories />
            <States />
            <section>
                <h2 className="font-semibold text-lg">All courses</h2>
                <div className="flex items-center justify-center my-8">
                    {isLoading ? (
                        <Loader />
                    ) : error !== null ? (
                        <AlertMsg message={error} />
                    ) : !courses || !courses.length ? (
                        <NoData />
                    ) : (
                        <>
                            <div className="flex flex-wrap gap-x-4 gap-y-8">
                                {courses?.map((course: ICourse) => (
                                    <CourseCard
                                        course={course}
                                        key={course.id}
                                    />
                                ))}
                            </div>
                            <PagePagination />
                        </>
                    )}
                </div>
            </section>
        </>
    );
}

export default Courses;
