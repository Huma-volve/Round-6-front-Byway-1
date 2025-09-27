import { Link, useLocation } from "react-router-dom";

import { Bell, Heart, ShoppingCart } from "lucide-react";
import AppButton from "../../common/AppButton";
import UserMenu from "./UserMenu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../../common/UserAvatar";

type NavLinksProps = {
    isLoggedIn: boolean;
    cart: string[];
};

function NavLinks({ isLoggedIn, cart }: NavLinksProps) {
    const { pathname } = useLocation();

    return (
        <nav className="hidden lg:flex items-center gap-3">
            <AppButton as={Link} to="/" variant="ghost">
                Join us as an instructor
            </AppButton>

            {isLoggedIn && (
                <AppButton as={Link} to="/likes" variant="ghost" Icon={Heart} />
            )}

            <div className="relative hover:scale-105 transition mx-2">
                <AppButton
                    as={Link}
                    to="/cart"
                    variant="ghost"
                    Icon={ShoppingCart}
                />
                <div className="absolute bottom-5 left-3 bg-blue text-white text-xs rounded-full w-4 h-4 p-2 flex items-center justify-center">
                    {cart.length}
                </div>
            </div>

            {isLoggedIn ? (
                <>
                    <AppButton
                        as={Link}
                        to="/notifications"
                        variant="ghost"
                        Icon={Bell}
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer">
                            <UserAvatar
                                src="https://github.com/shadcn.png"
                                userName="Tom Cook"
                            />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="-translate-x-8">
                            <UserMenu />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </>
            ) : (
                <>
                    {pathname !== "/log-in" && (
                        <AppButton as={Link} to="/log-in" variant="outline">
                            Log In
                        </AppButton>
                    )}
                    {pathname !== "/sign-up" && (
                        <AppButton as={Link} to="/sign-up">
                            Sign Up
                        </AppButton>
                    )}
                </>
            )}
        </nav>
    );
}

export default NavLinks;
