import type { ICourseSearchQueries } from "@/types";
import axios from "axios";

const token = import.meta.env.VITE_TOKEN;
// const token = localStorage.getItem("token");

// GET COURSES
export const getCourses = async (queries?: ICourseSearchQueries) => {
    try {
        let searchQueries =
            queries &&
            Object.entries(queries)
                .filter((query) => !!query[1])
                .map((query) => `${query[0]}=${query[1]}`)
                .join("&");
        searchQueries = searchQueries ? "?" + searchQueries : "";

        const response = await axios.get(
            `${
                import.meta.env.VITE_BASE_URL
            }api/courses/search${searchQueries}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
