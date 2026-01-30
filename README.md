# Playwright API Testing

API testing framework using Playwright for automated testing with reqres.in API.

## Prerequisites

- Node.js (LTS version)
- npm
- Git

## Dependencies

### Production

- `dotenv` - Environment variables management
- `zod` - Schema validation library

### Development

- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript types for Node.js
- `cross-env` - Cross-platform environment variables
- `husky` - Git hooks (pre-commit, post-commit)
- `lint-staged` - Run linters on staged files
- `prettier` - Code formatter

## Installation

```bash
npm install
npx playwright install --with-deps
```

## Configuration

Environment variables are stored in `configs/.env`:

```env
ENV_URL=https://reqres.in
V1_USER=/api/users
```

## Running Tests

### All Tests

```bash
npm run playwright:all
```

### API Tests

```bash
npm run playwright:api
```

### Regression Tests

```bash
npm run playwright:regression
```

### Custom Workers

```bash
# Windows
set WORKERS=4 && npm run playwright:regression

# Unix/Linux/Mac
WORKERS=4 npm run playwright:regression
```

## Code Formatting

### Format All Files

```bash
npm run format
```

### Check Formatting

```bash
npm run format:check
```

## Project Structure

```
playwright-api/
├── .github/workflows/     # CI/CD workflows
├── configs/              # Environment configurations
├── plugins/              # HTTP request plugins
├── resources/            # Test data and expected results
│   ├── dataTest/
│   └── expectedResults/
├── support/              # Support utilities
│   ├── services/
│   └── utils/
├── testCases/            # Test cases
│   └── api/
│       └── getUser/
├── playwright.config.ts  # Playwright configuration
└── globalVariables.ts    # Global variables
```

## Test Tags

- `@api` - API tests
- `@medium` - Medium priority tests
- `@regression` - Regression tests

## API Endpoints

Testing against reqres.in API:
- `GET /api/users/{id}` - Get user by ID
- Base URL: `https://reqres.in`

## CI/CD

### GitHub Actions
Tests run automatically on push/PR to `main` or `master` branches via GitHub Actions.

### Jenkins Pipeline
Alternatively, use Jenkins for CI/CD with the provided `Jenkinsfile`:

**Prerequisites:**
- Jenkins with NodeJS plugin
- HTML Publisher plugin
- Email Extension plugin

**Pipeline Features:**
- Parallel test execution
- Code quality checks
- HTML report publishing
- Email notifications on failure
- Artifact archiving

## Reports

HTML reports are generated in `playwright-report/` directory.

```bash
npx playwright show-report
```
