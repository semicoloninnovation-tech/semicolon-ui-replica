const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function getToken() {
  return localStorage.getItem("semicolon.admin.token");
}

export function setToken(token) {
  if (token) localStorage.setItem("semicolon.admin.token", token);
  else localStorage.removeItem("semicolon.admin.token");
}

async function request(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const message = data?.error || `Request failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    throw err;
  }

  return data;
}

export const api = {
  // Auth
  login: (email, password) => request("/auth/login", { method: "POST", body: { email, password } }),
  me: () => request("/auth/me", { auth: true }),
  changePassword: (currentPassword, newPassword) =>
    request("/auth/change-password", { method: "POST", body: { currentPassword, newPassword }, auth: true }),

  // Admin user management
  listAdmins: () => request("/admins", { auth: true }),
  createAdmin: (payload) => request("/admins", { method: "POST", body: payload, auth: true }),
  updateAdmin: (id, payload) => request(`/admins/${id}`, { method: "PATCH", body: payload, auth: true }),
  deleteAdmin: (id) => request(`/admins/${id}`, { method: "DELETE", auth: true }),

  // Portfolio projects
  listProjects: () => request("/projects"),
  createProject: (payload) => request("/projects", { method: "POST", body: payload, auth: true }),
  updateProject: (id, payload) => request(`/projects/${id}`, { method: "PUT", body: payload, auth: true }),
  featureProject: (id) => request(`/projects/${id}/feature`, { method: "PATCH", auth: true }),
  deleteProject: (id) => request(`/projects/${id}`, { method: "DELETE", auth: true }),

  // Contact leads
  submitContact: (payload) => request("/contact", { method: "POST", body: payload }),
  listContacts: () => request("/contact", { auth: true }),
  updateContact: (id, payload) => request(`/contact/${id}`, { method: "PATCH", body: payload, auth: true }),
  deleteContact: (id) => request(`/contact/${id}`, { method: "DELETE", auth: true }),

  // Enrollment leads
  submitEnrollment: (payload) => request("/enrollment", { method: "POST", body: payload }),
  listEnrollments: () => request("/enrollment", { auth: true }),
  updateEnrollment: (id, payload) => request(`/enrollment/${id}`, { method: "PATCH", body: payload, auth: true }),
  deleteEnrollment: (id) => request(`/enrollment/${id}`, { method: "DELETE", auth: true }),

  // Dashboard
  getDashboard: () => request("/dashboard", { auth: true })
};
