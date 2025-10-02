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
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewPassword() {
  const NewpasswordSchema = z
    .object({
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

  const newPasswordForm = useForm({
    defaultValues: {
      password: "",
      repassword: "",
    },
    resolver: zodResolver(NewpasswordSchema),
  });

  const navg = useNavigate();

  function handleNewPassword(values: any) {
    console.log(values);
    navg("/login");
  }
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold text-[#0F172A]">
              Create a New Password
            </h2>
            <p className="text-[16px] font-medium text-[#AEAEB2] my-3">
              Recover your account password
            </p>
          </div>
          <div>
            <Form {...newPasswordForm}>
              <form onSubmit={newPasswordForm.handleSubmit(handleNewPassword)}>
                <div className="my-8">
                  <p className="text-[14px] font-bold text-[#587DBD]">
                    New Password
                  </p>
                  <FormField
                    control={newPasswordForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Enter new password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="my-8">
                  <p className="text-[14px] font-bold text-[#587DBD]">
                    Confirm Password
                  </p>
                  <FormField
                    control={newPasswordForm.control}
                    name="repassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            placeholder="Confirm your password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center">
                  <Button className=" bg-[#5BAE61] rounded-[10px] p-6 cursor-pointer mt-3 w-full">
                    Continue
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
