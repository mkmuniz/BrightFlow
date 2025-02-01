import { AboutImageProps } from "@/types/about.types";
import ImageCard from "./ImageCard";

export default function AboutImage({ refImagesDiv, isVisibleImagesDiv }: AboutImageProps) {
    return (
        <div className="w-full px-4 lg:w-6/12">
            <div
                ref={refImagesDiv}
                className={`flex items-center -mx-3 sm:-mx-4 transition-all duration-700 
                            ${isVisibleImagesDiv ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                        <ImageCard
                            src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                            alt="About us 1"
                            aspectRatio="aspect-[4/3]"
                            hoverColor="rgba(139,92,246,0.2)"
                        />
                    </div>
                    <div className="py-3 sm:py-4">
                        <ImageCard
                            src="https://i.ibb.co/rfHFq15/image-2.jpg"
                            alt="About us 2"
                            aspectRatio="aspect-[4/3]"
                            hoverColor="rgba(0,163,255,0.2)"
                        />
                    </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                        <ImageCard
                            src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                            alt="About us 3"
                            aspectRatio="aspect-[3/4]"
                            hoverColor="rgba(139,92,246,0.2)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 