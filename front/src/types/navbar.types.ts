import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export interface LogoProps {
    handleLinkClick: VoidFunction;
};

export interface NavBarProps {
    navLinks: Array<{
        href: string;
        description: string;
    }>;
};

export interface NavButtonsProps {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
};

export interface MobileMenuButtonProps {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
};

export interface MobileAuthButtonsProps {
    isOpen: boolean;
    handleLinkClick: VoidFunction;
};

export interface NavLinksProps {
    navLinks: any[];
    isOpen: boolean;
    handleLinkClick: VoidFunction;
};

export interface NavLinkProps {
    href: Url;
    description?: any;
    styles: string;
    children?: ReactNode;
    onClick?: VoidFunction;
};

export interface NavMenuProps {
    isOpen: boolean;
    navLinks: any[];
    handleLinkClick: VoidFunction;
}; 