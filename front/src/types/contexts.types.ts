import { ReactNode } from "react";

export type AuthContextType = {
    isAuthenticated: boolean;
};

export interface AuthProviderProps {
    children: ReactNode;
};

export interface TableSearchInputProps {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};