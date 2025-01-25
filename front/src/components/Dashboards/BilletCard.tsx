export function BilletCard(props: any) {
    return <>
        <div className="flex flex-col items-center justify-center h-[180px] w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(139,92,246,0.1)] border border-zinc-800">
            <span className="text-4xl font-bold text-[#00A3FF] mb-4">
                {props.billets.length || 0}
            </span>
            <div className="text-lg text-gray-300">
                Loaded Bills
            </div>
        </div>
    </>
}