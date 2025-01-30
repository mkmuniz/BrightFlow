import { ReactNode } from "react";

export type ContainerProps = {
    children: ReactNode,
    styles?: string,
};

export type PrivateLayoutProps = {
    children: ReactNode;
};

export type BackDropProps = {
    isOpen: boolean;
};

export type DashboardCardProps = {
    children: ReactNode;
}; 