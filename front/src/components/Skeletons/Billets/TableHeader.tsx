import { HeaderCell } from "./HeaderCell";

export function TableHeader() {
    return <>
        <thead>
            <tr className="border-b border-zinc-800">
                <HeaderCell width="w-28" />
                <HeaderCell width="w-20" />
                <HeaderCell width="w-24" />
            </tr>
        </thead>
    </>;
};