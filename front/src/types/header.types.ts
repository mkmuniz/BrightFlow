export interface CallToActionProps {
    isVisibleHeaderSubtext: boolean;
    router: any;
};

export interface DescriptionHeaderProps {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderSubtext: boolean;
};

export interface BrandTitleProps {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderSubtext: boolean;
};

export interface ContentSectionProps {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderSubtext: boolean;
    router: any
};

export interface LogoSectionProps {
    refHeaderTitle: React.RefObject<HTMLDivElement>;
    isVisibleHeaderTitle: boolean;
};

export interface HeaderContentProps {
    refHeaderTitle: React.RefObject<HTMLDivElement>;
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>;
    isVisibleHeaderTitle: boolean;
    isVisibleHeaderSubtext: boolean;
    router: any;
}; 