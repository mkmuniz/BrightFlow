import { SearchAndUploadSkeleton } from "./SearchAndUploadSkeleton";

export function HeaderSkeleton() {
    return <>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="h-8 w-32 bg-zinc-800/50 rounded-xl animate-pulse"></div>
            <SearchAndUploadSkeleton />
        </div>
    </>;
};