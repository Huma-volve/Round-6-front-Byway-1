import FooterList from "./FooterList";

const programs: string[] = [
    "Art & Design",
    "Business",
    "IT & Software",
    "Languages",
    "Programming",
];

function Programs() {
    return (
        <FooterList title="Programs">
            {programs.map((program: string) => (
                <li key={program}>{program}</li>
            ))}
        </FooterList>
    );
}

export default Programs;
