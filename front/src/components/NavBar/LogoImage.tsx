import Image from "next/image";

export default function LogoImage() {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] rounded-full blur-lg opacity-20"></div>
            <Image 
                src="/logo.png" 
                width={50} 
                height={50} 
                alt="logo" 
                className="relative z-10 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]"
            />
        </div>
    );
} 