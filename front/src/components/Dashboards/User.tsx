import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import { Consume } from "@/types/components.types";
import UserDashboardSkeleton from "../Skeletons/User/UserDashboard";

import { BilletCard } from "./BilletCard";
import { UserProfile } from "./UserProfile";
import { fetchUserProfile } from '../../requests/user.requests';
import { EnergyConsumptionChart } from "./EnergyConsumptionChart";
import { EnergyConsumptionPieChart } from "./EnergyConsumptionPieChart";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;

export default function UserDashboard() {
    const { data: session, status }: any = useSession();

    const { data: billets, isLoading } = useQuery({
        queryKey: ['billets', session?.user?.id],
        queryFn: async () => {
            const response = await fetch(`${baseUrl}billet?userId=${session?.user?.id}`);
            if (!response.ok) throw new Error('Failed to fetch billets');

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

    const isUserDashboardLoading = status === 'loading' || isLoading || isProfileLoading;
    if (isUserDashboardLoading) return <UserDashboardSkeleton />;

    const processConsumptionData = () => {
        const isBilletsNullOrEmpty = !billets || billets.length === 0;
        if (isBilletsNullOrEmpty) return [];

        const latestBillet = billets[0];
        return latestBillet.consumes.map((consume: Consume) => ({
            name: consume.type,
            value: Math.abs(consume.value)
        }));
    };

    const pieData = processConsumptionData();

    return <>
        <div className="flex mobile:flex-col md:flex-row gap-6 w-full mb-8">
            <UserProfile {...userProfile} />
            <BilletCard billets={billets} />
        </div>

        <div className="grid mobile:grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <EnergyConsumptionChart billets={billets} />
            <EnergyConsumptionPieChart pieData={pieData} />
        </div>
    </>
}