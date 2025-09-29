type StateCardProps = {
    value: string;
    title: string;
};

function StateCard({ value, title }: StateCardProps) {
    return (
        <div className="bg-white w-48 border-1 border-gray-border rounded-md p-4 text-center">
            <p className="font-semibold text-lg sm:text-xl md:text-2xl mb-4">
                {value}
            </p>
            <p className="font-medium">{title}</p>
        </div>
    );
}

export default StateCard;
