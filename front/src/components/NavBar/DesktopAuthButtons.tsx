import NavLink from "./NavLink";

export default function DesktopAuthButtons() {
    return (
        <div className="hidden md:flex items-center">
            <NavLink 
                href="/sign-up" 
                styles="py-2 px-4 text-gray-300 hover:text-white transition-colors mr-4" 
                description="Sign Up" 
            />
            <NavLink 
                href="/login" 
                styles="px-6 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105"
                description="Login"
            />
        </div>
    );
} 