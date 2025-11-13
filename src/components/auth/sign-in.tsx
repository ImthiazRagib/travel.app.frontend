import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useEffect, useState } from "react";

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOAuthLogin = (provider: "google" | "github") => {
    signIn({
      id: "oauth-123",
      name: "OAuth User",
      email: "oauth@gozayan.com",
      provider,
    });
    navigate('/');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Minimal login functionality
    signIn({
      id: "1",
      name: "Demo User",
      email,
      provider: "minimal",
    });
    navigate('/');
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate('/');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="shadow-lg rounded-xl p-8 w-full max-w-md bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700 font-medium dark:text-gray-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-700 font-medium dark:text-gray-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <div className="relative flex items-center my-4">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="mx-4 text-gray-500 dark:text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleOAuthLogin("google")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors dark:bg-red-600 dark:hover:bg-red-700"
          >
            Google
          </button>
          <button
            onClick={() => handleOAuthLogin("github")}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors dark:bg-gray-700 dark:hover:bg-gray-800"
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
