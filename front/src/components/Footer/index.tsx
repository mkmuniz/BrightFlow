import Section from "../Section/Section";
import Container from "../Container/Container";

import { FooterLogo } from "./FooterLogo";
import BackgroundEffects from "../BackgroundEffects";
import { FooterNavigation } from "./FooterNavigation";
import { FooterDeveloperInfo } from "./FooterDeveloperInfo";

export default function Footer() {
    return (
        <Section styles="bg-black relative overflow-hidden">
            <BackgroundEffects />
            
            <Container styles="relative">
                <footer className="w-full text-white z-10">
                    <div className="w-full mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <FooterLogo />
                            <FooterNavigation />
                        </div>
                        
                        <hr className="my-8 border-zinc-800" />
                        
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <FooterDeveloperInfo />
                            <Copyright />
                        </div>
                    </div>
                </footer>
            </Container>
        </Section>
    );
}

const Copyright = () => (
    <span className="text-sm text-gray-400">
        © 2024 BrightFlow. All rights reserved.
    </span>
);
