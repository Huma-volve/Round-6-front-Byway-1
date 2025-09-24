import GetHelp from "./GetHelp";
import Programs from "./Programs";
import ContactUs from "./ContactUs";
import Description from "./Description";

function Footer() {
    return (
        <footer className="flex flex-wrap lg:justify-between gap-8 bg-gray-800 text-gray-300 p-6 sm:p-8 md:p-10 lg:p-12">
            <Description />
            <GetHelp />
            <Programs />
            <ContactUs />
        </footer>
    );
}

export default Footer;
