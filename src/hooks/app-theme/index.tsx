import { useEffect, useState } from 'react';


export default function useTheme() {
const [theme, setTheme] = useState<'light'|'dark'>(() => {
if (typeof window === 'undefined') return 'light';
return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
});


useEffect(() => {
document.documentElement.classList.toggle('dark', theme === 'dark');
}, [theme]);


return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) };
}