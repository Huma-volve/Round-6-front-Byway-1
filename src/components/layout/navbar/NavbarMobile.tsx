import { Link, useLocation } from "react-router-dom";

import AppButton from "@/components/common/AppButton";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Heart, Menu, ShoppingCart } from "lucide-react";
import UserAvatar from "../../common/UserAvatar";
import UserMenu from "./UserMenu";

type NavbarMobileProps = {
    isLoggedIn: boolean;
};

function NavbarMobile({ isLoggedIn }: NavbarMobileProps) {
    const { pathname } = useLocation();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer block lg:hidden">
                <Menu
                    size={20}
                    className="stroke-gray-700 hover:scale-105 transition cursor-pointer"
                />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-80 max-w-screen p-4 block lg:hidden">
                <DropdownMenuItem>
                    <Link to="/">Join us as an instructor</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-2" />

                {isLoggedIn && (
                    <DropdownMenuItem>
                        <Heart />
                        <Link to="/favourites">Whishlist</Link>
                    </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                    <ShoppingCart />
                    <Link to="/cart">Cart</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-2" />

                <DropdownMenuLabel>Languages</DropdownMenuLabel>
                <DropdownMenuItem className="cursor-pointer">
                    <button>Arabic</button>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <button>English</button>
                </DropdownMenuItem>

                <DropdownMenuSeparator className="my-2" />

                {isLoggedIn ? (
                    <>
                        <DropdownMenuLabel>My account</DropdownMenuLabel>
                        <div className="flex items-center gap-2 my-2">
                            <UserAvatar
                                className="w-12 h-12"
                                src="https://github.com/shadcn.png"
                                userName="Tom Cook"
                            />
                            <div className="flex-1">
                                <p className="text-gray-900 font-medium capitalize">
                                    Tom Cook
                                </p>
                                <p className="text-gray-600 text-sm">
                                    tom@example.com
                                </p>
                            </div>
                            <AppButton
                                as={Link}
                                to="/notifications"
                                variant="ghost"
                                Icon={Bell}
                            />
                        </div>
                        <UserMenu />
                    </>
                ) : (
                    <>
                        {pathname !== "/sign-up" && (
                            <DropdownMenuItem>
                                <Link to="/sign-up">Sign Up</Link>
                            </DropdownMenuItem>
                        )}
                        {pathname !== "/log-in" && (
                            <DropdownMenuItem>
                                <Link to="/log-in">Log In</Link>
                            </DropdownMenuItem>
                        )}
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default NavbarMobile;
