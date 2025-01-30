import { TableCell } from "./TableCell";
import { ActionCell } from "./ActionCell";

export function TableRow() {
    return <>
        <tr className="border-b border-zinc-800 last:border-b-0">
            <TableCell width="w-32" />
            <TableCell width="w-24" />
            <ActionCell />
        </tr>
    </>;
}