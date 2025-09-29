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


export interface INotification {
  id: string;
  type: string;
  details: {
    payment_id: number;
    amount: number;
    status: string;
    message: string;
  };
  read_at: string | null;
  created_at: string;
}

export interface IPaymentMethod {
  id: number;
  brand: string;
  last_four: string;
  is_default: number;
  provider: string;
}

export interface IPaymentHistory {
  date: string;
  course: string;
  amount: number;
  currency: string;
  method: string;
}

export interface ILink {
  id: string;
  label: string;
  path: string;
}

export interface IContacts {
  address: string;
  tel: string;
  mail: string;
  socials: ISocial[];
}

export interface ISocial {
  image: string;
  title: string;
  link: string;
}

export interface ICourseResponse {
    current_page: number;
    data: ICourse[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        url: null | string;
        label: string;
        active: boolean;
    }[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

export interface ICourse {
    id: number;
    instructor_id: number;
    category_id: number;
    title: string;
    description: string;
    price: string;
    compare_price: string;
    image: string;
    cover_public_id: null;
    lessons_count: number;
    level: string;
    duration_hours: number;
    total_minutes: number;
    video_provider: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}

export interface ICourseSearchQueries {
    q?: string;
    category?: string;
    level?: string;
    status?: string;
    price_max?: number;
export interface TopLevel {
    id:         number;
    student_id: number;
    course_id:  number;
    created_at: Date;
    updated_at: Date;
    course:     Course;
}

export interface Course {
    id:              number;
    instructor_id:   number;
    category_id:     number;
    title:           string;
    description:     string;
    price:           string;
    compare_price:   string;
    image:           string;
    cover_public_id: string;
    lessons_count:   number;
    level:           string;
    duration_hours:  number;
    total_minutes:   number;
    video_provider:  null;
    status:          string;
    created_at:      Date;
    updated_at:      Date;
}
