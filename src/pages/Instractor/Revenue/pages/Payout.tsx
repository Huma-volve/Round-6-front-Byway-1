import { useState } from "react";
import PaypalFields from "../components/PaypalFields";
import BankTransferFields from "../components/BankTransferFields";
import ContinueButton from "../components/ContinueButton";
import arrow from "../../../../assets/images/downArrow.png";
function Payout() {
  type Paymentmethod = {
    label: string;
    value: string;
  };
  const methods: Paymentmethod[] = [
    {
      label: "PayPal",
      value: "paypal",
    },
    {
      label: "Bank Transfer",
      value: "banktransfer",
    },
    {
      label: "Fawry",
      value: "fawry",
    },
  ];

  const [SelectedMethod, setSelectedMethod] = useState<string>("");
  console.log("selected :" + SelectedMethod);
  return (
    <div className="flex font-sans justify-center">
      <div className="md:w-[75%] flex flex-col gap-4 py-12 ">
        <h1 className="text-3xl font-semibold text-gray-900 ">
          Enter Payout Details
        </h1>
        <div className="flex flex-col gap-1  md:w-[20%]">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-900 font-medium text-xl">
              Payment Method
            </h1>
            <div className="relative">
              <h1 className="border-[1px] rounded-[8px] text-[14px] text-gray-400 p-3 border-gray-border ">
                please select
              </h1>
              <img className="absolute bottom-5 right-3" src={arrow}></img>
            </div>

            <div className="border-[1px] rounded-[8px] flex flex-col  text-gray-900 p-4 border-gray-border ">
              {methods.map((m) => (
                <label className="flex justify-between" htmlFor={m.label}>
                  {m.label}
                  <input
                    className="text-black"
                    type="radio"
                    id={m.label}
                    name="payment method"
                    checked={m.value === SelectedMethod}
                    value={m.value}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                  />
                </label>
              ))}
            </div>
          </div>
          {SelectedMethod === "paypal" ? (
            <PaypalFields />
          ) : SelectedMethod === "banktransfer" ? (
            <BankTransferFields />
          ) : SelectedMethod === "fawry" ? (
            <ContinueButton />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Payout;
