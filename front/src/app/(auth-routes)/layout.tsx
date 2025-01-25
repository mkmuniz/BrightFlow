import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/authOptions";

import SideBar from "@/components/SideBar/SideBar";
import { PrivateLayoutProps } from "@/types/components.types";

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session = await getServerSession(nextAuthOptions);

    if (!session) redirect('/')

    return <>
        <SideBar />
        {children}
    </>
};