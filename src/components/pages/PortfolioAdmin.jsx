import { useEffect, useState } from "react";
import SEO from '../common/SEO'
import { Link } from "react-router-dom";
import { api } from "../../lib/api";
import { useAuth } from "../../context/AuthContext";

const eyebrow = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[#dce7ff] text-[0.84rem] tracking-[0.12em] uppercase";
const surface = "relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-[rgba(15,18,27,0.94)] to-[rgba(8,10,15,0.98)] shadow-xl";
const inputClass = "w-full min-h-[3rem] px-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] text-white placeholder-white/30 focus:outline-none focus:border-white/20";
const btn = "inline-block px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0055ff] to-[#3a7cff] shadow-[0_18px_38px_rgba(0,85,255,0.28)] hover:scale-[1.03] duration-300 disabled:opacity-60 disabled:hover:scale-100";
const btnGhost = "inline-block px-6 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 duration-300 font-semibold disabled:opacity-60";

const TABS = [
  { key: "projects", label: "Portfolio Projects" },
  { key: "contacts", label: "Contact Leads" },
  { key: "enrollments", label: "Enrollment Leads" },
  { key: "admins", label: "Admin Users" }
];

const emptyForm = {
  id: "", title: "", client: "", category: "", year: "2025",
  summary: "", description: "", tags: "", outcomes: "",
  image: "", ctaLabel: "Discuss Similar Project", ctaHref: "/contact", featured: false
};

function PortfolioAdmin() {
  const { admin, logout } = useAuth();
  const [tab, setTab] = useState("projects");

  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [admins, setAdmins] = useState([]);

  const [form, setForm] = useState(emptyForm);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [adminForm, setAdminForm] = useState({ name: "", email: "", password: "", role: "admin" });

  const isSuper = admin?.role === "superadmin";

  const flash = (msg) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(""), 3000);
  };

  const refreshProjects = () => api.listProjects().then((d) => setProjects(d.projects));
  const refreshContacts = () => api.listContacts().then((d) => setContacts(d.leads)).catch(() => {});
  const refreshEnrollments = () => api.listEnrollments().then((d) => setEnrollments(d.leads)).catch(() => {});
  const refreshAdmins = () => isSuper && api.listAdmins().then((d) => setAdmins(d.admins)).catch(() => {});

  useEffect(() => {
    refreshProjects();
    refreshContacts();
    refreshEnrollments();
    refreshAdmins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- Portfolio projects ----------
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const payload = { ...form };
      if (form.id) {
        await api.updateProject(form.id, payload);
        flash("Project updated.");
      } else {
        await api.createProject(payload);
        flash("Project created.");
      }
      setForm(emptyForm);
      await refreshProjects();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const editProject = (p) => {
    setForm({
      id: p._id,
      title: p.title || "",
      client: p.client || "",
      category: p.category || "",
      year: p.year || "2025",
      summary: p.summary || "",
      description: p.description || "",
      tags: (p.tags || []).join(", "),
      outcomes: (p.outcomes || []).join("\n"),
      image: p.image || "",
      ctaLabel: p.ctaLabel || "Discuss Similar Project",
      ctaHref: p.ctaHref || "/contact",
      featured: Boolean(p.featured)
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await api.deleteProject(id);
    await refreshProjects();
    flash("Project deleted.");
  };

  const featureProject = async (id) => {
    await api.featureProject(id);
    await refreshProjects();
    flash("Featured project updated.");
  };

  // ---------- Leads ----------
  const setContactStatus = async (id, status) => {
    await api.updateContact(id, { status });
    await refreshContacts();
  };
  const deleteContactLead = async (id) => {
    if (!window.confirm("Delete this contact lead?")) return;
    await api.deleteContact(id);
    await refreshContacts();
  };

  const setEnrollmentStatus = async (id, status) => {
    await api.updateEnrollment(id, { status });
    await refreshEnrollments();
  };
  const deleteEnrollmentLead = async (id) => {
    if (!window.confirm("Delete this enrollment lead?")) return;
    await api.deleteEnrollment(id);
    await refreshEnrollments();
  };

  // ---------- Admin users ----------
  const handleAdminFormChange = (e) => {
    const { name, value } = e.target;
    setAdminForm((f) => ({ ...f, [name]: value }));
  };

  const createAdmin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await api.createAdmin(adminForm);
      setAdminForm({ name: "", email: "", password: "", role: "admin" });
      await refreshAdmins();
      flash("Admin user created.");
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleAdminActive = async (a) => {
    try {
      await api.updateAdmin(a.id, { active: !a.active });
      await refreshAdmins();
    } catch (err) {
      setError(err.message);
    }
  };

  const removeAdmin = async (a) => {
    if (!window.confirm(`Delete admin "${a.name}"?`)) return;
    try {
      await api.deleteAdmin(a.id);
      await refreshAdmins();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <SEO title='Admin Panel' noIndex={true} />

      <section className="pt-36 pb-10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className={eyebrow}>
                <span>Admin Panel</span>
              </p>
              <h1 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
                Welcome back, {admin?.name || "Admin"}
              </h1>
              <p className="mt-2 text-[#a6aec3]">
                Signed in as {admin?.email} · Role: {admin?.role}
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/portfolio" className={btnGhost}>View Portfolio</Link>
              <button onClick={logout} className={btnGhost}>Log Out</button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {TABS.filter((t) => t.key !== "admins" || isSuper).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-2.5 rounded-xl font-semibold duration-300 ${
                  tab === t.key ? "bg-gradient-to-r from-[#0055ff] to-[#3a7cff] text-white" : "border border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {feedback && <p className="mt-4 text-[#8fb3ff]">{feedback}</p>}
          {error && <p className="mt-4 text-rose-300">{error}</p>}
        </div>
      </section>

      {tab === "projects" && (
        <section className="py-6 pb-28">
          <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
            <article className={surface + " p-7"}>
              <p className={eyebrow}>{form.id ? "Editing Project" : "Project Form"}</p>
              <h2 className="mt-4 text-2xl font-semibold">{form.id ? "Update Portfolio Case" : "Add a Portfolio Case"}</h2>

              <form onSubmit={handleProjectSubmit} className="mt-6 grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="grid gap-2">
                    <label className="text-white/90">Project Title</label>
                    <input name="title" value={form.title} onChange={handleFormChange} required className={inputClass} />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-white/90">Client / Brand</label>
                    <input name="client" value={form.client} onChange={handleFormChange} className={inputClass} />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-white/90">Category</label>
                    <input name="category" value={form.category} onChange={handleFormChange} required className={inputClass} />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-white/90">Year</label>
                    <input name="year" value={form.year} onChange={handleFormChange} className={inputClass} />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <label className="text-white/90">Short Summary</label>
                    <textarea name="summary" value={form.summary} onChange={handleFormChange} required rows={2} className={inputClass + " resize-vertical"} />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <label className="text-white/90">Featured Description</label>
                    <textarea name="description" value={form.description} onChange={handleFormChange} required rows={3} className={inputClass + " resize-vertical"} />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <label className="text-white/90">Tags</label>
                    <input name="tags" value={form.tags} onChange={handleFormChange} placeholder="Telemedicine, Appointments, UX" className={inputClass} />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <label className="text-white/90">Outcomes (one per line)</label>
                    <textarea name="outcomes" value={form.outcomes} onChange={handleFormChange} rows={3} className={inputClass + " resize-vertical"} />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <label className="text-white/90">Image URL</label>
                    <input name="image" value={form.image} onChange={handleFormChange} placeholder="/assets/media/my-project.png" className={inputClass} />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-white/90">Button Label</label>
                    <input name="ctaLabel" value={form.ctaLabel} onChange={handleFormChange} className={inputClass} />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-white/90">Button Link</label>
                    <input name="ctaHref" value={form.ctaHref} onChange={handleFormChange} className={inputClass} />
                  </div>
                </div>

                <label className="flex items-center gap-3 text-white/80">
                  <input type="checkbox" name="featured" checked={form.featured} onChange={handleFormChange} />
                  Make this the featured project on the portfolio page
                </label>

                <div className="flex flex-wrap gap-4">
                  <button type="submit" disabled={loading} className={btn}>
                    {loading ? "Saving..." : form.id ? "Update Project" : "Save Project"}
                  </button>
                  <button type="button" onClick={() => setForm(emptyForm)} className={btnGhost}>Clear Form</button>
                </div>
              </form>
            </article>

            <aside className={surface + " p-7"}>
              <p className={eyebrow}>Database</p>
              <h2 className="mt-4 text-xl font-semibold">Portfolio Controls</h2>
              <p className="mt-2 text-[#a6aec3]">
                Projects are stored in MongoDB and served live to the public portfolio page.
              </p>
              <div className="mt-5 grid gap-2">
                <div className="text-sm text-[#a6aec3]">Total Projects: <strong className="text-white">{projects.length}</strong></div>
                <div className="text-sm text-[#a6aec3]">Featured: <strong className="text-white">{projects.find((p) => p.featured)?.title || "None"}</strong></div>
              </div>
            </aside>
          </div>

          <div className="max-w-7xl mx-auto px-5 mt-10">
            <p className={eyebrow}>Saved Projects</p>
            <h2 className="mt-4 text-2xl font-semibold">Current Portfolio Inventory</h2>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article key={p._id} className={surface + " p-6"}>
                  <div className="flex items-center justify-between">
                    <strong className="text-white">{p.title}</strong>
                    {p.featured && (
                      <span className="text-xs uppercase tracking-wider text-[#8fb3ff] border border-white/10 rounded-full px-3 py-1">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-[#8fb3ff]">{p.category} · {p.year}</p>
                  <p className="mt-3 text-[#a6aec3] leading-relaxed">{p.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <button onClick={() => editProject(p)} className="text-[#8fb3ff] hover:text-white">Edit</button>
                    {!p.featured && (
                      <button onClick={() => featureProject(p._id)} className="text-[#8fb3ff] hover:text-white">Set Featured</button>
                    )}
                    <button onClick={() => deleteProject(p._id)} className="text-rose-300 hover:text-rose-200">Delete</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "contacts" && (
        <section className="py-6 pb-28">
          <div className="max-w-7xl mx-auto px-5">
            <p className={eyebrow}>Leads</p>
            <h2 className="mt-4 text-2xl font-semibold">Contact Form Submissions ({contacts.length})</h2>

            <div className="mt-6 grid gap-4">
              {contacts.length === 0 && <p className="text-[#a6aec3]">No contact leads yet.</p>}
              {contacts.map((c) => (
                <article key={c._id} className={surface + " p-6 grid md:grid-cols-[1fr_auto] gap-4"}>
                  <div>
                    <div className="flex items-center gap-3">
                      <strong className="text-white">{c.name}</strong>
                      <span className="text-xs uppercase tracking-wider text-[#8fb3ff] border border-white/10 rounded-full px-3 py-1">{c.status}</span>
                    </div>
                    <p className="mt-1 text-sm text-[#8fb3ff]">{c.email} {c.phone ? `· ${c.phone}` : ""} {c.state ? `· ${c.state}` : ""}</p>
                    {c.subject && <p className="mt-1 text-sm text-[#a6aec3]">Subject: {c.subject}</p>}
                    <p className="mt-2 text-[#a6aec3] leading-relaxed">{c.message}</p>
                    <p className="mt-2 text-xs text-white/40">{new Date(c.createdAt).toLocaleString()}</p>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <select value={c.status} onChange={(e) => setContactStatus(c._id, e.target.value)} className={inputClass + " min-h-[2.6rem] text-sm"}>
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                    <button onClick={() => deleteContactLead(c._id)} className="text-rose-300 hover:text-rose-200 text-sm">Delete</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "enrollments" && (
        <section className="py-6 pb-28">
          <div className="max-w-7xl mx-auto px-5">
            <p className={eyebrow}>Leads</p>
            <h2 className="mt-4 text-2xl font-semibold">Enrollment Applications ({enrollments.length})</h2>

            <div className="mt-6 grid gap-4">
              {enrollments.length === 0 && <p className="text-[#a6aec3]">No enrollment leads yet.</p>}
              {enrollments.map((en) => (
                <article key={en._id} className={surface + " p-6 grid md:grid-cols-[1fr_auto] gap-4"}>
                  <div>
                    <div className="flex items-center gap-3">
                      <strong className="text-white">{en.name}</strong>
                      <span className="text-xs uppercase tracking-wider text-[#8fb3ff] border border-white/10 rounded-full px-3 py-1">{en.status}</span>
                    </div>
                    <p className="mt-1 text-sm text-[#8fb3ff]">{en.email} {en.phone ? `· ${en.phone}` : ""}</p>
                    <p className="mt-1 text-sm text-[#a6aec3]">Track: {en.track} {en.background ? `· ${en.background}` : ""}</p>
                    {en.message && <p className="mt-2 text-[#a6aec3] leading-relaxed">{en.message}</p>}
                    <p className="mt-2 text-xs text-white/40">{new Date(en.createdAt).toLocaleString()}</p>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <select value={en.status} onChange={(e) => setEnrollmentStatus(en._id, e.target.value)} className={inputClass + " min-h-[2.6rem] text-sm"}>
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="enrolled">Enrolled</option>
                      <option value="closed">Closed</option>
                    </select>
                    <button onClick={() => deleteEnrollmentLead(en._id)} className="text-rose-300 hover:text-rose-200 text-sm">Delete</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === "admins" && isSuper && (
        <section className="py-6 pb-28">
          <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
            <article className={surface + " p-7"}>
              <p className={eyebrow}>Superadmin Only</p>
              <h2 className="mt-4 text-2xl font-semibold">Add Admin User</h2>
              <form onSubmit={createAdmin} className="mt-6 grid gap-4">
                <div className="grid gap-2">
                  <label className="text-white/90">Name</label>
                  <input name="name" value={adminForm.name} onChange={handleAdminFormChange} required className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label className="text-white/90">Email</label>
                  <input type="email" name="email" value={adminForm.email} onChange={handleAdminFormChange} required className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label className="text-white/90">Password</label>
                  <input type="password" name="password" value={adminForm.password} onChange={handleAdminFormChange} required minLength={8} className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label className="text-white/90">Role</label>
                  <select name="role" value={adminForm.role} onChange={handleAdminFormChange} className={inputClass}>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                  </select>
                </div>
                <button type="submit" className={btn}>Create Admin</button>
              </form>
            </article>

            <article className={surface + " p-7"}>
              <p className={eyebrow}>Team</p>
              <h2 className="mt-4 text-2xl font-semibold">Admin Users ({admins.length})</h2>
              <div className="mt-5 grid gap-4">
                {admins.map((a) => (
                  <div key={a.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <strong className="text-white">{a.name}</strong>
                      <p className="text-sm text-[#8fb3ff]">{a.email} · {a.role} {!a.active && "· inactive"}</p>
                    </div>
                    <div className="flex gap-3 text-sm">
                      <button onClick={() => toggleAdminActive(a)} className="text-[#8fb3ff] hover:text-white">
                        {a.active ? "Deactivate" : "Activate"}
                      </button>
                      <button onClick={() => removeAdmin(a)} className="text-rose-300 hover:text-rose-200">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      )}
    </>
  );
}

export default PortfolioAdmin;
