type StateCardProps = {
    title: string;
    label: string;
    addBorder?: boolean;
};

function StateCard({ title, label, addBorder = true }: StateCardProps) {
    return (
        <div
            className={`text-gray-900 text-center ${
                addBorder ? "border-r-4 border-gray-border" : ""
            }`}
        >
            <p className="font-semibold text-2xl">{title}</p>
            <p className="text-sm mt-2">{label}</p>
        </div>
    );
}

export default StateCard;
