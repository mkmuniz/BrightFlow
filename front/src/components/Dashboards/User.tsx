import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import Section from "../Section/Section";
import Container from "../Container/Container";

import UserDashboardSkeleton from "../Skeletons/UserDashboard";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { fetchUserProfile } from '../../requests/user.requests';

const COLORS = ['#00DC82', '#00A3FF', '#FF3D71', '#FFD76E'];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;

interface Billet {
    id: string;
    month: string;
    consumes: any[];
}

interface Consume {
    id: string;
    type: string;
    value: number;
}

export default function UserDashboard() {
    const { data: session, status }: any = useSession();

    const { data: billets, isLoading } = useQuery({
        queryKey: ['billets', session?.user?.id],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}billet?userId=${session?.user?.id}`);

            if (!response.ok)
                throw new Error('Failed to fetch billets');

            return response.json();
        },
        enabled: !!session?.user?.id,
    });

    const { data: userProfile, isLoading: isProfileLoading } = useQuery({
        queryKey: ['userProfile', session?.user?.id],
        queryFn: async () => {
            if (!session?.user?.id) return null;
            return fetchUserProfile(session.user.id);
        },
        enabled: !!session?.user?.id,
    });

    if (status === 'loading' || isLoading || isProfileLoading)
        return <UserDashboardSkeleton />;

    const processConsumptionData = () => {
        if (!billets || billets.length === 0) return [];

        const latestBillet = billets[0];

        return latestBillet.consumes.map((consume: Consume) => ({
            name: consume.type,
            value: Math.abs(consume.value)
        }));
    };

    const processTimeSeriesData = () => {
        if (!billets) return [];

        return billets.map((billet: Billet) => ({
            name: billet.month,
            energy: billet.consumes.find(c => c.type === 'Energia Elétrica')?.quantity || 0,
            compensated: Math.abs(billet.consumes.find(c => c.type === 'Energia Compensada GD I')?.quantity || 0)
        })).reverse();
    };

    const pieData = processConsumptionData();
    const lineData = processTimeSeriesData();

    return <>
        <div className="flex mobile:flex-col md:flex-row gap-6 w-full mb-8">
            <div className="flex h-[180px] w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,220,130,0.1)] border border-zinc-800">
                <div className="text-3xl h-full w-full flex flex-col items-center justify-center text-white">
                    {userProfile?.profilePicture ? (
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00DC82] to-[#00A3FF] rounded-full blur-lg opacity-20"></div>
                            <img src={userProfile.profilePicture} alt="Profile" className="w-20 h-20 rounded-full relative z-10 border-2 border-[#00DC82]/30" />
                        </div>
                    ) : (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00DC82] to-[#00A3FF] flex items-center justify-center text-3xl text-black font-bold">
                            {session?.user?.name?.[0]}
                        </div>
                    )}
                    <span className="mt-4 text-xl font-medium text-white">
                        Bem-vindo, <span className="text-[#00DC82]">{session?.user?.name}</span>!
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-[180px] w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,163,255,0.1)] border border-zinc-800">
                <span className="text-4xl font-bold text-[#00A3FF] mb-4">
                    {billets?.length || 0}
                </span>
                <div className="text-lg text-gray-300">
                    Boletos Carregados
                </div>
            </div>
        </div>

        <div className="grid mobile:grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,220,130,0.1)] border border-zinc-800">
                <h2 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00DC82]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                    Consumo de Energia (kWh)
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
                                    color: '#ffffff'
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
                                name="Energia Elétrica"
                                stroke="#00DC82"
                                strokeWidth={3}
                                dot={{ fill: '#00DC82', strokeWidth: 2 }}
                                activeDot={{ r: 6, fill: '#00DC82' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="compensated"
                                name="Energia Compensada"
                                stroke="#00A3FF"
                                strokeWidth={3}
                                dot={{ fill: '#00A3FF', strokeWidth: 2 }}
                                activeDot={{ r: 6, fill: '#00A3FF' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="w-full bg-zinc-900/80 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,163,255,0.1)] border border-zinc-800">
                <h2 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00A3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                    </svg>
                    Distribuição de Custos (R$)
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
                                {pieData.map((entry: any, index: number) => (
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
                                    color: '#ffffff'
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
        </div>
    </>
}
