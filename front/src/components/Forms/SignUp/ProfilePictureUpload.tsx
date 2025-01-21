import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/24/outline';
import { UseFormRegister } from 'react-hook-form';
import { ProfilePictureUploadProps, SignUpDataForm } from '@/types/forms.types';

export default function ProfilePictureUpload({ preview, fileInputRef, register, handleImageChange }: ProfilePictureUploadProps) {
    return (
        <div className="mb-4 w-full flex flex-col items-center justify-center gap-2">
            <div
                className="w-32 h-32 rounded-full overflow-hidden cursor-pointer relative group"
                onClick={() => fileInputRef.current?.click()}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] rounded-full blur-lg opacity-20"></div>
                <Image 
                    src={preview} 
                    width={128} 
                    height={128} 
                    alt="Profile picture" 
                    className="h-full w-full object-cover relative z-10" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CameraIcon className="w-8 h-8 text-white" />
                </div>
            </div>
            <span className="text-gray-400 text-sm">Upload a photo</span>
            <input
                type="file"
                accept="image/*"
                {...register("profilePicture")}
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
            />
        </div>
    );
} 