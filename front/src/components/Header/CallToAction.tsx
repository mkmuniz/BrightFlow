import { CallToActionProps } from "@/types/components.types";

export function CallToAction({
    isVisibleHeaderSubtext,
    router
}: CallToActionProps) {
    return <>
        <div className={`transition-all duration-1000 delay-300 ${isVisibleHeaderSubtext ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <button
                onClick={() => router.push('/sign-up')}
                className="px-8 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105"
            >
                Start Now
            </button>
        </div>
    </>;
}