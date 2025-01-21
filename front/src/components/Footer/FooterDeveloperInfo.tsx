import Link from "next/link";

export function FooterDeveloperInfo() {
    const links = [{
        name: 'GitHub',
        href: 'https://github.com/mkmuniz',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/mikael-muniz-ribeiro/',
    },
    {
        name: 'My Website',
        href: 'https://mkmuniz.dev',
    }];

    return <>
        <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400">
                Developed by{" "}
                <Link
                    href="https://mkmuniz.dev"
                    target="_blank"
                    className="text-white hover:text-[#8B5CF6] transition-colors"
                >
                    Mikael Muniz Ribeiro
                </Link>
            </p>
            <div className="flex items-center gap-4 mt-2">
                {links.map((link, index) => {
                    return <Link
                        href={link.href}
                        target="_blank"
                        className="text-gray-400 hover:text-white transition-colors"
                        key={index}
                    >
                        {link.name}
                    </Link>
                })}
            </div>
        </div>
    </>;
};