"use client";

import React, { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/navigation';
import { signUp } from '@/requests/user.requests';
import { useMutation } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';

import Link from 'next/link';

import ReCAPTCHA from 'react-google-recaptcha';
import { handleImageChange } from '@/utils/image.utils';

import { FormField } from '../FormField';
import PasswordInput from './PasswordInput';
import TermsAndConditions from './TermsAndConditions';
import ProfilePictureUpload from './ProfilePictureUpload';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

import PopUpError from '@/components/PopUps/Error';
import PopUpSuccess from '@/components/PopUps/Success';
import ReCaptchaField from '@/components/Recaptcha';
import SubmitButton from '@/components/Buttons/Submit';
import BackgroundEffects from '@/components/BackgroundEffects';

import { SignUpDataForm, PasswordStrength } from '@/types/forms.types';
import { signIn } from 'next-auth/react';

export default function SignUpForm() {
    const [errorSignUp, setError] = useState<string>('');
    const [successSignUp, setSuccess] = useState<string>('');

    const [showPassword, setStatusPassword] = useState(true);
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>({ score: 0, feedback: '' });

    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [preview, setPreview] = useState("/assets/icons/profile-default-placeholder.png");

    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpDataForm>();
    const router = useRouter();

    const password = watch('password');
    const email = watch('email');

    useEffect(() => {
        if (password) {
            const strength = evaluatePasswordStrength(password);
            setPasswordStrength(strength);
        }
    }, [password]);

    const handleImageChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleImageChange(e, setError, setSelectedFile, setPreview);
    };

    const evaluatePasswordStrength = (password: string): PasswordStrength => {
        let score = 0;
        let feedback = '';

        if (password.length >= 8) score += 1;
        if (password.match(/[A-Z]/)) score += 1;
        if (password.match(/[a-z]/)) score += 1;
        if (password.match(/[0-9]/)) score += 1;
        if (password.match(/[^A-Za-z0-9]/)) score += 1;

        switch (score) {
            case 0:
            case 1:
                feedback = 'Very weak password';
                break;
            case 2:
                feedback = 'Weak password';
                break;
            case 3:
                feedback = 'Medium strength password';
                break;
            case 4:
                feedback = 'Strong password';
                break;
            case 5:
                feedback = 'Very strong password';
                break;
        }

        return { score, feedback };
    };

    const { mutate }: any = useMutation({
        mutationFn: signUp,
        onSuccess: async (data: any) => {
            setIsSubmitting(false);
            if (data.status === 409) return setError('Email already exists');
            if (data.status === 500) return setError('Internal error, we are working on it!');
            if (data.status === 404) return setError('Not found, try again!');
            if (data.status === 201) {
                try {
                    const recaptchaToken = await recaptchaRef.current?.executeAsync();
                    recaptchaRef.current?.reset();

                    if (!recaptchaToken) {
                        setError('Security verification failed. Please try again.');
                        return;
                    }

                    const response = await signIn('user-login', {
                        email,
                        password,
                        recaptchaToken,
                        redirect: false
                    });

                    if (!response?.error) {
                        setSuccess('Successfully signed up! Wait a moment...');
                        setTimeout(() => {
                            router.replace('/user/home');
                        }, 3000);
                    }
                } catch (err: any) {
                    console.error(err);
                    setError("Internal Error, we're working on it");
                }
            }
        },
        onError: (err: any) => {
            console.error(err);
            setIsSubmitting(false);
            setError('Failed to sign up. Please try again.');
        }
    });

    const togglePasswordVisibility = (field: string) => () => {
        if (field === 'password') setStatusPassword(prev => !prev);
    };

    const handleSignUp: SubmitHandler<SignUpDataForm> = async (data) => {
        if (passwordStrength.score < 3) {
            setError('Password needs to be stronger');
            return;
        }

        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!data.termsAccepted) {
            setError('You need to accept the terms to create an account');
            return;
        }

        try {
            setIsSubmitting(true);

            const recaptchaToken = await recaptchaRef.current?.executeAsync();
            recaptchaRef.current?.reset();
            if (!recaptchaToken) {
                setError('Security verification failed. Please try again.');
                return;
            }

            if (selectedFile) data.profilePicture = selectedFile;

            if (!errors.email && !errors.name && !errors.password) {
                mutate({
                    ...data,
                    recaptchaToken
                });
            }
        } catch (error) {
            setError('Failed to create account. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden pt-24 z-20">
            <BackgroundEffects />

            <div className="w-full max-w-md p-4 relative">
                <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-800 p-8 space-y-6">
                    <SignUpTitle />

                    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-6">
                        <ProfilePictureUpload
                            preview={preview}
                            fileInputRef={fileInputRef}
                            register={register}
                            handleImageChange={handleImageChangeWrapper}
                        />

                        <FormField
                            label="Full Name"
                            name="name"
                            register={register}
                            errors={errors}
                            placeholder="Your full name"
                        />

                        <FormField
                            label="Email"
                            name="email"
                            register={register}
                            errors={errors}
                            placeholder="your@email.com"
                            validation={{
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email"
                                }
                            }}
                        />

                        <PasswordInput
                            label="Password"
                            name="password"
                            register={register}
                            showPassword={showPassword}
                            toggleVisibility={togglePasswordVisibility('password')}
                            error={errors.password?.message}
                            validation={{ required: 'Password is required' }}
                        />

                        <PasswordStrengthIndicator
                            password={password}
                            passwordStrength={passwordStrength}
                        />

                        <PasswordInput
                            label="Confirm Password"
                            name="confirmPassword"
                            register={register}
                            showPassword={showPassword}
                            toggleVisibility={togglePasswordVisibility('password')}
                            error={errors.confirmPassword?.message}
                            validation={{
                                required: 'Please confirm your password',
                                validate: (value: string) => value === password || "Passwords do not match"
                            }}
                        />

                        <TermsAndConditions
                            isTermsOpen={isTermsOpen}
                            setIsTermsOpen={setIsTermsOpen}
                            register={register}
                            error={errors.termsAccepted?.message}
                        />

                        <div className="relative">
                            <ReCaptchaField recaptchaRef={recaptchaRef} />
                            <SubmitButton isDisabled={isSubmitting || passwordStrength.score < 3} isPending={isSubmitting}>
                                Create Account
                            </SubmitButton>
                        </div>

                        <AlreadyHaveAccount />
                    </form>
                </div>
            </div>

            <div className="fixed bottom-4 right-4 space-y-2">
                {errorSignUp && <PopUpError message={errorSignUp} onClose={() => setError('')} />}
                {successSignUp && <PopUpSuccess message={successSignUp} onClose={() => setSuccess('')} />}
            </div>
        </div>
    );
}

const SignUpTitle = () => {
    return <>
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#00A3FF] bg-clip-text text-transparent">
                Create Account
            </h1>
        </div>
    </>;
};

const AlreadyHaveAccount = () => {
    return <>
        <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="text-[#8B5CF6] hover:text-[#00A3FF] transition-colors font-medium">
                Log In
            </Link>
        </p>
    </>;
};