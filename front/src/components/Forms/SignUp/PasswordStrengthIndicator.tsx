import { PasswordStrength, PasswordStrengthIndicatorProps } from '@/types/forms.types';

export default function PasswordStrengthIndicator({ password, passwordStrength }: PasswordStrengthIndicatorProps) {
    const getPasswordStrengthColor = () => {
        switch (passwordStrength.score) {
            case 0:
            case 1:
                return 'bg-red-500';
            case 2:
                return 'bg-orange-500';
            case 3:
                return 'bg-yellow-500';
            case 4:
                return 'bg-green-500';
            case 5:
                return 'bg-green-600';
            default:
                return 'bg-gray-200';
        }
    };

    if (!password) return null;

    return (
        <div className="mt-2 space-y-2">
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div
                    className={`h-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                    style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                />
            </div>
            <p className={`text-sm ${passwordStrength.score >= 3 ? 'text-green-400' : 'text-red-400'}`}>
                {passwordStrength.feedback}
            </p>
        </div>
    );
} 