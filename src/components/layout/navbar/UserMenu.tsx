import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import type { ILink } from "@/types";
import { Link } from "react-router-dom";

const profileLinks: ILink[] = [
    {
        id: "profile",
        label: "Profile",
        path: "/profile",
    },
    {
        id: "my-courses",
        label: "My Courses",
        path: "/my-courses",
    },
    {
        id: "close-account",
        label: "Close account",
        path: "/close-account",
    },
    {
        id: "payment-history",
        label: "Payment History",
        path: "/payment-history",
    },
    {
        id: "setting",
        label: "Setting",
        path: "/settings",
    },
    {
        id: "sign-out",
        label: "Sign out",
        path: "/sign-out",
    },
];

function UserMenu() {
    return (
        <>
            {profileLinks.map((link: ILink) => (
                <DropdownMenuItem key={link.id}>
                    <Link
                        to={link.path}
                        className={`w-full ${
                            link.id === "sign-out"
                                ? "text-error-800"
                                : "text-gray-950"
                        }`}
                    >
                        {link.label}
                    </Link>
                </DropdownMenuItem>
            ))}
        </>
    );
}

export default UserMenu;
