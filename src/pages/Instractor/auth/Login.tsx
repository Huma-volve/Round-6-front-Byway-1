import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import FaceBookIcon from "@/assets/images/facebook.png";
import MicroSoftIcon from "@/assets/images/microsoft.png";
import GoogleIcon from "@/assets/images/search.png";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const navg = useNavigate()
  const LoginSchema = z.object({
    email: z
      .email("Email is Required")
      .nonempty("Email is Required")
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    password: z
      .string()
      .nonempty("Password is Required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "Enter Valid Password"
      ),
  });

  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver:zodResolver(LoginSchema)
  });

  function handleLogin(values: any) {
    console.log(values);
    navg('/instructor')

  }
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold text-[#0F172A]">
              Sign in to your account
            </h2>
          </div>
          <div>
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleLogin)}>
                <div className="my-3">
                  <p className="text-[18px] font-semibold text-[#0F172A]">
                    Email
                  </p>
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Username or Email ID"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="my-3">
                  <p className="text-[18px] font-semibold text-[#0F172A]">
                    Password
                  </p>
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Enter Password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Button className=" bg-[#5BAE61] rounded-[10px] p-6 cursor-pointer mt-3">
                    Sign In
                  </Button>

                  <Link
                    to="/instructor/forgetPassword"
                    className="text-[12px] font-normal text-[#727272] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </Form>

            <div className="flex justify-between items-center my-5">
              <hr className="border border-[#94A3B8] w-[40%]" />
              <p className="text-[14px] font-normal text-[#94A3B8]">
                Sign up with
              </p>
              <hr className="border border-[#94A3B8] w-[40%]" />
            </div>

            <div className="flex justify-between">
              <div className="flex border rounded-[10px] px-4 md:px-10 py-3 items-center justify-center">
                <img
                  src={FaceBookIcon}
                  alt="facebookLogo"
                  className="w-[25px] h-[25px] me-3"
                />
                <p className="text-[#0866FF]">Facebook</p>
              </div>
              <div className="flex border rounded-[10px] px-4 md:px-10 py-3 items-center justify-center">
                <img
                  src={GoogleIcon}
                  alt="googleLogo"
                  className="w-[25px] h-[25px] me-3"
                />
                <p className="text-[#EA4335]">Google</p>
              </div>
              <div className="flex border rounded-[10px] px-4 md:px-10 py-3 items-center justify-center">
                <img
                  src={MicroSoftIcon}
                  alt="MicrosoftLogo"
                  className="w-[25px] h-[25px] me-3"
                />
                <p className="text-[#000]">MicroSoft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
