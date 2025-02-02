import { getSession } from 'next-auth/react';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API;

const getHeaders = async () => {
    const session: any = await getSession();
    return {
        'Content-Type': 'application/json',
        ...(session?.accessToken && { 'Authorization': `Bearer ${session.accessToken}` })
    };
};

export async function get(url: string) {
    try {
        const headers = await getHeaders();
        const res = await fetch(baseUrl + url, {
            method: 'GET',
            headers,
        });

        return res.json();
    } catch (err) {
        console.error(err);
    }
}

export async function post(url: string, body: any) {
    try {
        const headers = await getHeaders();
        const res = await fetch(baseUrl + url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return {
            data: res.json(),
            status: res.status
        };
    } catch (err) {
        console.error(err);
    }
}

export async function upload(url: string, body: any) {
    try {
        const res = await fetch(baseUrl + url, {
            method: 'POST',
            body
        });

        return {
            data: res.json(),
            status: res.status
        };
    } catch (err: any) {
        console.error(err.message);
    }
}

export async function del(url: string) {
    try {
        const headers = await getHeaders();
        const res = await fetch(baseUrl + url, {
            method: 'DELETE',
            headers,
        });

        return {
            data: res.json(),
            status: res.status
        };
    } catch (err) {
        console.error(err);
    }
}

export async function patch(url: string, body: any) {
    try {
        const headers = await getHeaders();
        const res = await fetch(baseUrl + url, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(body)
        });

        return {
            data: res.json(),
            status: res.status
        };
    } catch (err) {
        console.error(err);
    }
}