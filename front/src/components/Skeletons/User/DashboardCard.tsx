import { DashboardCardProps } from "../../types/components.types";

export default function DashboardCard({ children }: DashboardCardProps) {
    return (
        <div className="w-full bg-zinc-900/80 rounded-xl p-6 border border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] transition-shadow">
            {children}
        </div>
    );
} 