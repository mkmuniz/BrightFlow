import DashboardCard from './DashboardCard';

export default function StatCardSkeleton() {
    return (
        <DashboardCard>
            <div className="flex flex-col items-center justify-center h-[180px]">
                <div className="h-12 bg-zinc-800 rounded w-16 mb-4 shadow-[0_4px_12px_rgb(0,0,0,0.15)]"></div>
                <div className="h-6 bg-zinc-800 rounded w-32 shadow-[0_2px_8px_rgb(0,0,0,0.12)]"></div>
            </div>
        </DashboardCard>
    );
} 