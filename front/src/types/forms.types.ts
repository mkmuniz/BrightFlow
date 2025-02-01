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

export type ProfilePictureProps = {
    preview: string;
    fileInputRef: React.RefObject<HTMLInputElement>;
    register: any;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type SubmitButtonProps = {
    isPending: boolean;
    isDisabled?: boolean;
    children: React.ReactNode;
}

export type CloseButtonProps = {
    handleOpen: VoidFunction;
}

export type PasswordFieldProps = {
    register: any;
    errors: any;
    showPassword: boolean;
    togglePasswordVisibility: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type PasswordInputProps = {
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

export type TermsAndConditionsProps = {
    isTermsOpen: boolean;
    setIsTermsOpen: (value: boolean) => void;
    register: UseFormRegister<SignUpDataForm>;
    error?: string;
}

export type ProfilePictureUploadProps = {
    preview: string;
    fileInputRef: React.RefObject<HTMLInputElement>;
    register: UseFormRegister<SignUpDataForm>;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}