import { RefObject } from "react";

export interface AboutProps {
    refTextDiv: RefObject<HTMLDivElement>;
    refImagesDiv: RefObject<HTMLDivElement>;
    isVisibleTextDiv: boolean;
    isVisibleImagesDiv: boolean;
    router: any;
};

export interface AboutImageProps {
    refImagesDiv: RefObject<HTMLDivElement>;
    isVisibleImagesDiv: boolean;
};

export interface ImageCardProps {
    src: string;
    alt: string;
    aspectRatio: string;
    hoverColor: string;
};

export interface AboutDescriptionProps {
    refTextDiv: RefObject<HTMLDivElement>;
    isVisibleTextDiv: boolean;
    router: any;
}; 