import Image from "next/image";
import { ImageCardProps } from "@/types/about.types";

export default function ImageCard({ src, alt, aspectRatio }: ImageCardProps) {
    return (
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)] transition-shadow">
            <div className={`relative ${aspectRatio} w-full`}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
} 