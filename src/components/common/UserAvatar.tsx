import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import userPlaceholderImg from "@/assets/images/user-placeholder.png";

type UserAvatarProps = {
    src: string;
    userName: string;
    className?: string;
};

function UserAvatar({ className, src, userName }: UserAvatarProps) {
    return (
        <Avatar className={className || ""}>
            <AvatarImage src={src || userPlaceholderImg} />
            <AvatarFallback>{getInitials(userName)}</AvatarFallback>
        </Avatar>
    );
}

export default UserAvatar;
