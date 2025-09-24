import { useLocation } from "react-router-dom";

import AppButton from "@/components/common/AppButton";
import Logo from "../../common/Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
    //! CHANGE LATER
    const isLoggedIn = true;
    const cart = ["", ""];
    //! CHANGE LATER

    const { pathname } = useLocation();

    return (
        <header className="container-xl flex items-center gap-2 sm:gap-4 mx-auto p-4">
            <Logo />
            <SearchBar />

            {/* Will appear only in small and mediuem devices */}
            <NavbarMobile isLoggedIn={isLoggedIn} />

            {pathname !== "/sign-up" && pathname !== "/log-in" && (
                <div className="hidden lg:flex items-center gap-2">
                    <AppButton as="button" variant="outline">
                        English
                    </AppButton>
                    <AppButton as="button" variant="outline">
                        Arabic
                    </AppButton>
                </div>
            )}

            <NavLinks isLoggedIn={isLoggedIn} cart={cart} />
        </header>
    );
}
