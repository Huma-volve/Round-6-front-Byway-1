import { useState } from "react";
import ContinueButton from "./ContinueButton";
import arrow from "../../../../assets/images/downArrow.png";

function BankTransferFields() {
  type banktype = {
    label: string;
    value: string;
  };
  const banknames: banktype[] = [
    {
      label: "CIP",
      value: "cip",
    },
    {
      label: "Al-Ahly",
      value: "alahly",
    },
    {
      label: "Bank of Egypt",
      value: "bankofegypt",
    },
  ];
  const [SelectedBank, setSelectedBank] = useState<string>("");
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
        <h1 className="text-gray-900 font-medium text-xl">Account Number</h1>
        <input
          placeholder="123456789012345"
          className="border-[1px] rounded-[8px] text-[14px] placeholder:text-gray-400 p-2 border-gray-border outline-none "
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-900 font-medium text-xl">Bank Name</h1>
       <div className="relative">
              <h1 className="border-[1px] rounded-[8px] text-[14px] text-gray-400 p-3 border-gray-border ">
                please select
              </h1>
              <img className="absolute bottom-5 right-3" src={arrow}></img>
            </div>
        <div className="border-[1px] rounded-[8px] flex flex-col  text-gray-900 p-4 border-gray-border ">
          {banknames.map((m) => (
            <label className="flex justify-between" htmlFor={m.label}>
              {m.label}
              <input
                className="text-black"
                type="radio"
                id={m.label}
                name="bank type"
                checked={m.value === SelectedBank}
                value={m.value}
                onChange={(e) => setSelectedBank(e.target.value)}
              />
            </label>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="save"
            className="appearance-none flex items-center justify-center w-4 h-4 rounded-full border border-black checked:before:content-['✔']  checked:before:text-white 
      checked:before:text-xs 
      checked:before:flex 
      checked:before:items-center 
      checked:before:justify-center"
          />
          <label htmlFor="save" className="text-gray-400 text-sm">
            Save these details
          </label>
        </div>
        <ContinueButton/>
      </div>
    </div>
  );
}

export default BankTransferFields;
