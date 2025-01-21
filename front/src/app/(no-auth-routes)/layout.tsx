import { ReactNode } from "react";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/authOptions";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";

interface PrivateLayoutProps {
    children: ReactNode
}

interface MenuItem {
    href: string;
    description: string;
}

const menuItems: MenuItem[] = [
    {
        href: "/",
        description: "Home"
    },
    {
        href: "/#solutions", 
        description: "Our Solutions"
    },
    {
        href: "/#about",
        description: "About Us"
    },
];

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions);

    if (session) {
        redirect('/user/home')
    }

    return <>
        <NavBar navLinks={menuItems} />
        {children}
        <Footer />
    </>
};