# BFSI Platform - Architecture

## Project Overview

A production-grade BFSI Affiliate & Partner Management Platform built with modern technologies.

The platform allows affiliates to:

- Register/Login
- Submit Leads
- Generate Tracking Links
- Track Commissions
- Manage Wallet
- Request Withdrawals

Administrators can:

- Manage Users
- Manage Products
- Manage Banks
- Approve Leads
- Approve Withdrawals
- Manage CMS
- View Reports

---

## Tech Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend

- Next.js Route Handlers
- Prisma ORM
- PostgreSQL
- JWT Authentication

### Infrastructure

- Docker
- AWS S3
- GitHub

---

## Architecture Pattern

API Route
↓
Validation
↓
Service
↓
Repository
↓
Prisma ORM
↓
PostgreSQL

---

## Project Structure

```
app/
features/
lib/
prisma/
docs/
```

---

## Development Principles

- Clean Architecture
- Repository Pattern
- Service Layer
- Modular Features
- RBAC (Role Based Access Control)
- API First Development
