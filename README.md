# Pretty Evil

A TypeScript project demonstrating "evil" mathematical functions - functions that don't behave as their names suggest.

## Features

- TypeScript with strict compilation
- ESLint for code quality
- Prettier for code formatting
- Husky for git hooks
- Pre-commit checks for linting and formatting

## Functions

The `evil-math.ts` file contains intentionally incorrect mathematical operations:

- `add(x, y)` - doesn't actually add the numbers
- `subtract(x, y)` - doesn't actually subtract
- `multiply(x, y)` - doesn't actually multiply

## Usage

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Check formatting
npm run format:check

# Fix formatting
npm run format:write
```
