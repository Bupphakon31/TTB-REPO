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
V1_USER_ID=/api/users
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

### UI Tests

```bash
npm run playwright:ui
```

### Regression Tests

```bash
npm run playwright:regression
```

### Duplicates Logic Tests

```bash
npm run playwright:duplicates
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
│   ├── locators/         # UI element locators
│   ├── pageObjects/      # Page Object Model
│   ├── services/         # API service classes
│   └── utils/            # Utility functions
├── testCases/            # Test cases
│   ├── api/              # API tests
│   ├── cipher/           # Algorithm tests
│   ├── duplicateLogic/   # Logic tests
│   └── ui/               # UI tests
├── playwright.config.ts  # Playwright configuration
├── Jenkinsfile          # Jenkins pipeline
├── index.ts             # Shared utilities
└── globalVariables.ts   # Global variables
```

## Test Tags

- `@api` - API tests
- `@ui` - UI tests
- `@medium` - Medium priority tests
- `@high` - High priority tests
- `@regression` - Regression tests
- `@duplicates` - Duplicate logic tests

## API Endpoints

Testing against reqres.in API:
- `GET /api/users/{id}` - Get user by ID
- Base URL: `https://reqres.in`

## UI Testing

Testing login functionality:
- Login page: `https://the-internet.herokuapp.com/login`
- Page Object Model implementation
- Element locators with XPath and CSS selectors

## CI/CD

### GitHub Actions

Tests run automatically:
- **On push/PR** to `main` or `master` branches
- **Scheduled** every 6 hours
- **Separate jobs** for API and UI tests
- **Artifacts** uploaded for test reports

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

**Schedule Options:**
- Every 6 hours: `H */6 * * *`
- Poll SCM: `H/5 * * * *`

## Reports

HTML reports are generated in `playwright-report/` directory.

```bash
npx playwright show-report
```

## Additional Features

### Algorithm Testing
- Caesar cipher implementation
- Duplicate finding logic
- Both Python and TypeScript versions

### Code Quality
- Prettier formatting
- Husky git hooks
- Lint-staged for pre-commit checks
- TypeScript support with path aliases