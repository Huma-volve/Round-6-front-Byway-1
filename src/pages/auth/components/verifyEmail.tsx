import { useState, useEffect } from "react";

import GoBackButton from "@/components/common/GoBackButton";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useFormik } from "formik";
import * as yup from "yup";
import { Loader } from "@/components/common/Loader";
import { handelVerify, handleSendOtp } from "@/api/Auth/auth";
import { useLocation, useNavigate } from "react-router-dom";
import type { IVerifyEmail } from "@/types";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    alert("Your OTP is 000000");
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const validationSchema = yup.object({
    otp: yup.string().required("OTP is required"),
  });

  const handleVerifyOtpSubmit = async (values: IVerifyEmail) => {
    const res = await handelVerify(values);
    if (res) {
      navigate("/log-in");
    }
  };

  const handleResend = async () => {
    const res = await handleSendOtp(email);
    if (res) {
      alert("Your OTP is 000000");
      setTimer(60);
      setCanResend(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
      email: email,
    },
    validationSchema,
    onSubmit: handleVerifyOtpSubmit,
  });

  return (
    <div className="relative h-screen py-14 lg:py-0">
      <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center lg:justify-between h-full">
        <div className="absolute top-30 left-10 lg:left-20">
          <GoBackButton />
        </div>

        <div className="w-[80%] flex flex-col justify-center mx-auto lg:w-1/3">
          <h1 className="text-2xl font-bold text-center">Enter OTP</h1>
          <p className="text-xs text-center my-4">
            We have just sent you 4 digit code via your email example@gmail.com
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="flex justify-center gap-2 w-full mb-4">
              <InputOTP
                maxLength={6}
                value={formik.values.otp}
                onChange={(val) => formik.setFieldValue("otp", val)}
                onBlur={formik.handleBlur}
                name="otp"
                className="w-full mx-auto"
              >
                <InputOTPGroup>
                  {[...Array(6)].map((_, i) => (
                    <InputOTPSlot
                      key={i}
                      index={i}
                      className="w-[50px] border"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>

            {formik.errors.otp && formik.touched.otp ? (
              <p className="text-red-500 text-sm text-center my-4">
                {formik.errors.otp}
              </p>
            ) : null}

            <div className="text-center my-4 flex justify-center items-center">
              Didn’t receive code?{" "}
              {canResend ? (
                <p
                  onClick={handleResend}
                  className="text-primary cursor-pointer hover:underline"
                >
                  <span className="text-[#3D5DAB]">Resend Code</span>
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  Resend OTP in <span className="text-primary">{timer} </span>s
                </p>
              )}
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
                "Verify"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
