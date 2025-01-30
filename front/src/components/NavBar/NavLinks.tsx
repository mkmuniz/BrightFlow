import { Key } from "react";
import NavLink from "./NavLink";
import { NavLinksProps } from "@/types/components.types";

export function NavLinks({ 
    navLinks, 
    isOpen, 
    handleLinkClick 
}: NavLinksProps) {
    return <>
        {navLinks.map((link: any, index: Key) => (
            <NavLink
                key={index}
                href={link.href}
                description={link.description}
                styles={`block py-2 px-3 text-gray-300 hover:text-white transition-colors ${isOpen ? 'mobile:text-xl' : 'mobile:text-[0px] mobile:hidden'}`}
                onClick={() => handleLinkClick()}
            />
        ))}
    </>;
};