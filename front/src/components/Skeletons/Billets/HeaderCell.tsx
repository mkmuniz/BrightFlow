export function HeaderCell({ width }: { width: string }) {
    return <>
        <th className="px-6 py-4 text-left">
            <div className={`h-4 ${width} bg-zinc-800/50 rounded-xl animate-pulse`}></div>
        </th>
    </>;
};