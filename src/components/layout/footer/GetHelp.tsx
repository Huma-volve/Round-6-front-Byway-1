import type { ILink } from "@/types";
import FooterList from "./FooterList";
import { Link } from "react-router-dom";

const getHelp: ILink[] = [
    {
        id: "contact us",
        label: "Contact Us",
        path: "/contact-us",
    },
    {
        id: "latest articles",
        label: "Latest Articles",
        path: "/latest-articles",
    },
    {
        id: "faq",
        label: "FAQ",
        path: "/FAQ",
    },
];

function GetHelp() {
    return (
        <FooterList title="Get Help">
            {getHelp.map((link: ILink) => (
                <li key={link.id}>
                    <Link to={link.path}>{link.label}</Link>
                </li>
            ))}
        </FooterList>
    );
}

export default GetHelp;
