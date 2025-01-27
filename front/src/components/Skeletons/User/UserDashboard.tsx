import Container from '../../Container/Container';
import Section from '../../Section/Section';

import ChartSkeleton from './ChartSkeleton';
import CircleChartSkeleton from './CircleChartSkeleton';
import ProfileCardSkeleton from './ProfileCardSkeleton';
import StatCardSkeleton from './StatCardSkeleton';

export default function UserDashboardSkeleton() {
    return (
        <Section styles="bg-black min-h-screen w-full">
            <Container styles="max-w-6xl mx-auto p-6">
                <div className="flex mobile:flex-col md:flex-row gap-6 w-full mb-8 animate-pulse">
                    <ProfileCardSkeleton />
                    <StatCardSkeleton />
                </div>

                <div className="grid mobile:grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <ChartSkeleton />
                    <CircleChartSkeleton />
                </div>
            </Container>
        </Section>
    );
} 