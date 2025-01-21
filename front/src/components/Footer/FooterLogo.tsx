import Link from "next/link";

export function FooterLogo() {
    return <>
        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <span className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] bg-clip-text text-transparent">
                BrightFlow
            </span>
        </Link>
    </>
};