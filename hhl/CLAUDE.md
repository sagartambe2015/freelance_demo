# Heavy Haul Logistics Platform

## Project Overview
An asset-light heavy haul logistics platform for managing oversize/overweight (OS/OW) freight movements across Texas. The platform connects shippers, carriers, drivers, and escort providers.

## Repository Structure
```
freelance_demo/
├── README.md           # Project overview and architecture
├── PRD.md              # Product Requirements Document
├── CLAUDE.md           # This file - Claude Code instructions
├── frontend/           # React frontend (planned)
├── concert-tickets/    # Demo prototype (separate project)
└── .claude/            # Claude configuration
```

## Tech Stack (Planned)

### Backend
- Node.js with NestJS OR Python with FastAPI
- PostgreSQL database
- REST API (OpenAPI documented)
- JWT authentication with RBAC

### Frontend
- React with TypeScript
- Vite build tool
- Tailwind CSS
- React Router v6
- TanStack Query (React Query)

### Infrastructure
- AWS (ECS, RDS, S3)
- Terraform for IaC
- CI/CD pipelines

## Core Modules
1. **Shipper Portal** - Create loads, request quotes, track shipments, pay invoices
2. **Carrier Portal** - Manage loads, assign drivers/escorts, access compliance docs
3. **Driver PWA** - Mobile app for milestone updates, ePOD capture
4. **Admin Console** - System management, compliance rules, dashboards

## Development Guidelines
- Follow existing patterns in the codebase
- Use TypeScript strict mode
- Write unit tests for business logic
- Document API endpoints with OpenAPI
- Follow RBAC for all protected routes

## Commands
```bash
# Frontend (when initialized)
cd frontend && npm run dev

# Concert tickets demo
cd concert-tickets && npm install && npm start
```

## Key Files
- `PRD.md` - Detailed product requirements and user stories
- `README.md` - Architecture overview
