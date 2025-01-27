export function GradientOverlay() {
    return <>
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -inset-x-4 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
            <div className="absolute -inset-x-4 bottom-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
        </div>
    </>;
}