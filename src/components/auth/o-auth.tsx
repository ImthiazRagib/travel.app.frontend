import React from 'react';
import OAuthButtons from './o-auth-buttons';


export default function SignIn() {
return (
<div className="max-w-md mx-auto">
<h2 className="text-2xl font-semibold mb-4">Sign in</h2>
<form className="space-y-3 bg-[color:var(--card)] p-4 rounded-lg shadow-sm">
<label className="block">
<span className="text-sm">Email</span>
<input className="w-full mt-1 p-2 rounded border" type="email" />
</label>
<label className="block">
<span className="text-sm">Password</span>
<input className="w-full mt-1 p-2 rounded border" type="password" />
</label>
<button className="w-full py-2 rounded bg-brand-500 text-white">Sign in</button>
</form>


<div className="my-4 text-center text-sm text-[color:var(--muted)]">or continue with</div>
<OAuthButtons />
</div>
);
}