import { BrandLogo } from "./BrandLogo";
import { ToggleButton } from "./ToggleButton";

export function TopBar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) {
    return <>
        <div className="flex bg-black min-w-screen fixed top-0 w-full z-[99]">
            <div className="flex justify-between p-2 w-full h-full">
                <BrandLogo />
                <ToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    </>
}