"use client"

import React, { useRef } from "react";

import { useIsVisible } from "@/hooks/useIsVisible";
import { useRouter } from "next/navigation";

import Section from "../Section/Section";
import Container from "../Container/Container";

import BackgroundEffects from "../BackgroundEffects";
import { HeaderContent } from "./HeaderContent";

export default function Header() {
    const router = useRouter();
    const refHeaderTitle = useRef<HTMLDivElement>(null);
    const refHeaderSubtext = useRef<HTMLSpanElement | HTMLParagraphElement>(null);

    const isVisibleHeaderTitle = useIsVisible(refHeaderTitle);
    const isVisibleHeaderSubtext = useIsVisible(refHeaderSubtext);

    return (
        <Section styles="bg-black min-h-screen w-full relative overflow-hidden">
            <BackgroundEffects />
            <Container styles="relative">
                <HeaderContent 
                    refHeaderTitle={refHeaderTitle}
                    refHeaderSubtext={refHeaderSubtext}
                    isVisibleHeaderTitle={isVisibleHeaderTitle}
                    isVisibleHeaderSubtext={isVisibleHeaderSubtext}
                    router={router}
                />
            </Container>
        </Section>
    );
}