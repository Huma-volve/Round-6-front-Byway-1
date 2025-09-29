import {
    Children,
    cloneElement,
    isValidElement,
    type ReactElement,
} from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import TableHeadItem from "@/dashboard/components/TableHeadItem";
import NoData from "@/components/common/NoData";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye } from "lucide-react";
import { getWordColor } from "@/lib/utils";

type DataTableProps<T extends { id: number }> = {
    data: T[];
    children?:
        | ReactElement<{ rowId: number }>
        | ReactElement<{ rowId: number }>[];
};

function DataTable<T extends { id: number }>({
    data,
    children,
}: DataTableProps<T>) {
    if (!data.length) return <NoData />;

    const tableHeaderItems = Object.keys(data[0]) as (keyof T)[];

    return (
        <Table className="text-center font-medium">
            <TableHeader className="[&_tr]:border-b-0">
                <TableRow>
                    {tableHeaderItems
                        .filter((head) => head !== "id")
                        .map((head) => (
                            <TableHeadItem key={String(head)}>
                                {String(head)}
                            </TableHeadItem>
                        ))}
                    {children && <TableHeadItem>Actions</TableHeadItem>}
                </TableRow>
            </TableHeader>

            <TableBody>
                {data.map((row: T) => (
                    <TableRow key={row.id} className="border-0">
                        {Object.entries(row)
                            .filter((row) => row[0] !== "id")
                            .map((cell, i) => (
                                <TableCell
                                    key={`${i}-${cell[1]}`}
                                    className={`${getWordColor(
                                        String(cell[1])
                                    )}`}
                                >
                                    {String(cell[1]).includes("@") ? (
                                        <a
                                            href={`mailto:${cell[1]}`}
                                            className="text-primary-500"
                                        >
                                            {cell[1]}
                                        </a>
                                    ) : (
                                        cell[1]
                                    )}
                                </TableCell>
                            ))}
                        {children && (
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1 bg-[rgba(88,125,189,0.44)] rounded-sm py-.5 px-2 cursor-pointer mx-auto">
                                        View <Eye size={16} />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="flex flex-col gap-2 font-semibold">
                                        {Children.map(children, (child) =>
                                            isValidElement(child)
                                                ? cloneElement(child, {
                                                      rowId: row.id,
                                                  })
                                                : child
                                        )}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default DataTable;
