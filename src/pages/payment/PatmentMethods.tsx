import { handleGetPaymentMethods } from "@/api/payment/payment";
import { Loader } from "@/components/common/Loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { IPaymentMethod } from "@/types";
import { useEffect, useState } from "react";

export default function PatmentMethods() {
  const [methods, setMethods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        setLoading(true);
        const methods = await handleGetPaymentMethods();
        setMethods(methods);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching payment methods:", error);
      }
    };

    fetchMethods();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader size="xxxl" />
        </div>
      ) : (
        <div className="md:p-10 p-5">
          <h1 className="text-lg md:text-3xl font-semibold">
            Choose your payment method:
          </h1>
          <p className="text-sm text-gray-400">
            Select your preferred way to pay for your courses.
          </p>
          <div className="py-10">
            {methods.map((method: IPaymentMethod) => (
              <div key={method.id} className="flex items-center gap-4 my-6">
                <div className="">
                  <Input type="checkbox" className="w-8 h-8" />
                </div>
                <p className="text-2xl">{method.brand}</p>
              </div>
            ))}
          </div>
          <Button className="p-6 font-semibold text-md">
            Save Payment Method
          </Button>
        </div>
      )}
    </>
  );
}
