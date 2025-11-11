export const apiFetch = async (path: string, opts: RequestInit = {}) => {
    const base = import.meta.env.VITE_API_BASE || 'https://api.example.com';
    const res = await fetch(base + path, {
        ...opts,
        credentials: 'include', // for httpOnly cookie refresh flow
        headers: {
            'Content-Type': 'application/json',
            ...(opts.headers || {}),
        },
    });


    if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || res.statusText);
    }
    return res.json();
};