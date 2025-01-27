import { ReactNode } from "react";

export type ContainerProps = {
    children: React.ReactNode,
    styles?: string,
};

export type CallToActionProps = {
    isVisibleHeaderSubtext: boolean,
    router: any
};

export type DescriptionHeaderProps = {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>,
    isVisibleHeaderSubtext: boolean
};

export type BrandTitleProps = {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>,
    isVisibleHeaderSubtext: boolean
};

export type ContentSectionProps = {
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>,
    isVisibleHeaderSubtext: boolean,
    router: any
};

export type LogoSectionProps = {
    refHeaderTitle: React.RefObject<HTMLDivElement>,
    isVisibleHeaderTitle: boolean
};

export type HeaderContentProps = {
    refHeaderTitle: React.RefObject<HTMLDivElement>,
    refHeaderSubtext: React.RefObject<HTMLSpanElement | HTMLParagraphElement>,
    isVisibleHeaderTitle: boolean,
    isVisibleHeaderSubtext: boolean,
    router: any
};

export type PrivateLayoutProps = {
    children: ReactNode;
};

export type MenuItem = {
    href: string;
    description: string;
};

export type Billet = {
    id: string;
    month: string;
    consumes: any[];
};

export type Consume = {
    id: string;
    type: string;
    value: number;
};

export type BackDropProps = {
    isOpen: boolean;
};

export type CollapsedLinkProps = {
    path: string;
    icon: any;
    alt: string;
};

export type ExpandedLinkProps = {
    path: string;
    icon: any;
    description: string;
    alt: string;
};

export type ExpandedSideBarProps = {
    isOpen: boolean;
};

export type ToggleButtonProps = {
    isOpen: boolean; 
    setIsOpen: (value: boolean) => void;
};

export type ToggleIconProps = {
    isOpen: boolean;
};

export type TopBarProps = {
    isOpen: boolean; 
    setIsOpen: (value: boolean) => void;
};