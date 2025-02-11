export type CallToActionProps = {
    isVisibleHeaderSubtext: boolean;
    router: any;
};

export type DescriptionHeaderProps = {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderSubtext: boolean;
};

export type BrandTitleProps = {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderSubtext: boolean;
};

export type ContentSectionProps = {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderSubtext: boolean;
    router: any
};

export type LogoSectionProps = {
    refHeaderTitle: React.RefObject<HTMLDivElement>;
    isVisibleHeaderTitle: boolean;
};

export type HeaderContentProps = {
    refHeaderTitle: React.RefObject<HTMLDivElement>;
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderTitle: boolean;
    isVisibleHeaderSubtext: boolean;
    router: any;
}; 