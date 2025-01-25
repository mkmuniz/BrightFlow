import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from "recharts";

export function EnergyConsumptionPieChart({ pieData }: { pieData: any[] }) {
    const COLORS = ['#8B5CF6', '#00A3FF', '#10B981', '#F59E0B', '#EF4444'];

    return <div className="w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(139,92,246,0.1)] border border-zinc-800">
        <h2 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00A3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
            </svg>
            Cost Distribution (R$)
        </h2>
        <div className="h-[350px] relative">
            <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                    <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieData.map((index: number) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#18181b',
                            border: '1px solid #27272a',
                            borderRadius: '0.75rem',
                        }}
                        itemStyle={{
                            color: "#fff"
                        }}
                    />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        wrapperStyle={{
                            fontSize: '12px',
                            paddingTop: '10px',
                            width: '100%',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            color: '#ffffff'
                        }}
                        formatter={(value: string) => {
                            return value.length > 20 ? value.substring(0, 20) + '...' : value;
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
}