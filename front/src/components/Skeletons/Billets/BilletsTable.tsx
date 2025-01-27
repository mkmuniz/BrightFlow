import Section from '../../Section/Section';
import Container from '../../Container/Container';

import { TableSkeleton } from './TableSkeleton';
import { HeaderSkeleton } from './HeaderSkeleton';
import { GradientOverlay } from './GradientOverlay';

export default function BilletsTableSkeleton() {
    return (
        <Section styles="bg-black min-h-screen w-full">
            <Container styles="max-w-6xl mx-auto">
                <HeaderSkeleton />
                <TableSkeleton />
                <GradientOverlay />
            </Container>
        </Section>
    );
};