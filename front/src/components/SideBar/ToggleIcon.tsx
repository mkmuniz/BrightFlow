import Image from "next/image";
import CloseIcon from '@/../public/assets/icons/close.svg';
import HamburgerIcon from '@/../public/assets/icons/hamburger.svg';
import { ToggleIconProps } from "@/types/components.types";

export function ToggleIcon({ isOpen }: ToggleIconProps) {
    return <>
        <div className={`transition-transform duration-300 ease-in-out transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            <Image src={isOpen ? CloseIcon : HamburgerIcon} className="w-6 h-6" alt="Toggle Icon" />
        </div>
    </>
}