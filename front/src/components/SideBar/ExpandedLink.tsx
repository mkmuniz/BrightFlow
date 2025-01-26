import Image from "next/image";

export function ExpandedLink({ path, description, icon, alt }: any) {
    return <>
        <div className="w-full px-4">
            <a
                href={path}
                className="h-[2.375rem] flex items-center gap-x-6 py-2 px-3 text-sm font-semibold text-white hover:text-[#8B5CF6] transition-colors rounded-lg hover:bg-zinc-800/50"
            >
                <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                    <Image src={icon} alt={alt} className="w-full h-full" />
                </div>
                <span className="truncate ml-2 flex items-center">{description}</span>
            </a>
        </div>
    </>
}