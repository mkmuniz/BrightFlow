"use client"

import { useEffect, useState } from "react";
import { NavBarProps } from "@/types/components.types";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import { NavMenu } from "./NavMenu";

export default function NavBar({ navLinks }: NavBarProps) {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    const handleLinkClick = () => {
        setOpen(false);
    };
    
    return (
        <nav className={`fixed w-full z-30 top-0 start-0 transition-all duration-300 ${scrolled ? 'bg-black backdrop-blur-lg' : 'bg-transparent'}`}>
            <div className={`${isOpen ? 'w-full' : 'max-w-screen-xl'} flex flex-wrap items-center justify-between mx-auto p-4`}>
                <Logo handleLinkClick={handleLinkClick} />
                <NavButtons 
                    isOpen={isOpen}
                    setOpen={setOpen}
                />
                <NavMenu 
                    isOpen={isOpen}
                    navLinks={navLinks}
                    handleLinkClick={handleLinkClick}
                />
            </div>
        </nav>
    );
}