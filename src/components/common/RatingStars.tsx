import { Star } from "lucide-react";

type RatingStarsProps = {
    starsNum: number;
    size?: number;
};

function RatingStars({ starsNum, size = 18 }: RatingStarsProps) {
    return (
        <div className="flex items-center">
            {Array.from({ length: starsNum }, (_, i) => (
                <Star
                    key={i}
                    size={size}
                    className="stroke-0 fill-warning-500"
                />
            ))}
        </div>
    );
}

export default RatingStars;
