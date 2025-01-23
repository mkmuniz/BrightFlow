import { LogoSection } from "./LogoSection";
import { ContentSection } from "./ContentSection";
import { HeaderContentProps } from "@/types/components.types";

export function HeaderContent({
    refHeaderTitle,
    refHeaderSubtext,
    isVisibleHeaderTitle,
    isVisibleHeaderSubtext,
    router
}: HeaderContentProps) {
    return <>
        <div className="w-full text-white text-center font-outfit flex justify-center items-center h-screen flex-col select-none gap-8">
            <LogoSection
                refHeaderTitle={refHeaderTitle}
                isVisibleHeaderTitle={isVisibleHeaderTitle}
            />
            <ContentSection
                refHeaderSubtext={refHeaderSubtext}
                isVisibleHeaderSubtext={isVisibleHeaderSubtext}
                router={router}
            />
        </div>
    </>;
}