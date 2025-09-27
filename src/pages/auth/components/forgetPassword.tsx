import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { Loader } from "@/components/common/Loader";
import { Input } from "@/components/ui/input";
import GoBackButton from "@/components/common/GoBackButton";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { handelForgetPassword } from "@/api/Auth/auth";

export default function ResendOTP() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  const HandelForgetPassword = async (values: { email: string }) => {
    const res = await handelForgetPassword(values.email);
    if (res) {
      navigate("/create-new-password", { state: { email: values.email } });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: HandelForgetPassword,
  });

  return (
    <div className="relative h-screen py-14 lg:py-0">
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center lg:justify-between h-full">
        <div className="absolute top-30 left-10 lg:left-20">
          <GoBackButton />
        </div>

        <div className="w-[80%] flex flex-col justify-center mx-auto lg:w-1/3">
          <h1 className="text-2xl font-bold text-center">
            Forget your Password
          </h1>
          <p className="text-xs text-center my-4">
            Recover your account password
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <Label className="text-[#587DBD] font-semibold">E-mail</Label>
              <Input
                type="email"
                placeholder="Email"
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

            <Button
              className="w-full py-6 bg-[#5BAE61]"
              type="submit"
              disabled={
                formik.isSubmitting || Object.keys(formik.errors).length > 0
              }
            >
              {formik.isSubmitting ? (
                <Loader size={"md"} variant="white" />
              ) : (
                "Reset Password"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
