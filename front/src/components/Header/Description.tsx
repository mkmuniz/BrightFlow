import { MutableRefObject } from "react";
import { DescriptionHeaderProps } from "@/types/components.types";

export function DescriptionHeader({ refHeaderSubtext,
    isVisibleHeaderSubtext }: DescriptionHeaderProps) {
    return <>
        <p
            ref={refHeaderSubtext as MutableRefObject<HTMLParagraphElement>}
            className={`text-xl text-gray-400 max-w-lg mx-auto leading-relaxed transition-all duration-700 
        ${isVisibleHeaderSubtext ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >
            Transform your bill management into a modern and efficient experience.
            Monitor your energy consumption intelligently.
        </p>
    </>
};