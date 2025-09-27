import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/components/common/Loader";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import type { ICreateNewPassword } from "@/types";
import { handelCreateNewPassword } from "@/api/Auth/auth";

const CreateNewPassword = () => {
  const location = useLocation();
  const email = location.state.email;
  const navigate = useNavigate();
  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    password_confirmation: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleCreateNewPasswordSubmit = async (values: ICreateNewPassword) => {
    const res = await handelCreateNewPassword(values);
    if (res) {
      navigate("/log-in");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: email,
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: handleCreateNewPasswordSubmit,
  });

  return (
    <>
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start max-h-screen mt-12">
        <div className="md:w-[40%] h-full md:ml-17 flex flex-col justify-center items-center gap-4">
          <h1 className="text-black font-semibold text-2xl text-start w-full">
            Create a New Password
          </h1>
          <h3 className="text-[#AEAEB2] text-start w-full">
            Recover your account password
          </h3>

          <form className="w-full" onSubmit={formik.handleSubmit}>
            {/* Password Row */}
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label className="font-semibold text-[#587DBD]">
                    Password
                  </Label>
                  <Input
                    className="rounded-full text-black placeholder:text-gray-400 selection:bg-blue-500 selection:text-white"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="new-password"
                  />
                </div>
                <div>
                  <Label className="font-semibold text-[#587DBD]">
                    Confirm Password
                  </Label>
                  <Input
                    className="rounded-full"
                    type="password"
                    placeholder="Confirm Password"
                    name="password_confirmation"
                    value={formik.values.password_confirmation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="new-password"
                  />
                </div>
              </div>
              {(formik.errors.password && formik.touched.password) ||
              (formik.errors.password_confirmation &&
                formik.touched.password_confirmation) ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.password ||
                    formik.errors.password_confirmation}
                </p>
              ) : null}
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                className="w-full py-6 bg-[#5BAE61] hover:bg-[#4a9c51]"
                type="submit"
                disabled={
                  formik.isSubmitting || Object.keys(formik.errors).length > 0
                }
              >
                {formik.isSubmitting ? <Loader /> : "Create New Password"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateNewPassword;
