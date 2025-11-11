import { Link } from 'react-router-dom';
import useTheme from '../../hooks/app-theme';
import { useAuth } from '../../context/auth-context';


export default function Header() {
    const { theme, toggle } = useTheme();
    const { user, signOut } = useAuth();
    
// End of Selection
    return (
        <header className="bg-[color:var(--card)] border-b sticky top-0 z-30">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="font-semibold text-lg">Gozayan Travel</Link>
                <nav className="flex items-center gap-3">
                    {/* <Link to="/hotels" className="hidden sm:inline">Hotels</Link>
                    <Link to="/tours" className="hidden sm:inline">Tours</Link>
                    <Link to="/visa" className="hidden sm:inline">Visa</Link> */}
                    <Link to="/tracking" className="hidden sm:inline">Flight Track</Link>
                    {user ? (
                        <button onClick={signOut} className="btn btn-ghost">Sign out</button>
                    ) : (
                        <Link to="/signin" className="btn btn-ghost">Sign in</Link>
                    )}
                    <button aria-label="Toggle theme" onClick={toggle} className="ml-2 px-2 py-1 rounded">
                        {theme === 'dark' ? '🌙' : '☀️'}
                    </button>
                </nav>
            </div>
        </header>
    );
}