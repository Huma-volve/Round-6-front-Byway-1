import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PaymentHistory() {
  return (
    <>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary-600 text-xl font-bold">
                Date
              </TableHead>
              <TableHead className="text-primary-600 text-xl font-bold">
                Course
              </TableHead>
              <TableHead className="text-primary-600 text-xl font-bold">
                Amount
              </TableHead>
              <TableHead className="text-primary-600 text-xl font-bold">
                Method
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-lg font-semibold">
                Apr 21, 2024
              </TableCell>
              <TableCell className="text-primary-main text-lg font-semibold">
                UI/UX Design
              </TableCell>
              <TableCell className="text-lg font-semibold">100EGP</TableCell>
              <TableCell className="text-lg font-semibold">
                Credit Card
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-lg font-semibold">
                Apr 21, 2024
              </TableCell>
              <TableCell className="text-primary-main text-lg font-semibold">
                Graphic Design
              </TableCell>
              <TableCell className="text-lg font-semibold">400EGP</TableCell>
              <TableCell className="text-lg font-semibold">
                Credit Card
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
