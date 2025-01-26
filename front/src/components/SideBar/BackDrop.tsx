export function Backdrop({ isOpen }: { isOpen: boolean }) {
    return <>
        <div
            className={`fixed inset-0 z-[50] ${isOpen ? 'block' : 'hidden'}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        />
    </>
}