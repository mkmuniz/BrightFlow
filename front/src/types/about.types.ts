import { RefObject } from "react";

export type AboutProps = {
    refTextDiv: RefObject<HTMLDivElement>;
    refImagesDiv: RefObject<HTMLDivElement>;
    isVisibleTextDiv: boolean;
    isVisibleImagesDiv: boolean;
    router: any;
};

export type AboutImageProps = {
    refImagesDiv: RefObject<HTMLDivElement>;
    isVisibleImagesDiv: boolean;
};

export type ImageCardProps = {
    src: string;
    alt: string;
    aspectRatio: string;
    hoverColor: string;
};

export type AboutDescriptionProps = {
    refTextDiv: RefObject<HTMLDivElement>;
    isVisibleTextDiv: boolean;
    router: any;
}; 