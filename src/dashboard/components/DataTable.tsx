import {
    Children,
    cloneElement,
    isValidElement,
    type ReactElement,
} from "react";
import { useState } from "react";

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
import EditActions from "../pages/courseManagement/EditActions";

type DataTableProps<T extends { id: number }> = {
    data: T[];
    children?:
        | ReactElement<{ rowId: number; onEdit?: () => void }>
        | ReactElement<{ rowId: number; onEdit?: () => void }>[];
};

function DataTable<T extends { id: number }>({
    data,
    children,
}: DataTableProps<T>) {
    const [tableData, setTableData] = useState<T[]>(data);
    const [editRow, setEditRow] = useState<Partial<T>>({});

    if (!tableData.length) return <NoData />;

    const tableHeaderItems = Object.keys(tableData[0]) as (keyof T)[];

    const handleEdit = (row: T) => setEditRow({ ...row });

    const handleChange = (key: keyof T, value: string) =>
        setEditRow((prev) => ({ ...prev, [key]: value }));

    const handleSave = (id: number) => {
        setTableData((prev) =>
            prev.map((row) => (row.id === id ? { ...row, ...editRow } : row))
        );
        setEditRow({});
    };

    const handleCancel = () => setEditRow({});

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
                {tableData.map((row: T) => (
                    <TableRow key={row.id} className="border-0">
                        {tableHeaderItems
                            .filter((cell) => cell !== "id")
                            .map((key) => (
                                <TableCell
                                    key={String(key)}
                                    className={`${getWordColor(
                                        String(row[key])
                                    )}`}
                                >
                                    {editRow.id === row.id ? (
                                        key === "id" ? (
                                            String(row[key])
                                        ) : (
                                            <input
                                                className="border px-2 py-1 rounded w-full"
                                                value={String(
                                                    editRow[key] ?? ""
                                                )}
                                                onChange={(e) =>
                                                    handleChange(
                                                        key,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        )
                                    ) : (
                                        String(row[key])
                                    )}
                                </TableCell>
                            ))}

                        {children && (
                            <TableCell>
                                {editRow.id === row.id ? (
                                    <EditActions
                                        rowId={row.id}
                                        onCancel={handleCancel}
                                        onSave={handleSave}
                                    />
                                ) : (
                                    <>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center gap-1 bg-[rgba(88,125,189,0.44)] rounded-sm py-.5 px-2 cursor-pointer mx-auto">
                                                Actions <Eye size={16} />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="flex flex-col gap-2 font-semibold p-3 text-sm">
                                                {Children.map(
                                                    children,
                                                    (child) =>
                                                        isValidElement(child)
                                                            ? cloneElement(
                                                                  child,
                                                                  {
                                                                      rowId: row.id,
                                                                      onEdit: () =>
                                                                          handleEdit(
                                                                              row
                                                                          ),
                                                                  }
                                                              )
                                                            : child
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </>
                                )}
                            </TableCell>
                        )}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default DataTable;
