import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const methods = [
  {
    id: 1,
    name: "Fawry",
    image: "🏧",
  },
  {
    id: 2,
    name: "E-Wallet",
    image: "💸",
  },
  {
    id: 3,
    name: "Credit/Debit Card",
    image: "💳",
  },
];
export default function PatmentMethods() {
  return (
    <>
      <div className="md:p-10 p-5">
        <h1 className="text-lg md:text-3xl font-semibold">
          Choose your payment method:
        </h1>
        <p className="text-sm text-gray-400">
          Select your preferred way to pay for your courses.
        </p>
        <div className="py-10">
          {methods.map((method) => (
            <div key={method.id} className="flex items-center gap-4 my-6">
              <div className="">
                <Input type="checkbox" className="w-8 h-8" />
              </div>
              <p className="text-2xl">{method.image}</p>
              <p className="text-xl">{method.name}</p>
            </div>
          ))}
        </div>
        <Button className="p-6 font-semibold text-md">
          Save Payment Method
        </Button>
      </div>
    </>
  );
}
