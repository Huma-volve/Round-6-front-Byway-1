import FooterList from "./FooterList";
import type { IContacts, ISocial } from "@/types";
import facebookLogo from "@/assets/images/facebook.svg";
import githubLogo from "@/assets/images/github.svg";
import googleLogo from "@/assets/images/google.svg";
import xLogo from "@/assets/images/x.png";
import microsoftLogo from "@/assets/images/microsoft.svg";

const contacts: IContacts = {
    address: "123 Main Street, Anytown, CA 12345",
    tel: "+(123) 456-7890",
    mail: "bywayedu@webkul.in",
    socials: [
        {
            image: facebookLogo,
            title: "facebook's logo",
            link: "",
        },
        {
            image: githubLogo,
            title: "github's logo",
            link: "",
        },
        {
            image: googleLogo,
            title: "google's logo",
            link: "",
        },
        {
            image: xLogo,
            title: "x's logo",
            link: "",
        },
        {
            image: microsoftLogo,
            title: "microsoft's logo",
            link: "",
        },
    ],
};

function ContactUs() {
    return (
        <FooterList title="Contact Us">
            <li>Address: {contacts.address}</li>
            <li>
                Tel:{" "}
                <a
                    href={`tel:${contacts.tel}`}
                    className="hover:underline transition-all"
                >
                    {contacts.tel}
                </a>
            </li>
            <li>
                Mail:{" "}
                <a
                    href={`mailto:${contacts.mail}`}
                    className="hover:underline transition-all"
                >
                    {contacts.mail}
                </a>
            </li>
            <ul className="flex gap-4 mt-4">
                {contacts.socials.map((social: ISocial) => (
                    <li key={social.title}>
                        <a
                            href={social.link}
                            target="_blank"
                            className="block w-8 h-8 bg-white p-2 rounded-full hover:scale-110 transition-all"
                        >
                            <img
                                src={social.image}
                                alt={social.title}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </FooterList>
    );
}

export default ContactUs;
