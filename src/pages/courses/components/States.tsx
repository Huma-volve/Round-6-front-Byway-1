import StateCard from "@/components/common/StateCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

type IState = {
    title: string;
    label: string;
};

const states: IState[] = [
    {
        title: "250+",
        label: "Number of courses",
    },
    {
        title: "1000+",
        label: "Number of students",
    },
    {
        title: "15+",
        label: "Number of reviews",
    },
    {
        title: "2400+",
        label: "Number of teachers",
    },
];

function States() {
    return (
        <Carousel className="my-12">
            <CarouselContent className="-ml-1 flex items-center gap-2">
                {states.map((state: IState, i: number) => (
                    <CarouselItem
                        key={state.label}
                        className="pl-1 max-w-44 md:max-w-74"
                    >
                        <StateCard
                            title={state.title}
                            label={state.label}
                            addBorder={i + 1 !== states.length}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="translate-x-13" />
            <CarouselNext className="-translate-x-13" />
        </Carousel>
    );
}

export default States;
