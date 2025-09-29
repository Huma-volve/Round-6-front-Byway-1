import OutletLayout from "@/dashboard/components/OutletLayout";
import DataTable from "../../components/DataTable";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import StateCard from "@/dashboard/components/StateCard";

interface IPaymentsRow {
    id: number;
    date: string;
    userName: string;
    type: string;
    amount: string;
    status: string;
    method: string;
}

const payments: IPaymentsRow[] = [
    {
        id: 1,
        date: "28 Jul 2025",
        userName: "Nour Ali",
        type: "Withdrawal",
        amount: "$150.00",
        status: "Pending",
        method: "Bank",
    },
    {
        id: 2,
        date: "29 Jul 2025",
        userName: "Salma Ahmed",
        type: "Payment",
        amount: "$95.00",
        status: "Completed",
        method: "Visa",
    },
];

function CustomAction({ rowId }: { rowId?: number }) {
    console.log(rowId);
    return (
        <>
            <DropdownMenuItem>
                <Link to={`/payment-details/${rowId}`}>View Details</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-primary-main focus:text-primary-main">
                Approve Withdrawal
            </DropdownMenuItem>
            <DropdownMenuItem className="text-error-800 focus:text-error-800">
                Reject Request
            </DropdownMenuItem>
        </>
    );
}

function PaymentsRevenue() {
    return (
        <OutletLayout
            title="Payments & Revenue"
            subTitle="Track all platform earnings, instructor payouts, and student payments."
        >
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <StateCard value="$24,340" title="Platform Earnings" />
                <StateCard value="$18,560" title="Instructor Earnings" />
                <StateCard value="6" title="Total Withdrawal" />
                <StateCard value="$5,780" title="Student Payments" />
            </div>
            <DataTable<IPaymentsRow> data={payments}>
                <CustomAction />
            </DataTable>
        </OutletLayout>
    );
}

export default PaymentsRevenue;
