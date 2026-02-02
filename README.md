# Heavy Haul Logistics Platform (MVP)

An **asset-light heavy haul logistics platform** designed to manage oversize/overweight (OS/OW) freight movements across Texas.  
The platform streamlines shipper requests, carrier and escort coordination, permit compliance, real-time tracking, and invoicing through a modern **web + mobile** experience.

This repository contains the MVP implementation based on a pre-defined **architecture, OpenAPI specification, database schema, and workflow documentation**.

---

## 🚚 Problem Statement

Heavy haul logistics involves complex coordination across multiple stakeholders:
- Shippers
- Carriers
- Drivers
- Escort providers
- Permit authorities

Manual processes, fragmented systems, and compliance risks slow operations and increase costs.  
This platform centralizes the entire OS/OW workflow into a **single, compliant, scalable system**.

---

## 🎯 Goals (MVP)

- Digitize OS/OW load creation and quoting
- Automate carrier & escort coordination
- Ensure permit and compliance readiness
- Provide real-time milestone tracking
- Simplify invoicing and payments
- Deliver operational visibility through admin dashboards

---

## 🧱 System Architecture

### Backend
- **Framework:** Node.js (NestJS) _or_ Python (FastAPI)
- **Database:** PostgreSQL
- **API:** REST (OpenAPI documented)
- **Auth:** RBAC-based authentication & authorization
- **Payments:** Stripe
- **Notifications:** SendGrid (Email), Twilio (SMS)

### Frontend
- **Web:** React (Shipper, Carrier, Admin portals)
- **Mobile:** Driver PWA (Mobile Web App)

### Infrastructure
- **Cloud:** AWS
  - ECS (Containerized services)
  - RDS (PostgreSQL)
  - S3 (Documents & uploads)
  - IAM (Security & access control)
- **IaC:** Terraform
- **CI/CD:** Automated build & deploy pipelines

---

## 🧩 Core Modules

### 1. Shipper Portal
- Create and manage OS/OW loads
- Request and accept quotes
- Track load status in real time
- View and pay invoices

### 2. Carrier Portal
- Accept and manage assigned loads
- Assign drivers and escorts
- Access route and compliance packs
- Track delivery milestones

### 3. Driver PWA
- View assigned trips
- Milestone updates (pickup, checkpoints, delivery)
- Geofenced event triggers
- Photo uploads & electronic POD (ePOD)

### 4. Admin Console
- Load, permit, and user management
- Compliance rule configuration
- Reporting & audit logs
- KPI dashboards:
  - On-time delivery %
  - Loads by state
  - Revenue per load

---

## 📄 Document Generation

Automated generation of:
- Compliance packs
- Route packs
- Invoices
- Proof of Delivery (POD)

**Tech:** HTML → PDF pipelines with storage in S3

---

## 🔐 Security & Compliance

- Role-Based Access Control (RBAC)
- Secure API authentication
- Audit logging across all critical actions
- Encrypted data at rest and in transit
- Environment separation (Staging / Production)

---

## 🧪 Testing & Quality

- Unit tests for business logic
- Integration tests for APIs
- OpenAPI-driven contract validation
- Database migrations aligned with schema specs

---

## 🚀 Deployment

- Multi-environment AWS setup (Staging & Production)
- Containerized services deployed on ECS
- PostgreSQL on RDS
- Static assets & documents on S3
- Fully automated CI/CD pipeline

---

## 🗺️ Project Timeline (MVP)

- **Estimated Duration:** 4–6 months
- **Team:** Full-time developer or small dedicated team
- **Approach:** Milestone-based delivery with continuous demos

---

## 🧠 Ideal Experience

This project is best suited for developers/teams experienced in:
- Logistics, trucking, or freight platforms
- Marketplace or multi-role SaaS systems
- Compliance-heavy workflows
- Cloud-native AWS deployments

---

## 📌 Notes

This is **not a generic CRUD application**.  
The platform requires strong understanding of:
- Workflow orchestration
- Compliance logic
- Multi-stakeholder coordination
- Production-grade cloud systems

---

## 📬 Contact / Contribution

If you are contributing or evaluating this project:
- Review the provided OpenAPI specs
- Follow existing workflow documentation
- Ensure all changes align with compliance and audit requirements
