import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/components/common/Loader";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import type { ISignUpStud } from "@/types";
import { handleSignUp } from "@/api/Auth/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    userName: yup.string().required("userName is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleٍSignUpSubmit = async (values: ISignUpStud) => {
    const res = await handleSignUp(values);
    if (res) navigate("/verify-email", { state: { email: values.email } });
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "",
    },
    validationSchema,
    onSubmit: handleٍSignUpSubmit,
  });

  return (
    <>
      <div className="flex flex-col justify-center md:justify-start items-center md:items-start max-h-screen mt-12">
        <div className="md:w-[40%] h-full md:ml-17 flex flex-col justify-center items-center gap-4">
          <h1 className="text-black font-semibold text-2xl text-start w-full">
            Create Your Account
          </h1>

          <form className="w-full" onSubmit={formik.handleSubmit}>
            {/* Full Name Row */}
            <div>
              <Label className="font-semibold">Full Name</Label>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="given-name"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="family-name"
                />
              </div>
              {(formik.errors.first_name && formik.touched.first_name) ||
              (formik.errors.last_name && formik.touched.last_name) ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.first_name || formik.errors.last_name}
                </p>
              ) : null}
            </div>

            {/* userName */}
            <div className="mt-4">
              <Label className="font-semibold">userName</Label>
              <Input
                type="text"
                placeholder="userName"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="userName"
              />
              {formik.errors.userName && formik.touched.userName ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.userName}
                </p>
              ) : null}
            </div>

            {/* Email */}
            <div className="mt-4">
              <Label className="font-semibold">Email</Label>
              <Input
                type="email"
                placeholder="Email ID"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="email"
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            {/* Password Row */}
            <div className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-semibold">Password</Label>
                  <Input
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
                  <Label className="font-semibold">Confirm Password</Label>
                  <Input
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
                {formik.isSubmitting ? <Loader /> : "Create Account"}
              </Button>
            </div>
          </form>
          <Link to="/log-in-instractor" className="hover:text-[#5BAE61]">
            log in with instractor
          </Link>

          <div className="my-8 relative w-full">
            <div className="h-px bg-gray-400 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-600 rounded-full">
                Or
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center gap-3 items-center  mb-6">
            <button className="cursor-pointer w-[100%] md:w-[40%] flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-gray-700 font-medium">Facebook</span>
            </button>

            <button className="cursor-pointer w-[100%] md:w-[40%] flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-gray-700 font-medium">Google</span>
            </button>

            <button className="cursor-pointer w-[100%] md:w-[40%] flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#F25022" d="M11.4 11.4H0V0h11.4v11.4z" />
                <path fill="#00A4EF" d="M24 11.4H12.6V0H24v11.4z" />
                <path fill="#7FBA00" d="M11.4 24H0V12.6h11.4V24z" />
                <path fill="#FFB900" d="M24 24H12.6V12.6H24V24z" />
              </svg>
              <span className="text-gray-700 font-medium">Microsoft</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
