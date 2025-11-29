import { Link } from 'react-router-dom';
import useTheme from '../../hooks/app-theme';
import { useState } from 'react';
import { Moon, Sun, User } from 'lucide-react';
import { useAppSelector } from '../../redux/store';


export default function Header() {
    const { theme, toggle } = useTheme();
    console.log(`🚀 ~ Header ~ { theme, toggle }:`, { theme, toggle })
    const { user, status } = useAppSelector((s) => s.auth)
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // End of Selection
    return (
        <header className="bg-blue-800 dark:bg-gray-900 border-b border-blue-700 dark:border-gray-700 sticky top-0 z-30">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="font-semibold text-lg text-white">Gozayan Travel</Link>
                <nav className="flex items-center gap-3">
                    <Link to="/hotels" className="hidden sm:inline text-white">Hotels</Link>
                    {/* <Link to="/tours" className="hidden sm:inline text-white">Tours</Link>
                    <Link to="/visa" className="hidden sm:inline text-white">Visa</Link> */}
                    <Link to="/tracking" className="hidden sm:inline text-white">Flight Track</Link>
                    {user ? (
                        <div className="relative">
                            <button
                                aria-label="User menu"
                                onClick={() => setUserMenuOpen((prev) => !prev)}
                                className="ml-2 px-2 py-1 rounded border border-white"
                            >
                                <div className="flex items-center gap-2">
                                    <User size={18} className="text-white" />
                                    <span className="text-white">{user.name}</span>
                                </div>
                            </button>
                            {userMenuOpen && (
                                <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg p-1">
                                    <li>
                                        <Link
                                            to="/profile"
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            onClick={() => setUserMenuOpen(false)}
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/bookings"
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            onClick={() => setUserMenuOpen(false)}
                                        >
                                            My Bookings
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                // signOut();
                                                setUserMenuOpen(false);
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                        >
                                            Sign out
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <Link to="/signin" className="btn btn-ghost text-white">Sign in</Link>
                    )}

                    <button
                        aria-label="Toggle theme"
                        onClick={toggle}
                        className="ml-2 p-2 rounded border border-white dark:border-gray-400"
                    >
                        {theme === 'dark' ? (
                            <Sun size={16} className="text-white" />
                        ) : (
                            <Moon size={16} className="text-white" />
                        )}
                    </button>

                </nav>
            </div>
        </header>
    );
}