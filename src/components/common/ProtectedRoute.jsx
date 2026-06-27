import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children, role }) {
  const { admin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <section className="pt-44 pb-28 text-center text-[#a6aec3]">
        Checking your session...
      </section>
    );
  }

  if (!admin) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (role && admin.role !== role && admin.role !== "superadmin") {
    return (
      <section className="pt-44 pb-28 text-center text-[#a6aec3]">
        You do not have permission to view this page.
      </section>
    );
  }

  return children;
}

export default ProtectedRoute;
