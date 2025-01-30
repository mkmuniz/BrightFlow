import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";
import { MobileMenuButtonProps } from "@/types/components.types";

export default function MobileMenuButton({ isOpen, setOpen }: MobileMenuButtonProps) {
    return (
        <button 
            onClick={() => setOpen(!isOpen)} 
            className="inline-flex items-center md:hidden"
        >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
    );
} 