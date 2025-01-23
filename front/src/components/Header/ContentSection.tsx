import { BrandTitle } from "./BrandTitle";
import { CallToAction } from "./CallToAction";
import { DescriptionHeader } from "./Description";
import { ContentSectionProps } from "@/types/components.types";

export function ContentSection({
    refHeaderSubtext,
    isVisibleHeaderSubtext,
    router
}: ContentSectionProps) {
    return <>
        <div className="space-y-6">
            <BrandTitle
                refHeaderSubtext={refHeaderSubtext}
                isVisibleHeaderSubtext={isVisibleHeaderSubtext}
            />
            <DescriptionHeader
                refHeaderSubtext={refHeaderSubtext}
                isVisibleHeaderSubtext={isVisibleHeaderSubtext}
            />
            <CallToAction
                isVisibleHeaderSubtext={isVisibleHeaderSubtext}
                router={router}
            />
        </div>
    </>;
}