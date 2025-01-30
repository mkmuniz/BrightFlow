import NavLink from "./NavLink";
import { MobileAuthButtonsProps } from "@/types/components.types";

export function MobileAuthButtons({ isOpen, handleLinkClick }: MobileAuthButtonsProps) {
    return <>
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <NavLink
                href="/sign-up"
                styles={`py-2 px-4 text-gray-300 hover:text-white transition-colors ${isOpen ? 'mobile:text-xl' : 'mobile:text-[0px] mobile:hidden'}`}
                description="Sign Up"
                onClick={() => handleLinkClick()}
            />
            <NavLink
                href="/login"
                styles={`px-6 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 ${isOpen ? 'mobile:text-xl' : 'mobile:text-[0px] mobile:hidden'}`}
                description="Login"
                onClick={() => handleLinkClick()}
            />
        </div>
    </>;
};