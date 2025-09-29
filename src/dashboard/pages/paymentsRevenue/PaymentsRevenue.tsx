import OutletLayout from "@/dashboard/components/OutletLayout";
import DataTable from "../../../components/common/DataTable";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

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
                <Link to={`payment-details/${rowId}`}>View Details</Link>
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
            <DataTable<IPaymentsRow> data={payments}>
                <CustomAction />
            </DataTable>
        </OutletLayout>
    );
}

export default PaymentsRevenue;
