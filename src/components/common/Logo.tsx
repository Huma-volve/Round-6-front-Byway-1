import logoImg from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <Link to="/" className="flex items-center gap-1">
            <img src={logoImg} alt="byway's logo" />
            <p className="text-inherit font-semibold">Byway</p>
        </Link>
    );
}

export default Logo;
