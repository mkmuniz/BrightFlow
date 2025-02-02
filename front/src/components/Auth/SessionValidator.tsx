'use client'

import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { validateToken } from '@/requests/user.requests';

export default function SessionValidator({ session }: any) {
    useEffect(() => {
        const validateSession = async () => {
            if (session?.accessToken) {
                const response = await validateToken();
                if (response.message === 'Invalid token') {
                    await signOut({
                        redirect: true,
                    });
                }
            }
        };

        validateSession();
    }, [session]);

    return null;
} 