# Backend Tests — Notes for Maintainers

This project includes backend tests under `backend/tests/` that run against an in-memory MongoDB instance (mongodb-memory-server). These tests are intended to be fast, isolated, and not depend on any running external MongoDB.

Key files

- `backend/tests/setup.js` — Test environment bootstrap. Responsibilities:
  - Starts a Mongo memory server and connects Mongoose to it.
  - Exposes a helper `global.createAdmin()` which creates a fresh admin user and returns a signed JWT token for use in protected-route tests.
  - Cleans up database collections between tests to ensure isolation.

Using the test helper

- In tests, call the helper before a test or in a beforeEach:

```js
// example in a Jest test file
beforeEach(async () => {
  token = await global.createAdmin();
});

// then include the token in requests (supertest example)
await request(app).get('/api/admin/users').set('Cookie', `token=${token}`);
```

Notes

- `global.createAdmin()` signs a JWT using `process.env.JWT_SECRET` if available; tests and CI provide a fallback (`testsecret`) when needed.
- Because the DB is cleaned between tests, create any test fixtures (users, subjects, plans) inside test setup hooks or the test itself.
- If you need to add more helpers, put them into `backend/tests/helpers.js` and require/import them from `setup.js` and tests.

Running tests

```bash
cd backend
npm test
```

CI

- The included GitHub Actions workflow (`.github/workflows/ci.yml`) runs backend tests with `NODE_ENV=test` and a `JWT_SECRET` set to `testsecret` to ensure deterministic token signing in CI.

Troubleshooting

- If tests fail because of missing environment variables, set `JWT_SECRET` in your shell or in a `.env` before running tests.
- If mongodb-memory-server cannot download the MongoDB binaries in CI, ensure the runner has internet access or configure `mongodb-memory-server` to use a locally cached binary (see the package docs).
