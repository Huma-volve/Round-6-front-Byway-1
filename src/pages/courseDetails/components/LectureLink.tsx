import { Play } from "lucide-react";
import { Link } from "react-router-dom";

type LectureLinkProps = {
    label: string;
};

function LectureLink({ label }: LectureLinkProps) {
    return (
        <Link
            to="/"
            className="group max-w-md flex items-center gap-x-6 border-1 border-gray-border rounded-sm px-4 py-2"
        >
            <Play className="border-1 border-black rounded-sm w-10 h-10 p-2" />
            <p className="font-semibold sm:text-lg group-hover:scale-105 transition-all">
                {label}
            </p>
        </Link>
    );
}

export default LectureLink;
