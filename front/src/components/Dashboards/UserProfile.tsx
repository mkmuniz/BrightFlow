import Image from "next/image";

export function UserProfile(props: any) {
    return <>
        <div className="flex h-[180px] w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(139,92,246,0.1)] border border-zinc-800">
            <div className="text-3xl h-full w-full flex flex-col items-center justify-center text-white">
                {props.profilePicture ? (
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] rounded-full blur-lg opacity-20"></div>
                        <Image
                            src={props.profilePicture}
                            width={64}
                            height={64}
                            alt="Profile"
                            priority
                            className="w-20 h-20 rounded-full relative z-10 border-2 border-[#8B5CF6]/30"
                        />
                    </div>
                ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] flex items-center justify-center text-3xl text-white font-bold">
                        {props?.name ? props?.name[0] : ''}
                    </div>
                )}
                <span className="mt-4 text-xl font-medium text-white">
                    Welcome, <span className="text-[#8B5CF6]">{props.name}</span>!
                </span>
            </div>
        </div>
    </>
}