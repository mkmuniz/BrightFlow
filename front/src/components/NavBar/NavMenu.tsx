import { NavLinks } from "./NavLinks";
import { NavMenuProps } from "@/types/components.types";
import { MobileAuthButtons } from "./MobileAuthButtons";

export function NavMenu({
    isOpen,
    navLinks,
    handleLinkClick
}: NavMenuProps) {
    return <>
        <div className={`items-center justify-between transition-all duration-500 ${isOpen ? 'mobile:h-screen bg-black/95 backdrop-blur-lg fixed top-[72px] left-0 w-full' : 'mobile:h-0'} w-full md:flex md:w-auto md:order-1 md:relative md:top-0 md:bg-transparent`}>
            <ul className={`flex flex-col text-center items-center justify-center p-4 md:p-0 font-medium md:space-x-8 md:flex-row h-full`}>
                <NavLinks
                    navLinks={navLinks}
                    isOpen={isOpen}
                    handleLinkClick={handleLinkClick}
                />
                <MobileAuthButtons
                    isOpen={isOpen}
                    handleLinkClick={handleLinkClick}
                />
            </ul>
        </div>
    </>;
};