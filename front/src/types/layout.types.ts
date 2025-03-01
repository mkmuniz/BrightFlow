import { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode;
    styles?: string;
};

export interface PrivateLayoutProps {
    children: ReactNode;
};

export interface BackDropProps {
    isOpen: boolean;
};

export interface DashboardCardProps extends PrivateLayoutProps {
    children: ReactNode;
}; 