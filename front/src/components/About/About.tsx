"use client"

import { useRef, RefObject } from "react";
import { useRouter } from "next/navigation";
import { useIsVisible } from "@/hooks/useIsVisible";

import Section from "../Section/Section";
import Container from "../Container/Container";

import AboutImage from "./AboutImage";
import AboutDescription from "./AboutDescription";
import BackgroundEffects from "../BackgroundEffects";

export default function About() {
    const router = useRouter();

    const refTextDiv: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const refImagesDiv: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const isVisibleTextDiv: boolean = useIsVisible(refTextDiv);
    const isVisibleImagesDiv: boolean = useIsVisible(refImagesDiv);

    return (
        <Section styles="bg-black min-h-screen w-full relative overflow-hidden py-20 mobile:px-8 px-20">
            <BackgroundEffects />

            <Container styles="relative">
                <div className="flex flex-wrap items-center justify-between -mx-4" id="about">
                    <AboutImage 
                        refImagesDiv={refImagesDiv} 
                        isVisibleImagesDiv={isVisibleImagesDiv} 
                    />
                    <AboutDescription 
                        refTextDiv={refTextDiv}
                        isVisibleTextDiv={isVisibleTextDiv}
                        router={router}
                    />
                </div>
            </Container>
        </Section>
    );
}