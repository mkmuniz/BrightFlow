"use client"

import { AuthContextType, AuthProviderProps } from "@/types/contexts.types";
import React, { createContext, ReactNode } from "react";

export const AuthContext = createContext<AuthContextType>({ isAuthenticated: false });

export default function AuthProvider({ children }: AuthProviderProps) {
    const isAuthenticated = false;

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}
