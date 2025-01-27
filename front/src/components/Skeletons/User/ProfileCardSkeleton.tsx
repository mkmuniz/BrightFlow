import DashboardCard from './DashboardCard';

export default function ProfileCardSkeleton() {
    return (
        <DashboardCard>
            <div className="h-full w-full flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full bg-zinc-800 shadow-[0_4px_12px_rgb(0,0,0,0.15)]"></div>
                <div className="h-6 bg-zinc-800 rounded w-2/3 shadow-[0_2px_8px_rgb(0,0,0,0.12)]"></div>
            </div>
        </DashboardCard>
    );
} 