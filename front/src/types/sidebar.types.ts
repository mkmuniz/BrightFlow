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