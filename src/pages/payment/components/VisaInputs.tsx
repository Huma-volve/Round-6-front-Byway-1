import { Input } from "@/components/ui/input";
import MasterCard from "../../../assets/images/Visa.png";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function VisaInputs({ onSubmit }: { onSubmit: () => void }) {
  return (
    <>
      <div className="flex flex-col items-end w-full bg-gray-100 p-4 rounded-md">
        <div className="">
          <img src={MasterCard} alt="MasterCard" />
        </div>

        <form className="w-full flex flex-col gap-4 items-end">
          <div className="w-full">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              type="text"
              placeholder="Card Number"
              className="py-6 rounded-sm bg-white"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
            <div className="w-full md:w-1/2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                type="text"
                placeholder="Expiry Date"
                className="py-6 rounded-sm bg-white"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Label htmlFor="cvv">CVC/CVV</Label>
              <Input
                type="text"
                placeholder="CVC/CVV"
                className="py-6 rounded-sm bg-white"
              />
            </div>
          </div>
          <Button
            onClick={onSubmit}
            type="submit"
            className="mt-4 px-8 font-semibold text-lg"
          >
            Pay Now
          </Button>
        </form>
      </div>
    </>
  );
}
