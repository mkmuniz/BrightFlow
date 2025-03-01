import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

export type LoginDataForm = {
    email?: string;
    password?: string;
};

export type SignUpDataForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    profilePicture: string;
    termsAccepted: boolean;
};

export type ProfileDataForm = {
    id?: string;
    name?: string;
    email?: string;
    profilePicture?: string;
};

export type PasswordStrength = {
    score: number;
    feedback: string;
}

export interface FormFieldProps {
    label: string;
    name: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
    required?: boolean;
    placeholder?: string;
    validation?: object;
}

export interface ProfilePictureProps {
    preview: string;
    fileInputRef: React.RefObject<HTMLInputElement>;
    register: any;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SubmitButtonProps {
    isPending: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
}

export interface CloseButtonProps {
    handleOpen: VoidFunction;
}

export interface PasswordFieldProps {
    register: any;
    errors: any;
    showPassword: boolean;
    togglePasswordVisibility: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export interface PasswordInputProps {
    label: string;
    name: "password" | "confirmPassword";
    register: UseFormRegister<SignUpDataForm>;
    showPassword: boolean;
    toggleVisibility: VoidFunction;
    error?: string;
    validation?: object;
}

export type PasswordStrengthIndicatorProps = {
    password: string;
    passwordStrength: PasswordStrength;
}

export interface TermsAndConditionsProps {
    isTermsOpen: boolean;
    setIsTermsOpen: (value: boolean) => void;
    register: UseFormRegister<SignUpDataForm>;
    error?: string;
}

export interface ProfilePictureUploadProps {
    preview: string;
    fileInputRef: React.RefObject<HTMLInputElement>;
    register: UseFormRegister<SignUpDataForm>;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}