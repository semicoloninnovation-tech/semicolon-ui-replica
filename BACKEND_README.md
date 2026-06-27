# Semicolon — Backend + Admin Panel

This adds a real backend (Node/Express + MongoDB) to the site, replacing the old
localStorage-only portfolio admin, and wires the Contact and Enrollment forms to it.

## What was added

- **`/server`** — Express API with MongoDB (via Mongoose)
  - `Admin` — admin users with roles (`superadmin`, `admin`), JWT login
  - `Project` — portfolio case studies (CRUD)
  - `ContactLead` — contact form submissions
  - `EnrollmentLead` — enrollment form submissions
- **Frontend**
  - `src/lib/api.js` — API client
  - `src/context/AuthContext.jsx` — admin session state
  - `src/components/pages/AdminLogin.jsx` — `/admin/login`
  - `src/components/common/ProtectedRoute.jsx` — guards `/portfolio-admin`
  - `src/components/pages/PortfolioAdmin.jsx` — full dashboard: Portfolio Projects,
    Contact Leads, Enrollment Leads, Admin Users (superadmin only)
  - `Contact.jsx` / `Enrollment.jsx` — now POST to the real API instead of just
    setting local state
  - `PortfolioGrid.jsx` — now loads live projects from the API (falls back to the
    original static images if the API is unreachable)

## 1. Set up MongoDB

Use a local MongoDB or a free MongoDB Atlas cluster. You just need a connection string.

## 2. Backend setup

```bash
cd server
cp .env.example .env
# edit .env: set MONGODB_URI, JWT_SECRET, and the SEED_ADMIN_* values
npm install
npm run seed     # creates the first superadmin + sample projects
npm run dev      # starts on http://localhost:5000
```

The seed script prints the admin email/password it created — log in and
change the password right away from the admin panel.

## 3. Frontend setup

```bash
cp .env.example .env
# edit .env if your backend isn't on http://localhost:5000
npm install
npm run dev
```

Visit `/admin/login` to sign in, then you're redirected to `/portfolio-admin`.

## Admin panel capabilities

- **Portfolio Projects** — create/edit/delete/feature projects; changes show up
  immediately on the public `/portfolio` page.
- **Contact Leads** — view every contact form submission, update status
  (new/contacted/closed), delete.
- **Enrollment Leads** — view every enrollment application, update status
  (new/contacted/enrolled/closed), delete.
- **Admin Users** (superadmin only) — create new admin accounts, promote/demote
  roles, deactivate or delete accounts.

## Notes

- Public endpoints (`GET /api/projects`, `POST /api/contact`, `POST /api/enrollment`)
  require no auth. Everything else requires a valid admin JWT (`Authorization: Bearer <token>`).
- Login and form-submission endpoints are rate-limited to reduce abuse.
- `npm install` inside `server/` and at the project root pulls fresh, platform-correct
  native binaries — if you copy this project between machines, re-run `npm install`
  in both places rather than copying `node_modules`.
