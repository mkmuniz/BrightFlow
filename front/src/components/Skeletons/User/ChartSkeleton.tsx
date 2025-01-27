import DashboardCard from './DashboardCard';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    ResponsiveContainer } 
from 'recharts';

const dummyData = Array(5).fill(null).map((_, i) => ({ name: i, value: 0 }));

export default function ChartSkeleton() {
    return (
        <DashboardCard>
            <div className="h-8 bg-zinc-800 rounded w-64 mb-4 shadow-[0_2px_8px_rgb(0,0,0,0.12)]"></div>
            <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dummyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                        <XAxis dataKey="name" stroke="#71717a" />
                        <YAxis stroke="#71717a" />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#27272a"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </DashboardCard>
    );
} 