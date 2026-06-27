import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const surface = "relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl";
const inputClass = "w-full min-h-[3.4rem] px-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] text-white placeholder-white/30 focus:outline-none focus:border-white/20";
const btn = "inline-flex justify-center items-center w-full px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.02] duration-300 disabled:opacity-60 disabled:hover:scale-100";

function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/portfolio-admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-36 pb-28 min-h-[70vh] flex items-center">
      <div className="max-w-md mx-auto px-5 w-full">
        <article className={surface + " p-8"}>
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase">
            Admin Access
          </p>
          <h1 className="mt-4 text-2xl md:text-3xl font-semibold">Sign in to the admin panel</h1>
          <p className="mt-2 text-[#a6aec3]">
            Manage portfolio projects, contact leads, enrollment leads, and admin users.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <label className="text-white/90 text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClass}
                placeholder="admin@semicolon.dev"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-white/90 text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={inputClass}
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-rose-300 text-sm">{error}</p>}

            <button type="submit" disabled={loading} className={btn}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default AdminLogin;
