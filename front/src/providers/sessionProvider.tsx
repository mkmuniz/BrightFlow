"use client"

import { SessionProvider } from "next-auth/react";
import { NextAuthSessionProviderProps } from "@/types/providers.types";

export default function NextAuthSessionProvider({ children }: NextAuthSessionProviderProps) {
    return <SessionProvider>
        {children}
    </SessionProvider>
};