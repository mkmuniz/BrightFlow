import { MutableRefObject } from "react";
import { BrandTitleProps } from "@/types/components.types";

export function BrandTitle({
    refHeaderSubtext,
    isVisibleHeaderSubtext
}: BrandTitleProps) {
    return <>
        <span
            ref={refHeaderSubtext as MutableRefObject<HTMLSpanElement>}
            className={`text-5xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] bg-clip-text text-transparent transition-all duration-700 
        ${isVisibleHeaderSubtext ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >
            BrightFlow
        </span>
    </>;
}