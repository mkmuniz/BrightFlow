export interface CollapsedLinkProps {
    path: string;
    icon: any;
    alt: string;
};

export interface ExpandedLinkProps {
    path: string;
    icon: any;
    description: string;
    alt: string;
};

export interface ExpandedSideBarProps {
    isOpen: boolean;
};

export interface ToggleButtonProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
};

export interface ToggleIconProps {
    isOpen: boolean;
};

export interface TopBarProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}; 