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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate} from "react-router-dom";

export default function Register() {
   const RegisterSchema = z
    .object({
      firstName: z
        .string()
        .nonempty("FirstName is Required")
        .min(2, "Min char 2")
        .max(18, "Max char 18"),
      lastName: z
        .string()
        .nonempty("LastName is Required")
        .min(2, "Min char 2")
        .max(18, "Max char 18"),
      userName: z
        .string()
        .nonempty("UserName is Required")
        .min(2, "Min char 2")
        .max(18, "Max char 18"),
      email: z
        .email("Email is Invalid")
        .nonempty("Email is Required")
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      password: z
        .string()
        .nonempty("Password is Required")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          "Enter Valid Password"
        ),
      repassword: z.string().nonempty("Confirmpassword is Required"),
    })
    .refine(
      (obj) => {
        return obj.password == obj.repassword;
      },
      {
        path: ["repassword"],
        error: "Confirm Password Not Match",
      }
    );
  const registerForm = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      repassword: "",
    },
    resolver:zodResolver(RegisterSchema)
  });
  const router = useNavigate()
  function handleRegister(values: any) {
    console.log(values);
      router('/login')
  }
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold text-[#0F172A]">
              Create Your Account
            </h2>
          </div>
          <div>
            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(handleRegister)}>
                <div>
                  <p className="text-[18px] font-semibold text-[#0F172A]">
                    Full Name
                  </p>
                  <div className="flex justify-between my-3">
                    <div className="w-[48%]">
                      <FormField
                        control={registerForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                placeholder="First Name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-[48%]">
                      <FormField
                        control={registerForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                                type="text"
                                placeholder="Second Name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <p className="text-[18px] font-semibold text-[#0F172A]">
                    Username
                  </p>
                  <FormField
                    control={registerForm.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Username"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="my-3">
                  <p className="text-[18px] font-semibold text-[#0F172A]">
                    Email
                  </p>
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email ID"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="my-3 w-[48%]">
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Password
                    </p>
                    <FormField
                      control={registerForm.control}
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

                  <div className="my-3 w-[48%]">
                    <p className="text-[18px] font-semibold text-[#0F172A]">
                      Confirm Password
                    </p>
                    <FormField
                      control={registerForm.control}
                      name="repassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Confirm Password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Button className=" bg-[#5BAE61] rounded-[10px] p-6 cursor-pointer mt-3">
                  Create Account
                </Button>
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
                    <img src={FaceBookIcon} alt="facebookLogo" className="w-[25px] h-[25px] me-3"/>
                    <p className="text-[#0866FF]">Facebook</p>
                </div>
                <div className="flex border rounded-[10px] px-4 md:px-10 py-3 items-center justify-center">
                    <img src={GoogleIcon} alt="googleLogo" className="w-[25px] h-[25px] me-3"/>
                    <p className="text-[#EA4335]">Google</p>
                </div>
                <div className="flex border rounded-[10px] px-4 md:px-10 py-3 items-center justify-center">
                    <img src={MicroSoftIcon} alt="MicrosoftLogo" className="w-[25px] h-[25px] me-3"/>
                    <p className="text-[#000]">MicroSoft</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
