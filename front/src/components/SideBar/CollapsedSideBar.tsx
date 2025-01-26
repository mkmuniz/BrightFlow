import { CollapsedLink } from "./CollapsedLink";
import LogoutButton from "@/app/(auth-routes)/logout/page";

import HomeIcon from '@/../public/assets/icons/home.svg';
import BilletsTable from '@/../public/assets/icons/table.svg';
import ProfileIcon from '@/../public/assets/icons/profile.svg';

export function CollapsedSideBar() {
    const sideBarLinks = [
        {
            path: '/user/home',
            description: 'Home',
            icon: HomeIcon,
            alt: 'BrightFlow Home Icon',
        },
        {
            path: '/billets/table',
            description: 'Billets',
            icon: BilletsTable,
            alt: 'BrightFlow Billets Table Icon',
        },
        {
            path: '/user/profile',
            description: 'Profile',
            icon: ProfileIcon,
            alt: 'BrightFlow Profile Icon',
        },
    ];

    return <>
        <div
            id="sidebar-mini"
            className="flex flex-col justify-between hs-overlay transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] mt-12 bg-black w-20"
        >
            <div className="flex flex-col justify-center items-center gap-y-2 py-4">
                {sideBarLinks.map((link) => (
                    <CollapsedLink key={link.path} {...link} />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
                <LogoutButton />
            </div>
        </div>
    </>
}