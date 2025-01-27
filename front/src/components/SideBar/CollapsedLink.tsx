import Image from "next/image";
import { CollapsedLinkProps } from "@/types/components.types";  

export function CollapsedLink({ path, icon, alt }: CollapsedLinkProps) {
    return <>
        <div className="hs-tooltip inline-block">
            <a
                href={path}
                className="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center rounded-lg border border-transparent text-white transition-all duration-300 hover:bg-zinc-800/50"
            >
                <div className="w-6 h-6">
                    <Image src={icon} alt={alt} className="w-full h-full" />
                </div>
            </a>
        </div>
    </>
}