import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useEffect } from "react";



export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate()

  const handleMinimalLogin = () => {
    signIn({ id: "1", name: "Demo User", email: "demo@gozayan.com", provider: "minimal" });
    navigate('/')
  };

  const handleOAuthLogin = (provider: "google" | "github") => {
    signIn({
      id: "oauth-123",
      name: "OAuth User",
      email: "oauth@gozayan.com",
      provider,
    });
    navigate('/')
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate('/')
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <button onClick={handleMinimalLogin} className="border border-brand-500 rounded-md px-4 py-2 bg-brand-500 text-white hover:bg-brand-700">
        Minimal Sign In
      </button>
      <button onClick={() => handleOAuthLogin("google")} className="px-4 py-2 bg-red-500 text-white rounded-md">
        Sign in with Google
      </button>
      <button onClick={() => handleOAuthLogin("github")} className="px-4 py-2 bg-gray-800 text-white rounded-md">
        Sign in with GitHub
      </button>
    </div>
  );
}
