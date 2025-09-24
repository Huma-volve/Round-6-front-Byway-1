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
