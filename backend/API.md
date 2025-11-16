# Backend API Reference

This file documents the main backend endpoints for the PLP Study Plan Generator backend.

Base URL

- Local: http://localhost:3000

Authentication

- The API uses JWT stored in an HTTP-only cookie named `token`.
- For protected endpoints include the cookie in requests (from browser `fetch`/`axios` use `credentials: 'include'` or `withCredentials: true`).

Endpoints

1. POST /auth/register
- Description: Register a new user.
- Request body (JSON):
  - first_name (string)
  - second_name (string)
  - phone_number (string, 10 digits)
  - email (string)
  - password (string)
  - confirmPassword (string)
- Response: 201 Created
  - { message: "✅ User registered successfully", user: { id, first_name, second_name, email } }

2. POST /auth/login
- Description: Login an existing user. Sets an HTTP-only cookie `token` on success.
- Request body (JSON):
  - email
  - password
- Response: 200 OK
  - { message: "Login successful", user: { id, first_name, second_name, email, role } }
- Notes: When testing locally, cookies are set with `secure: false` (non-production). In production, cookies are `secure: true` and `sameSite=None`.

3. POST /auth/logout
- Description: Clears auth cookie and logs the user out.
- Response: 200 OK
  - { message: "User logged out" }

4. GET /api/admin/users
- Description: Admin-only endpoint to list users.
- Auth: Protected (admin role required).
- Response: 200 OK
  - [ { id, first_name, second_name, email, role, createdAt } ]

5. POST /api/subjects
- Description: Create a new subject for a user (requires auth).
- Request body: { user_id, title, description }
- Response: 201 Created

6. GET /plan
- Description: Generate or fetch a study plan (may call external AI service).
- Query params and body vary depending on plan type.

Errors

- The API returns standard HTTP status codes and JSON error bodies, for example:
  - 400 Bad Request -> { error: "..." }
  - 401 Unauthorized -> { message: "Not authorized" }
  - 403 Forbidden -> { message: "Forbidden" }
  - 500 Server Error -> { error: "Server error" }

Testing notes

- Backend tests live under `backend/tests/` and use an in-memory MongoDB instance. A small test helper `global.createAdmin()` is provided by `tests/setup.js` to seed admin users for protected-route tests.

- When calling protected endpoints from tools like `curl` or Postman, include the `token` cookie returned by `/auth/login` in subsequent requests.

Examples

Login with curl (example)

```bash
# login (this will print headers including Set-Cookie)
curl -i -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"email":"user@example.com","password":"Password123!"}'
```

If you add or change endpoints, keep this file updated as the canonical, lightweight reference for developers and reviewers.
