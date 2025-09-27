import type { ICreateNewPassword, ISignIn, ISignUpStud, IVerifyEmail, ValidationErrorResponse } from "@/types";
import axios, { AxiosError } from "axios";
import { tr } from "date-fns/locale";
import toast from "react-hot-toast";

export const handleLogin = async (values: ISignIn) => {
  try {
    const res = await axios.post(`http://round6-byway.huma-volve.com/api/login`, {
      password:values.password ,
      email:values.email
    });
    console.log(values);
    
    if (res.status === 200) {
      console.log(res.data)
      toast.success(`Welcome Back ${res.data.user.first_name} 😊`);
     localStorage.setItem("token", res.data.token);
      return true;
    }
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    console.error("Login error:", err);
    if (err.response?.status === 401) {
      toast.error("Incorrect email or password");
      return;
    }
    toast.error("Something went wrong");
  }
};

export const handleSignUp = async (values : ISignUpStud) =>{
   try {
    const res = await axios.post(`http://round6-byway.huma-volve.com/api/register`, {
      username:values.userName,
      first_name:values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
      role: 'student'
    });

    if (res.status === 201) {
      toast.success("Sign up successful 😊");
      return true;
    }
  } catch (error) {
  const err = error as AxiosError<ValidationErrorResponse>;

console.error("Sign up error:", err.response);

if (err.response?.data.error?.email?.[0] === "The email has already been taken.") {
  toast.error("Email is already registered");
  return;
}

if (err.response?.data.error?.username?.[0] === "The username has already been taken.") {
  toast.error("The username has already been taken.");
  return;
}

    toast.error("Something went wrong");
  }
}


export const handelVerify = async (values:IVerifyEmail)=>{

 try{
   const res = await axios.post('http://round6-byway.huma-volve.com/api/verify-email',
   { email : values.email , 
     otp: values.otp
   }
  )
   if(res.status === 200 ){
     toast.success("Otp verified successfully");
      return true;
   }
 } catch (err) {
  const error = err as AxiosError<{ message: string }>;
    console.error("Verify otp error:", err);
    if (error.response?.data.message === "Invalid or expired code.") {
      toast.error("Invalid or expired OTP");
      return;
    }
    toast.error("Something went wrong");
 }

}


export const handleSendOtp = async (email:string)=>{
   try{
     const res = await axios.post('http://round6-byway.huma-volve.com/api/resend-verification',
      {
        email:email
      }
    )
    if(res.status ===200){
        toast.success("Resend OTP successful 😊");
      return true;
    }
   } catch(err){
      const error = err as AxiosError<{ message: string }>;
    console.error("Verify otp error:", err);
    if (error.response?.data.message === "Email already verified.") {
      toast.error("Email already verified.");
      return;
    }
    if (error.response?.data.message === "User not found.") {
      toast.error("User not found.");
      return;
    }
    toast.error("Something went wrong");
   }
} 

export const handelForgetPassword = async (email:string)=>{
 try{
   const res =await axios.post('http://round6-byway.huma-volve.com/api/forgot-password',{
    email:email
  })
   if(res.status ===200){
        toast.success("Resend OTP successful 😊");
      return true;
    }
 } catch(err){
   const error = err as AxiosError<{ message: string }>;
    console.error("Verify otp error:", err);
    if (error.response?.data.message === "Email already verified.") {
      toast.error("Email already verified.");
      return;
    }
    if (error.response?.data.message === "User not found.") {
      toast.error("User not found.");
      return;
    }
    toast.error("Something went wrong");
 }
} 

export const handelCreateNewPassword = async (values:ICreateNewPassword)=>{
  try{
       const res = await axios.post('http://round6-byway.huma-volve.com/api/reset-password',{
        email:values.email,
        password:values.password,
        password_confirmation:values.password_confirmation
       })
       if(res.status=== 200){
         toast.success("Create New Password successful 😊");
             return true;
       }
  }catch(err){
         const error = err as AxiosError<{ message: string }>;
    console.error("Create New-Password error:", err);
    if (error.response?.data.message === "Email already verified.") {
      toast.error("Email already verified.");
      return;
    }
    if (error.response?.data.message === "User not found.") {
      toast.error("User not found.");
      return;
    }
    toast.error("Something went wrong");
  }
}