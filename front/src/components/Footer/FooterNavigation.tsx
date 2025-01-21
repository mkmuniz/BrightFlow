import Link from "next/link";

export function FooterNavigation() {
    const links = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Our Solutions',
            href: '/#solutions'
        },
        {
            text: 'About Us',
            href: '/#about'
        }
    ];

    return <>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 gap-2">
            {links.map((link, index) => {
                return <>
                    <li key={index}>
                        <Link
                            href={link.href}
                            className="block py-2 px-3 text-gray-400 hover:text-white transition-colors"
                        >
                            {link.text}
                        </Link>
                    </li>
                </>
            })}
        </ul>
    </>
};