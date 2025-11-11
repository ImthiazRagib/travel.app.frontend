import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";


export default function PrivateRoute({ children }: { children: React.ReactElement }) {
  const { user, loading } = useAuth();
  console.log(`🚀 ~ PrivateRoute ~ { user, loading }:`, { user, loading })
  

  if (loading) return <div className="flex justify-center p-8">Loading...</div>;

  return user ? children : <Navigate to="/signin" replace />;
}
