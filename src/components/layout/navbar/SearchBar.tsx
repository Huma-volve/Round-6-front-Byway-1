import { useFormik } from "formik";
import * as Yup from "yup";

import { Search } from "lucide-react";

function SearchBar() {
    const formik = useFormik({
        // INITIAL VALUES
        initialValues: {
            search: "",
        },

        // YUP VALIDATION
        validationSchema: Yup.object({
            search: Yup.string().trim().required("This field is required"),
        }),

        // SUBMIT APPOINTMENT FORM
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="relative flex-1 flex flex-col gap-4 border-1 border-gray-700 rounded-md  text-gray-700 text-sm max-w-lg mr-auto"
            id="appointmentForm"
        >
            <div className="flex items-center gap-1">
                <Search size={18} className="ml-2" />
                <input
                    placeholder="Search courses"
                    id="search"
                    name="search"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.search}
                    className="placeholder:text-gray-700 text-gray-700 w-full outline-0 border-0 p-2"
                />
                {formik.errors.search && (
                    <p className="absolute top-10 left-0 text-xs text-error-800">
                        {formik.errors.search}
                    </p>
                )}
            </div>
        </form>
    );
}

export default SearchBar;
