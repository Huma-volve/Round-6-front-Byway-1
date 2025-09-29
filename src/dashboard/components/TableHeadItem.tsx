import { TableHead } from "@/components/ui/table";
import type { ReactNode } from "react";

type tableHeadItemProps = { children: ReactNode };

function TableHeadItem({ children }: tableHeadItemProps) {
    return (
        <TableHead>
            <p className="w-fit border-1 border-gray-border rounded-sm py-2 px-4 capitalize my-2 mx-auto">
                {children}
            </p>
        </TableHead>
    );
}

export default TableHeadItem;
