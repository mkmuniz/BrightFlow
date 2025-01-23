import Image from "next/image";

export function LogoSection({
    refHeaderTitle,
    isVisibleHeaderTitle
}: {
    refHeaderTitle: React.RefObject<HTMLDivElement>,
    isVisibleHeaderTitle: boolean
}) {
    return <>
        <div ref={refHeaderTitle} className={`transition-all duration-700 ${isVisibleHeaderTitle ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] rounded-full blur-lg opacity-20"></div>
                <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    alt="BrightFlow Logo"
                    className="relative z-10 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                />
            </div>
        </div>
    </>;
}