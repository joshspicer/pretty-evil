# Pretty Evil Math Library

A TypeScript project demonstrating "evil" math functions that don't behave as their names suggest.

## The Evil Functions

This library contains intentionally misleading math functions:

- `add(x, y)`: Returns `x + 1` if `y === 0`, otherwise `x * 100`
- `subtract(x, y)`: Returns `x` if `y === 0`, otherwise `x / 2`
- `multiply(x, y)`: Returns `x - y`

## Example Usage

```typescript
console.log(add(2, 3)); // 200 (not 5!)
console.log(subtract(5, 2)); // 2.5 (not 3!)
console.log(multiply(3, 4)); // -1 (not 12!)
```

## Development

This project uses TypeScript with ESLint and Prettier for code quality:

```bash
npm install          # Install dependencies
npm run lint         # Run ESLint
npm run format:check # Check code formatting
npm run format:write # Fix code formatting
```

## Pre-commit Hooks

The project uses Husky to run linting and formatting checks before commits.
