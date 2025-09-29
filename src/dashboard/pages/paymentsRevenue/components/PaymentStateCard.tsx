type PaymentStateCardProps = {
    value: string;
    title: string;
};

function PaymentStateCard({ value, title }: PaymentStateCardProps) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-48 bg-white border-1 border-gray-border rounded-md p-4 text-center">
                <p className="font-semibold text-lg sm:text-xl md:text-2xl mb-4">
                    {value}
                </p>
                <p className="font-medium capitalize">{title}</p>
            </div>
        </div>
    );
}

export default PaymentStateCard;
