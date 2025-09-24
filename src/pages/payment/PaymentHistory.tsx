import { handleGetPaymentHistory } from "@/api/payment/payment";
import { Loader } from "@/components/common/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IPaymentHistory } from "@/types";
import { useEffect, useState } from "react";

export default function PaymentHistory() {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await handleGetPaymentHistory();

        if (response?.data?.data) {
          if (Array.isArray(response.data.data)) {
            // ✅ normal case
            setHistory(response.data.data);
          } else if (
            response.data?.data?.original?.data === "No payment history found"
          ) {
            // ✅ empty case
            setError("No payment history found");
          }
        }
      } catch (error) {
        console.error("Error fetching payment history:", error);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size="xxxl" />
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary-600 text-xs md:text-xl font-bold">
                Date
              </TableHead>
              <TableHead className="text-primary-600 text-xs md:text-xl font-bold">
                Course
              </TableHead>
              <TableHead className="text-primary-600 text-xs md:text-xl font-bold">
                Amount
              </TableHead>
              <TableHead className="text-primary-600 text-xs md:text-xl font-bold">
                Method
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item: IPaymentHistory, i: number) => (
              <TableRow key={i}>
                <TableCell className="text-xs md:text-lg font-semibold">
                  {item.date}
                </TableCell>
                <TableCell className="text-primary-main text-xs md:text-lg font-semibold">
                  {item.course}
                </TableCell>
                <TableCell className="text-xs md:text-lg font-semibold">
                  {item.amount} {item.currency}
                </TableCell>
                <TableCell className="text-xs md:text-lg font-semibold">
                  {item.method}
                </TableCell>
              </TableRow>
            ))}
            {error === "No payment history found" && (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No payment history found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
