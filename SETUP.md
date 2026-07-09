# Project Structure

```
Final_Portfolio/
├── frontend/   React + Vite app (deploy to Vercel)
├── backend/    Express + MongoDB API (deploy to Render)
└── .github/workflows/ci.yml   Runs build/tests on every push & PR
```

## Local development

**Backend**
```bash
cd backend
cp .env.example .env   # fill in MONGODB_URI, SMTP creds, ADMIN_SECRET
npm install
npm run dev             # http://localhost:5000
```

**Frontend**
```bash
cd frontend
cp .env.example .env    # set VITE_API_URL=http://localhost:5000
npm install
npm run dev              # http://localhost:5173
```

## Deploying

### 1. MongoDB Atlas
- Create a free cluster at https://www.mongodb.com/cloud/atlas
- Create a DB user, whitelist `0.0.0.0/0` (or Render's IPs)
- Copy the connection string into `MONGODB_URI`

### 2. Backend → Render
- New Web Service → connect this repo → root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Add env vars from `backend/.env.example`
- Render auto-deploys on every push to `main`

### 3. Frontend → Vercel
- Import repo → root directory: `frontend`
- Framework preset: Vite
- Add env var `VITE_API_URL` = your Render backend URL
- Vercel auto-deploys on every push to `main`

## CI/CD

`.github/workflows/ci.yml` runs on every push/PR to `main`:
- Builds the frontend (`npm run build`)
- Runs backend tests (`npm test`)

This doesn't deploy anything itself — Vercel and Render handle deploys automatically on push. CI's job is to catch broken builds **before** they merge. Set up branch protection on `main` (Settings → Branches) to require the CI check to pass before merging, so nothing broken reaches production.

## API endpoints

| Method | Route | Auth | Description |
|---|---|---|---|
| GET | `/health` | none | health check |
| POST | `/api/contact` | none (rate-limited) | send a contact message |
| GET | `/api/projects` | none | list projects |
| POST | `/api/projects` | `X-Admin-Secret` header | create project |
| PUT | `/api/projects/:id` | `X-Admin-Secret` header | update project |
| DELETE | `/api/projects/:id` | `X-Admin-Secret` header | delete project |
