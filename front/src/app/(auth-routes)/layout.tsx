import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/lib/authOptions";
import { PrivateLayoutProps } from "@/types/components.types";

import SideBar from "@/components/SideBar/SideBar";
import SessionValidator from "@/components/Auth/SessionValidator";

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
    const session: any = await getServerSession(nextAuthOptions);

    if (!session) redirect('/login');
    return <>
        <SessionValidator session={session} />
        <SideBar />
        {children}
    </>;
}