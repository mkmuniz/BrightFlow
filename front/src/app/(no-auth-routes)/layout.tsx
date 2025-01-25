import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/authOptions";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";

import { MenuItem, PrivateLayoutProps } from "@/types/components.types";

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

    if (session) redirect('/user/home')

    return <>
        <NavBar navLinks={menuItems} />
        {children}
        <Footer />
    </>
};