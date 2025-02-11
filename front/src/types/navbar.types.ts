import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export type LogoProps = {
    handleLinkClick: VoidFunction;
};

export type NavBarProps = {
    navLinks: Array<{
        href: string;
        description: string;
    }>;
};

export type NavButtonsProps = {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
};

export type MobileMenuButtonProps = {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
};

export type MobileAuthButtonsProps = {
    isOpen: boolean;
    handleLinkClick: VoidFunction;
};

export type NavLinksProps = {
    navLinks: any[];
    isOpen: boolean;
    handleLinkClick: VoidFunction;
};

export type NavLinkProps = {
    href: Url;
    description?: any;
    styles: string;
    children?: ReactNode;
    onClick?: VoidFunction;
};

export type NavMenuProps = {
    isOpen: boolean;
    navLinks: any[];
    handleLinkClick: VoidFunction;
}; 