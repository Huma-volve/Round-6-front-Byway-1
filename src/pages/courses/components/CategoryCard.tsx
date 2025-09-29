import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

type CategoryCardProps = {
    Icon: LucideIcon;
    title: string;
    coursesNum: number;
};

function CategoryCard({ Icon, title, coursesNum }: CategoryCardProps) {
    return (
        <Card className="group flex flex-col items-center gap-2 md:gap-4 p-4 border-gray-border text-sm md:text-base">
            <div className="w-14 h-14 group-hover:scale-110 transition-all bg-primary-100 rounded-full flex items-center justify-center">
                <Icon className="stroke-primary-500" />
            </div>
            <CardTitle className="capitalize text-gray-900">{title}</CardTitle>
            <CardDescription className="text-gray-700">
                {coursesNum} Courses
            </CardDescription>
        </Card>
    );
}

export default CategoryCard;
