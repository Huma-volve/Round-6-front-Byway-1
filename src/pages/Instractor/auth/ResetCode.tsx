import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export default function ResetCode() {
  const navg = useNavigate();

  const ResetPasswordSchema = z.object({
    resetcode: z.string().nonempty("Resetcode is Required"),
  });

  const resetcodeForm = useForm({
    defaultValues: {
      resetcode: "",
    },
    resolver: zodResolver(ResetPasswordSchema),
  });

  function handleResetCode(values: any) {
    console.log(values);
    navg('/newpassword')
  }
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="text-center">
            <h2 className="text-[32px] font-semibold text-[#0F172A]">
              Enter OTP
            </h2>
            <p className="text-[16px] font-medium text-[#AEAEB2] my-3">
              We have just sent you 4 digit code via your email{" "}
              <span className="text-[16px] font-medium text-[#1C1C1E]">
                example@gmail.com
              </span>
            </p>
          </div>
          <div>
            <Form {...resetcodeForm}>
              <form onSubmit={resetcodeForm.handleSubmit(handleResetCode)}>
                <div className="my-15 ">
                  <FormField
                    control={resetcodeForm.control}
                    name="resetcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputOTP {...field} maxLength={6}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
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
            <div className="text-center my-3">
              <p>
                Didn’t receive code?
                <Button className="cursor-pointer">
                  <span className="text-[#3D5DAB] hover:underline">
                    Resend Code
                  </span>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
