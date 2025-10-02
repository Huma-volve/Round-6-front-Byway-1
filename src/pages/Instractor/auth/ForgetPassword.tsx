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
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ForgetPassword() {
  const ForgetpasswordSchema = z.object({
    email: z
      .email("Email is Required")
      .nonempty("Email is Required")
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  });

  const forgetPasswordform = useForm({
    defaultValues: {
      email: "",
    },
    resolver:zodResolver(ForgetpasswordSchema)
  });
   const navg = useNavigate();
  function handleLogin(values: any) {
    console.log(values);
    navg('/instructor/resetcode')
  }
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold text-[#0F172A]">
              Forgot Password
            </h2>
            <p className="text-[16px] font-medium text-[#AEAEB2] my-3">
              Recover your account password
            </p>
          </div>
          <div>
            <Form {...forgetPasswordform}>
              <form onSubmit={forgetPasswordform.handleSubmit(handleLogin)}>
                <div className="my-3">
                  <p className="text-[18px] font-semibold text-[#587DBD]">
                    Email
                  </p>
                  <FormField
                    control={forgetPasswordform.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="Enter your email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                  <Button className=" bg-[#5BAE61] rounded-[10px] p-6 cursor-pointer mt-3 w-full text-2xl font-medium">
                    Continue
                  </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
