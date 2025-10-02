import ContinueButton from "./ContinueButton";

function PaypalFields() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h1 className="text-gray-900 font-medium text-xl">Account Name</h1>
        <input
          placeholder="Omnya Ali"
          className="border-[1px] rounded-[8px] text-[14px] placeholder:text-gray-400 p-2 border-gray-border outline-none "
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-gray-900 font-medium text-xl">Account Email</h1>
        <input
          placeholder="omnya@gmail.com"
          className="border-[1px] rounded-[8px] text-[14px] placeholder:text-gray-400 p-2 border-gray-border outline-none "
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="save"
            className="appearance-none w-4 h-4 rounded-full border border-black checked:before:content-['✔']  checked:before:text-white 
      checked:before:text-xs 
      checked:before:flex 
      checked:before:items-center 
      checked:before:justify-center"
          />
          <label htmlFor="save" className="text-gray-400 text-sm">
            Save these details
          </label>
        </div>
      </div>
      <ContinueButton />
    </div>
  );
}

export default PaypalFields;
