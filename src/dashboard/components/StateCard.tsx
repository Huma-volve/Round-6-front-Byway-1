type StateCardProps = {
  value: string;
  title: string;
  width?: string;
};

function StateCard({ value, title, width }: StateCardProps) {
  return (
    <div
      className={`bg-white border-1 border-gray-border rounded-md p-4 text-center ${width}`}
    >
      <p className="font-semibold text-lg sm:text-xl md:text-2xl mb-4">
        {value}
      </p>
      <p className="font-medium">{title}</p>
    </div>
  );
}

export default StateCard;
