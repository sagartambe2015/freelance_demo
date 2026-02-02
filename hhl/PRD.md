# Product Requirements Document (PRD)
## Heavy Haul Logistics Platform - MVP

**Version:** 1.0
**Last Updated:** February 2026
**Status:** Draft

---

## 1. Executive Summary

The Heavy Haul Logistics Platform is an asset-light logistics solution designed to manage oversize/overweight (OS/OW) freight movements across Texas. The platform centralizes shipper requests, carrier and escort coordination, permit compliance, real-time tracking, and invoicing into a single, compliant, scalable system.

### 1.1 Vision
Eliminate manual processes and fragmented systems in heavy haul logistics by providing a unified digital platform that connects all stakeholders and ensures compliance.

### 1.2 Target Users
| Role | Description |
|------|-------------|
| **Shipper** | Companies needing to transport OS/OW freight |
| **Carrier** | Trucking companies with heavy haul capabilities |
| **Driver** | Truck drivers executing the hauls |
| **Escort Provider** | Pilot car services for OS/OW movements |
| **Admin** | Platform operators managing the system |

---

## 2. Problem Statement

Heavy haul logistics involves complex coordination across multiple stakeholders with significant challenges:

- **Fragmented Communication:** Shippers, carriers, drivers, and escorts use disconnected systems
- **Manual Processes:** Quote requests, permit applications, and milestone tracking done via phone/email
- **Compliance Risks:** Missing or expired permits can result in fines and delays
- **Lack of Visibility:** No real-time tracking of load status and milestones
- **Invoicing Delays:** Manual invoice generation and payment reconciliation

---

## 3. Goals & Success Metrics

### 3.1 MVP Goals
1. Digitize OS/OW load creation and quoting
2. Automate carrier & escort coordination
3. Ensure permit and compliance readiness
4. Provide real-time milestone tracking
5. Simplify invoicing and payments
6. Deliver operational visibility through admin dashboards

### 3.2 Success Metrics (KPIs)
| Metric | Target |
|--------|--------|
| On-time Delivery Rate | > 90% |
| Quote Response Time | < 2 hours |
| Permit Compliance Rate | 100% |
| Invoice Generation Time | < 24 hours post-delivery |
| User Adoption Rate | > 80% of onboarded users active |

---

## 4. User Stories & Requirements

### 4.1 Shipper Portal

#### User Stories
| ID | Story | Priority |
|----|-------|----------|
| S-01 | As a shipper, I want to create a new OS/OW load request so that I can get quotes from carriers | P0 |
| S-02 | As a shipper, I want to provide load dimensions, weight, origin, and destination so carriers can provide accurate quotes | P0 |
| S-03 | As a shipper, I want to receive and compare quotes from multiple carriers | P0 |
| S-04 | As a shipper, I want to accept a quote and confirm the booking | P0 |
| S-05 | As a shipper, I want to track my load status in real-time | P0 |
| S-06 | As a shipper, I want to view and pay invoices online | P1 |
| S-07 | As a shipper, I want to view my load history and download PODs | P1 |
| S-08 | As a shipper, I want to receive notifications for load status changes | P1 |

#### Functional Requirements
- **Load Creation Form**
  - Cargo description and type
  - Dimensions (length, width, height)
  - Weight (gross and axle weights)
  - Origin address with pickup date/time
  - Destination address with delivery window
  - Special handling requirements
  - Document uploads (cargo photos, specs)

- **Quote Management**
  - View received quotes with breakdown
  - Compare quotes side-by-side
  - Accept/reject quotes
  - Request quote revisions

- **Load Tracking**
  - Real-time map view
  - Milestone timeline
  - ETA updates
  - Photo/document access

- **Invoicing**
  - View invoice details
  - Download PDF invoices
  - Online payment via Stripe
  - Payment history

### 4.2 Carrier Portal

#### User Stories
| ID | Story | Priority |
|----|-------|----------|
| C-01 | As a carrier, I want to view available load requests matching my capabilities | P0 |
| C-02 | As a carrier, I want to submit quotes for loads I can service | P0 |
| C-03 | As a carrier, I want to manage my assigned loads | P0 |
| C-04 | As a carrier, I want to assign drivers and escorts to loads | P0 |
| C-05 | As a carrier, I want to access route and compliance packs | P0 |
| C-06 | As a carrier, I want to track delivery milestones | P1 |
| C-07 | As a carrier, I want to manage my fleet and driver roster | P1 |
| C-08 | As a carrier, I want to view earnings and payment status | P1 |

#### Functional Requirements
- **Load Board**
  - Filter by origin, destination, dates, dimensions
  - View load details
  - Submit/modify quotes

- **Load Management**
  - View assigned loads
  - Assign driver from roster
  - Assign escort provider
  - Upload required documents

- **Compliance Pack Access**
  - Download route pack
  - View permit documents
  - Access compliance checklist

- **Fleet Management**
  - Add/edit trucks and trailers
  - Manage driver roster
  - Track equipment certifications

### 4.3 Driver PWA (Progressive Web App)

#### User Stories
| ID | Story | Priority |
|----|-------|----------|
| D-01 | As a driver, I want to view my assigned trips on my mobile device | P0 |
| D-02 | As a driver, I want to update milestones (pickup, checkpoints, delivery) | P0 |
| D-03 | As a driver, I want to upload photos at each milestone | P0 |
| D-04 | As a driver, I want to capture electronic Proof of Delivery (ePOD) | P0 |
| D-05 | As a driver, I want automatic milestone triggers based on my location | P1 |
| D-06 | As a driver, I want to access route and compliance documents offline | P1 |
| D-07 | As a driver, I want to contact dispatch/support easily | P2 |

