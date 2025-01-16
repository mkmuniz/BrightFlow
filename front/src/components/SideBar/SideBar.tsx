'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

import Logo from "@/../public/logo.png";
import HomeIcon from '@/../public/assets/icons/home.svg';
import BilletsTable from '@/../public/assets/icons/table.svg';
import ProfileIcon from '@/../public/assets/icons/profile.svg';
import HamburgerIcon from '@/../public/assets/icons/hamburger.svg';
import CloseIcon from '@/../public/assets/icons/close.svg';
import LogoutButton from '@/app/(auth-routes)/logout/page';

const sideBarLinks = [
    {
        path: '/user/home',
        description: 'Home',
        icon: HomeIcon,
        alt: 'BrightFlow Home Icon',
    },
    {
        path: '/billets/table',
        description: 'Billets',
        icon: BilletsTable,
        alt: 'BrightFlow Billets Table Icon',
    },
    {
        path: '/user/profile',
        description: 'Profile',
        icon: ProfileIcon,
        alt: 'BrightFlow Profile Icon',
    },
];

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            <Backdrop isOpen={isOpen} />
            <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <MainSideBar isOpen={isOpen} />
            <MiniSideBar />
        </>
    );
};

const Backdrop = ({ isOpen }: { isOpen: boolean }) => (
    <div 
        className={`fixed inset-0 z-[50] ${isOpen ? 'block' : 'hidden'}`} 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    />
);

const TopBar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) => (
    <div className="flex bg-black min-w-screen fixed top-0 w-full z-[99]">
        <div className="flex justify-between p-2 w-full h-full">
            <BrandLogo />
            <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    </div>
);

const BrandLogo = () => (
    <div className="ml-3 z-[70]">
        <a className="flex-none" href="#">
            <Image src={Logo} className="w-10 h-10" alt="BrightFlow Logo" />
        </a>
    </div>
);

const ToggleButton = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) => (
    <div>
        <button
            type="button"
            className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-black text-white shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="sidebar-mini"
            aria-label="Toggle navigation"
        >
            <span className="sr-only">Toggle Navigation</span>
            <ToggleIcon isOpen={isOpen} />
        </button>
    </div>
);

const ToggleIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className={`transition-transform duration-300 ease-in-out transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
        <Image src={isOpen ? CloseIcon : HamburgerIcon} className="w-6 h-6" alt="Toggle Icon" />
    </div>
);

const MainSideBar = ({ isOpen }: { isOpen: boolean }) => (
    <div className={`flex flex-col justify-between fixed top-0 left-0 bottom-0 min-h-screen mt-12 h-full z-[60] bg-black transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'}`}>
        <SideBarLinks />
    </div>
);

const MiniSideBar = () => (
    <div
        id="sidebar-mini"
        className="flex flex-col justify-between hs-overlay transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] mt-12 bg-black w-20"
    >
        <SideBarLinks />
        <LogoutButtonContainer />
    </div>
);

const SideBarLinks = () => (
    <div className="flex flex-col justify-center items-center gap-y-2 py-4">
        <div className="flex flex-col justify-center items-center gap-y-2">
            {sideBarLinks.map((link) => (
                <SideBarLink key={link.path} {...link} />
            ))}
        </div>
    </div>
);

const SideBarLink = ({ path, description, icon, alt }: any) => (
    <div className="hs-tooltip inline-block">
        <a
            href={path}
            className="hs-tooltip-toggle w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-white transition-transform duration-300 transform hover:scale-110"
        >
            {icon && <Image src={icon} alt={alt} className="w-6 h-6" />}
            {description}
        </a>
    </div>
);

const LogoutButtonContainer = () => (
    <div className="flex flex-col justify-center items-center mb-6">
        <LogoutButton />
    </div>
);

export default SideBar;
