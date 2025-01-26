import { ExpandedLink } from './ExpandedLink';
import LogoutButton from '@/app/(auth-routes)/logout/page';

import HomeIcon from '@/../public/assets/icons/home.svg';
import BilletsTable from '@/../public/assets/icons/table.svg';
import ProfileIcon from '@/../public/assets/icons/profile.svg';

export function ExpandedSideBar({ isOpen }: { isOpen: boolean }) {
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
        <div className={`flex flex-col justify-between fixed top-0 left-0 bottom-0 min-h-screen mt-12 h-full z-[60] bg-black transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'}`}>
            <div className="flex flex-col justify-center items-center gap-y-2 py-4">
                {sideBarLinks.map((link) => (
                    <ExpandedLink key={link.path} {...link} />
                ))}
            </div>
            <div className="flex flex-col justify-center items-center mb-6">
                <LogoutButton />
            </div>
        </div>
    </>
}