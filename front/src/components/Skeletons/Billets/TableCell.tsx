import { TableCellProps } from "@/types/table.types";

export function TableCell({ width }: TableCellProps) {
    return <>
        <td className="px-6 py-4">
            <div className="flex items-center space-x-2">
                <div className={`h-4 ${width} bg-zinc-800/50 rounded-xl animate-pulse`}></div>
            </div>
        </td>
    </>;
}