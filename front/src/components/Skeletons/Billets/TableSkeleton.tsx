import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export function TableSkeleton() {
    return <>
        <div className="bg-zinc-900/80 rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.1)] border border-zinc-800 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        </div>
    </>;
};