import { Billet } from "@/types/components.types";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

export function EnergyConsumptionChart({ billets }: { billets: any }) {
    const processTimeSeriesData = () => {
        if (!billets) return [];

        return billets.map((billet: Billet) => ({
            name: billet.month,
            energy: billet.consumes.find(c => c.type === 'Energia Elétrica')?.quantity || 0,
            compensated: Math.abs(billet.consumes.find(c => c.type === 'Energia Compensada GD I')?.quantity || 0)
        })).reverse();
    };

    const lineData = processTimeSeriesData();

    return <div className="w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(139,92,246,0.1)] border border-zinc-800">
        <h2 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            Energy Consumption (kWh)
        </h2>
        <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis
                        dataKey="name"
                        angle={-45}
                        textAnchor="end"
                        height={60}
                        stroke="#71717a"
                    />
                    <YAxis stroke="#71717a" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#18181b',
                            border: '1px solid #27272a',
                            borderRadius: '0.75rem',
                            color: '#fff',
                        }}
                    />
                    <Legend
                        verticalAlign="top"
                        height={36}
                        wrapperStyle={{ color: '#ffffff' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="energy"
                        name="Electric Energy"
                        stroke="#8B5CF6"
                        strokeWidth={3}
                        dot={{ fill: '#8B5CF6', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#8B5CF6' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="compensated"
                        name="Compensated Energy"
                        stroke="#00A3FF"
                        strokeWidth={3}
                        dot={{ fill: '#00A3FF', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#00A3FF' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
}