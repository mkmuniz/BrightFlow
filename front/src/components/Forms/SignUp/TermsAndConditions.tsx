import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { TermsAndConditionsProps } from '@/types/forms.types';

export default function TermsAndConditions({ isTermsOpen, setIsTermsOpen, register, error }: TermsAndConditionsProps) {
    return (
        <div className="space-y-4 border border-zinc-800 rounded-xl p-4">
            <div 
                onClick={() => setIsTermsOpen(!isTermsOpen)}
                className="flex items-center justify-between cursor-pointer group"
            >
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    By creating an account, you agree to the collection and processing of the following data:
                </p>
                <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isTermsOpen ? 'rotate-180' : ''}`}
                />
            </div>
            
            <div className={`overflow-hidden transition-all duration-200 ease-in-out ${isTermsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="text-sm text-gray-400 list-disc pl-5 space-y-2 pt-4">
                    <li>Registration data: full name, email, and profile picture</li>
                    <li>Data extracted from energy bills:
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li>Installation number</li>
                            <li>Reference month</li>
                            <li>Electricity consumption (kWh and values)</li>
                            <li>SCEE Energy without ICMS (kWh and values)</li>
                            <li>GD I Compensated Energy (kWh and values)</li>
                            <li>Municipal Public Lighting Contribution</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="flex items-start gap-2 pt-2 border-t border-zinc-800">
                <input
                    type="checkbox"
                    id="termsAccepted"
                    {...register("termsAccepted", { 
                        required: 'You need to accept the terms to create an account' 
                    })}
                    className="mt-1"
                />
                <label htmlFor="termsAccepted" className="text-sm text-gray-300">
                    I agree to the collection and processing of the above data for energy consumption analysis and management purposes, as detailed in our{' '}
                    <Link href="/privacy-policy" className="text-[#8B5CF6] hover:text-[#00A3FF] transition-colors">
                        Privacy Policy
                    </Link>
                </label>
            </div>
            {error && (
                <p className="text-sm text-red-400">{error}</p>
            )}
        </div>
    );
} 