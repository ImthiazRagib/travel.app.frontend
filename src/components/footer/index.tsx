import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[color:var(--card)] border-t mt-8">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-[color:var(--muted)]">
                <p className="mb-3 sm:mb-0">© {new Date().getFullYear()} Gozayan Travel. All rights reserved.</p>
                <nav className="flex gap-4">
                    <Link to="/privacy" className="hover:text-brand-500">Privacy</Link>
                    <Link to="/terms" className="hover:text-brand-500">Terms</Link>
                    <Link to="/contact" className="hover:text-brand-500">Contact</Link>
                </nav>
            </div>
        </footer>
    );
}