import RatingStars from "@/components/common/RatingStars";
import UserAvatar from "./UserAvatar";

function ReviewCard() {
    return (
        <div className="border-1 border-gray-border rounded-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 mb-4">
                <div className="flex-1 flex items-center sm:justify-center gap-2">
                    <p className="text-gray-700 font-medium text-sm">
                        (1200 Ratings)
                    </p>
                    <RatingStars starsNum={5} size={14} />
                </div>
                <p className="text-gray-700 text-sm font-medium">
                    Reviewed on 22nd March, 2024
                </p>
            </div>
            <div className="flex items-center gap-6">
                <UserAvatar
                    className="w-18 h-18"
                    src="https://github.com/shadcn.png"
                    userName="Mohamed Ali"
                />
                <p className="text-lg font-semibold capitalize">mohamed ali</p>
            </div>
            <p className="text-gray-700 mt-6">
                I was initially apprehensive, having no prior design experience.
                But the instructor, John Doe, did an amazing job of breaking
                down complex concepts into easily digestible modules. The video
                lectures were engaging, and the real-world examples really
                helped solidify my understanding.
            </p>
        </div>
    );
}

export default ReviewCard;
