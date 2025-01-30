import Link from "next/link";

import LogoText from "./LogoText";
import LogoImage from "./LogoImage";
import { LogoProps } from "@/types/components.types";

export default function Logo({ handleLinkClick }: LogoProps) {
    return (
        <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <LogoImage />
            <LogoText />
        </Link>
    );
} 