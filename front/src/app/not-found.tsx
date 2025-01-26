"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";

import BackgroundEffects from "@/components/BackgroundEffects";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-gray-300 flex items-center justify-center relative overflow-hidden">
            <BackgroundEffects />

            <div className="relative text-center space-y-8">
                <div className="relative flex justify-center">
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

                <div className="space-y-4">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] bg-clip-text text-transparent">
                        404
                    </h1>
                    <p className="text-xl text-gray-400">
                        Página não encontrada
                    </p>
                </div>

                <Link 
                    href="/" 
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105"
                >
                    Voltar ao Início
                </Link>
            </div>
        </div>
    );
}