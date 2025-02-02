import { ReactNode } from "react";

export type AuthContextType = {
    isAuthenticated: boolean;
};

export type AuthProviderProps = {
    children: ReactNode;
};

export type TableSearchInputProps = {
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};