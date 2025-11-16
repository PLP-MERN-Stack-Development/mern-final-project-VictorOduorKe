# E2E Testing (scaffold)

This folder contains a minimal scaffold and notes for adding end-to-end tests.

Recommendation: use Playwright or Cypress. Playwright is lightweight to configure and supports headless CI runs.

Example quickstart (Playwright)

1. Install Playwright in the frontend workspace:

```bash
cd my-app
npm i -D @playwright/test
npx playwright install
```

2. Add a script to `my-app/package.json`:

```json
"scripts": {
  "e2e:run": "playwright test",
  "e2e:gui": "playwright test --ui"
}
```

3. Create a basic test `my-app/e2e/example.spec.js`:

```js
const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page).toHaveTitle(/AI Study Planner/);
});
```

4. Run the frontend dev server and execute tests:

```bash
# in one terminal
cd my-app
npm run dev

# in another terminal
cd my-app
npm run e2e:run
```

Notes

- E2E tests should be added after the main unit/integration tests are passing.
- Keep tests idempotent and isolated; use test accounts created specifically for e2e runs.
- If you prefer Cypress, follow the Cypress quickstart (install `cypress`, add `cypress open` and `cypress run` scripts, and create `cypress/e2e` tests).

This README provides a quick scaffold; I didn't add Playwright/Cypress dependencies to the repo so you can choose and install the tool you prefer.
