import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserAvatarProps = {
    className?: string;
};

function UserAvatar({ className }: UserAvatarProps) {
    return (
        <Avatar className={className || ""}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
}

export default UserAvatar;
