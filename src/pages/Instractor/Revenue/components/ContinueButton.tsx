import { useNavigate } from "react-router-dom";

function ContinueButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/instructor/payout/withdraw")}
        className="bg-[#5BAE61] w-full rounded-[8px] font-sans font-semibold text-[18px] cursor-pointer hover:bg-[#035c09] text-white py-1.5 px-6 "
      >
        Continue
      </button>
    </div>
  );
}

export default ContinueButton;
