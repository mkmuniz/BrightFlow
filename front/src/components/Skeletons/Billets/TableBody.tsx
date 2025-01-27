import { TableRow } from "./TableRow";

export function TableBody() {
    return <>
        <tbody>
            {[...Array(5)].map((_, index) => (
                <TableRow key={index} />
            ))}
        </tbody>
    </>;
}