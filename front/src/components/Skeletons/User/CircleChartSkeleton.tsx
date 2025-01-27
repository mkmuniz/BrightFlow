import DashboardCard from './DashboardCard';

export default function CircleChartSkeleton() {
    return (
        <DashboardCard>
            <div className="h-8 bg-zinc-800 rounded w-64 mb-4 shadow-[0_2px_8px_rgb(0,0,0,0.12)]"></div>
            <div className="h-[350px] flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full bg-zinc-800 shadow-[0_4px_12px_rgb(0,0,0,0.15)]"></div>
            </div>
        </DashboardCard>
    );
} 