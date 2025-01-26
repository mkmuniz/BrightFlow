import { ToggleIcon } from "./ToggleIcon";

export function ToggleButton({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }) {
    return <>
        <div>
            <button
                type="button"
                className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-black text-white shadow-sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="sidebar-mini"
                aria-label="Toggle navigation"
            >
                <span className="sr-only">Toggle Navigation</span>
                <ToggleIcon isOpen={isOpen} />
            </button>
        </div>
    </>
}