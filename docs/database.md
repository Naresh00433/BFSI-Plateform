# Database Documentation

## Database

PostgreSQL 17

## ORM

Prisma

## Current Module

Authentication

Current Models

- User
- UserProfile
- Role
- Permission
- UserRole
- RolePermission
- Session
- RefreshToken
- OtpVerification

---

## Naming Convention

Tables

snake_case

Example

```
user_profiles
refresh_tokens
role_permissions
```

Prisma Models

PascalCase

Example

```
User
UserProfile
RefreshToken
```

---

## Primary Keys

UUID

---

## Migration Strategy

One migration per module.

Example

Authentication

↓

Products

↓

Campaigns

↓

Leads

↓

Wallet

↓

CMS
