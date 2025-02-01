import { AboutDescriptionProps } from "@/types/about.types";

export default function AboutDescription({ refTextDiv, isVisibleTextDiv, router }: AboutDescriptionProps) {
    return (
        <div ref={refTextDiv} className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className={`mt-10 lg:mt-0 m-6 transition-all duration-700 ${isVisibleTextDiv ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}>
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] bg-clip-text text-transparent">
                    About BrightFlow
                </h2>
                <p className="mb-5 text-lg text-white leading-relaxed">
                    BrightFlow is an innovative platform developed to simplify the management of electricity bills.
                    With our solution, you have access to an intuitive dashboard that transforms complex data into clear and actionable information.
                </p>
                <p className="mb-8 text-lg text-white leading-relaxed">
                    Our platform offers detailed analysis of your energy consumption, allowing for more efficient control of your expenses.
                    With BrightFlow, you can monitor trends, identify consumption patterns, and make smarter decisions to optimize
                    your energy efficiency.
                </p>
                <button
                    onClick={() => router.push('/sign-up')}
                    className="px-8 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105"
                >
                    Learn More
                </button>
            </div>
        </div>
    );
} 