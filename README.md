# Yurjinia Frontend

[![Live Demo](https://img.shields.io/badge/Live_Demo-Live-brightgreen?style=for-the-badge)](https://yurjinia-frontend.vercel.app/)
[![Figma Design](https://img.shields.io/badge/Figma_Design-View-orange?style=for-the-badge&logo=figma)](https://www.figma.com/design/wc5bcipFEpNkGqZKeGnsHo/Yurjinia?node-id=0-1&p=f&t=kIaKFD86B1e4xpxr-0)

---

## Overview
A Jira-style project management frontend designed to integrate seamlessly with the [Yurjinia Java backend](https://github.com/Yurjinia/Yurjinia).

After reviewing the backend codebase, core UI components were mapped to reflect the backend entities and workflows. Wireframes went through several review cycles with **Samvel Aivazian** (backend engineer) to ensure frontend–backend alignment and define clear integration paths.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 |
| Routing | TanStack Router v1 (SPA) |
| Server State | TanStack Query v5 |
| Client State | Zustand (with localStorage persistence) |
| Auth | Clerk |
| Forms | React Hook Form + Zod |
| Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Features
- **Authentication** — Sign in / sign out via Clerk with user display in navbar
- **Project Dashboard** — Create, edit, and delete projects with a responsive card grid
- **Kanban Board** — Per-project board with To Do / In Progress / Done columns
- **Ticket Management** — Add tickets with title, priority, and assignee per column
- **Persistence** — Projects and tickets persist across sessions via localStorage
- **Design System** — Custom brand colour tokens, Montserrat typography, consistent component styling

---

## Project Structure

```
src/
├── components/        # UI components (Navbar, Dashboard, BoardView, etc.)
│   └── ui/            # shadcn/ui primitives (Dialog, Button, Input, etc.)
├── routes/            # TanStack Router file-based routes
├── store/             # Zustand store (projectStore)
├── types/             # TypeScript interfaces
├── lib/               # Utilities, API client, Zod schemas
└── styles.css         # Tailwind v4 design tokens
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Add environment variables
cp .env.example .env.local
# Add your VITE_CLERK_PUBLISHABLE_KEY

# Run dev server
npm run dev
```

---

## Roadmap
- [ ] API integration with Yurjinia Java backend
- [ ] Drag and drop between Kanban columns
- [ ] Ticket detail view and editing
- [ ] Member management per project
- [ ] Settings page