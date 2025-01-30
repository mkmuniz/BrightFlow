import React from "react";
import Link from "next/link";
import { NavLinkProps } from "@/types/components.types";

export default function NavLink({ 
    href, 
    description, 
    styles, 
    children, 
    onClick 
}: NavLinkProps) {
    return <>
        <Link href={href} className={styles} onClick={onClick}>
            {children ?
                <>
                    {children}
                </> : <>
                    {description}
                </>
            }
        </Link>
    </>;
};