#### Functional Requirements
- **Trip View**
  - Current trip details
  - Route with navigation link
  - Pickup and delivery addresses
  - Contact information

- **Milestone Updates**
  - One-tap milestone buttons
  - Photo capture and upload
  - Notes/comments field
  - Timestamp recording

- **ePOD Capture**
  - Signature capture
  - Photo of delivered cargo
  - Recipient name entry
  - Condition notes

- **Geofencing**
  - Auto-detect arrival at locations
  - Prompt for milestone update
  - Background location tracking (opt-in)

### 4.4 Admin Console

#### User Stories
| ID | Story | Priority |
|----|-------|----------|
| A-01 | As an admin, I want to manage all loads in the system | P0 |
| A-02 | As an admin, I want to manage user accounts and permissions | P0 |
| A-03 | As an admin, I want to configure compliance rules | P0 |
| A-04 | As an admin, I want to view operational dashboards and KPIs | P0 |
| A-05 | As an admin, I want to manage permits and compliance documents | P1 |
| A-06 | As an admin, I want to view audit logs for all system actions | P1 |
| A-07 | As an admin, I want to generate operational reports | P1 |
| A-08 | As an admin, I want to manage billing and invoicing | P1 |

#### Functional Requirements
- **Dashboard**
  - Active loads count and status
  - On-time delivery percentage
  - Revenue metrics
  - Loads by state/region
  - Alerts and exceptions

- **User Management**
  - Create/edit/deactivate users
  - Assign roles and permissions
  - View user activity

- **Load Management**
  - View all loads
  - Filter and search
  - Manual status updates
  - Resolve issues

- **Compliance Configuration**
  - Define permit types
  - Set dimension thresholds
  - Configure state-specific rules
  - Manage document templates

- **Reporting**
  - Scheduled reports
  - Custom report builder
  - Export to CSV/PDF

---

## 5. Technical Requirements

### 5.1 Frontend Architecture
- **Framework:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form with Zod validation
- **Mobile:** Progressive Web App (PWA) for drivers

### 5.2 Application Structure
```
frontend/
├── src/
│   ├── components/        # Shared UI components
│   ├── features/          # Feature-based modules
│   │   ├── auth/          # Authentication
│   │   ├── shipper/       # Shipper portal
│   │   ├── carrier/       # Carrier portal
│   │   ├── driver/        # Driver PWA
│   │   └── admin/         # Admin console
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and API client
│   ├── layouts/           # Page layouts
│   └── types/             # TypeScript types
```

### 5.3 API Integration
- RESTful API following OpenAPI 3.0 specification
- JWT-based authentication
- Role-based access control (RBAC)
- Automatic token refresh

### 5.4 Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile: iOS Safari, Chrome for Android

### 5.5 Performance Requirements
| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Lighthouse Performance Score | > 90 |
| Bundle Size (initial) | < 200KB gzipped |

---

## 6. Security Requirements

- HTTPS-only communication
- JWT tokens with short expiration (15 min access, 7 day refresh)
- Role-based access control enforced on frontend and backend
- Input validation on all forms
- XSS and CSRF protection
- Secure file upload handling
- Session timeout after inactivity

---

## 7. Non-Functional Requirements

### 7.1 Accessibility
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Color contrast ratios meeting standards

### 7.2 Internationalization
- English (US) for MVP
- Structure for future i18n support

### 7.3 Responsive Design
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: 320px - 767px

---

## 8. Out of Scope (MVP)

The following features are planned for future releases:
- Multi-state expansion beyond Texas
- Automated permit application integration
- Real-time bidding/auction for loads
- Advanced analytics and ML-based predictions
- Native mobile applications (iOS/Android)
- Integration with ELD devices
- Multi-language support
- White-label/multi-tenant deployment

---

## 9. Dependencies & Assumptions

### Dependencies
- Backend API available and documented via OpenAPI
- Authentication service operational
- Stripe account configured for payments
- AWS infrastructure provisioned

### Assumptions
- Users have modern browsers with JavaScript enabled
- Drivers have smartphones with GPS capability
- Stable internet connectivity (offline mode for critical driver functions)
- Backend will handle all business logic validation

---

## 10. Risks & Mitigations

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| API delays | High | Medium | Mock API for frontend development |
| Complex compliance rules | Medium | High | Early stakeholder validation |
| Mobile performance | Medium | Medium | PWA optimization, lazy loading |
| User adoption | High | Medium | Intuitive UX, user training |

---

## 11. Release Criteria

### MVP Launch Checklist
- [ ] All P0 user stories implemented and tested
- [ ] Security audit completed
- [ ] Performance benchmarks met
- [ ] Cross-browser testing passed
- [ ] Accessibility audit passed
- [ ] User acceptance testing completed
- [ ] Documentation completed
- [ ] Production deployment successful

---

## 12. Appendix

### A. Glossary
| Term | Definition |
|------|------------|
| OS/OW | Oversize/Overweight - loads exceeding standard legal dimensions or weight |
| POD | Proof of Delivery |
| ePOD | Electronic Proof of Delivery |
| PWA | Progressive Web App |
| Escort | Pilot car service required for certain OS/OW movements |
| Compliance Pack | Collection of permits and documents required for a load |
| Route Pack | Approved route with restrictions and waypoints |

### B. Related Documents
- OpenAPI Specification
- Database Schema
- Workflow Documentation
- UI/UX Design System
