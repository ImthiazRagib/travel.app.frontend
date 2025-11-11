import React from 'react';


export default function OAuthButtons() {
const redirect = (provider: string) => {
// implement server-side redirect endpoints for OAuth
window.location.href = `/auth/${provider}`;
};


return (
<div className="flex gap-3 justify-center">
<button onClick={() => redirect('google')} className="px-3 py-2 border rounded">Google</button>
<button onClick={() => redirect('apple')} className="px-3 py-2 border rounded">Apple</button>
</div>
);
}