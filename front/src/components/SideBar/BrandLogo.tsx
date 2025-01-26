import Image from "next/image";
import Logo from "@/../public/logo.png";

export function BrandLogo() {
    return <>
        <div className="ml-3 z-[70]">
            <a className="flex-none" href="#">
                <Image src={Logo} className="w-10 h-10" alt="BrightFlow Logo" />
            </a>
        </div>
    </>
}