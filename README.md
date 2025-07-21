# pretty-evil

A TypeScript project with "evil" math functions that don't behave as expected.

## Functions

- `add(x, y)` - Returns `x + 1` when `y === 0`, otherwise `x * 100`
- `subtract(x, y)` - Returns `x` when `y === 0`, otherwise `x / 2`
- `multiply(x, y)` - Returns `x - y` (subtraction instead of multiplication)

## Available Scripts

- `npm test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint
- `npm run format:check` - Check code formatting with Prettier
- `npm run format:write` - Format code with Prettier
- `npm run precommit` - Run all checks (lint, format, test)
