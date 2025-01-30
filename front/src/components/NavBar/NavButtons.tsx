import MobileMenuButton from "./MobileMenuButton";
import DesktopAuthButtons from "./DesktopAuthButtons";
import { NavButtonsProps } from "@/types/components.types";

export default function NavButtons({ isOpen, setOpen }: NavButtonsProps) {
    return (
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <DesktopAuthButtons />
            <MobileMenuButton isOpen={isOpen} setOpen={setOpen} />
        </div>
    );
} 