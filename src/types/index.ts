export type ISignIn = {
  email: string;
  password: string;
};

export type ISignUpStud = {
  userName:string;
  first_name: string;
  last_name:string
  email: string;
  password: string;
  password_confirmation:string;
  role:string
};

export type IVerifyEmail = {
    email:string
    otp:string
}

export interface ValidationErrorResponse {
  error?: {
    email?: string[];
    username?: string[];
    [key: string]: string[] | undefined; 
  };
}

export interface ICreateNewPassword {
 email: string;
  password: string;
  password_confirmation:string;
}


