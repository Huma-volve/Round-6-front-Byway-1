import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "./CategoryCard";
import {
    Atom,
    Briefcase,
    FolderCode,
    Monitor,
    type LucideIcon,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

type ICategory = {
    icon: LucideIcon;
    title: string;
    coursesNum: number;
};

const categories: ICategory[] = [
    {
        icon: Monitor,
        title: "Computer",
        coursesNum: 11,
    },
    {
        icon: FolderCode,
        title: "Development",
        coursesNum: 12,
    },
    {
        icon: Briefcase,
        title: "Marketing",
        coursesNum: 12,
    },
    {
        icon: Atom,
        title: "Physics",
        coursesNum: 12,
    },
];

function TopCategories() {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleSelectCategory(category: string) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("category", category);
        setSearchParams(newParams);
    }

    return (
        <section>
            <h2 className="font-semibold text-lg mb-6">Top Categories</h2>
            <Carousel>
                <CarouselContent className="-ml-1 flex items-center gap-4">
                    {categories.map((category: ICategory) => (
                        <CarouselItem
                            key={category.title}
                            className="pl-1 max-w-40 md:max-w-72 cursor-pointer"
                            onClick={() => handleSelectCategory(category.title)}
                        >
                            <CategoryCard
                                Icon={category.icon}
                                title={category.title}
                                coursesNum={category.coursesNum}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="translate-x-13" />
                <CarouselNext className="-translate-x-13" />
            </Carousel>
        </section>
    );
}

export default TopCategories;
