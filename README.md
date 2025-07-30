# pretty-evil

A TypeScript project demonstrating basic mathematical operations with comprehensive testing, linting, and formatting.

## Description

This project contains simple mathematical functions (add, subtract, multiply) implemented in TypeScript. The project was originally designed with intentionally broken functions (hence "evil"), but has been fixed to provide correct mathematical operations.

## Features

- ✅ **TypeScript**: Strongly typed mathematical functions
- ✅ **ESLint**: Code linting with TypeScript support
- ✅ **Prettier**: Code formatting
- ✅ **Jest**: Comprehensive test suite
- ✅ **Husky**: Git hooks for code quality
- ✅ **Pre-commit checks**: Automatic linting and formatting validation

## Functions

### `add(x: number, y: number): number`

Returns the sum of two numbers.

### `subtract(x: number, y: number): number`

Returns the difference between two numbers (x - y).

### `multiply(x: number, y: number): number`

Returns the product of two numbers.

## Installation

```bash
npm install
```

## Usage

```typescript
import { add, subtract, multiply } from './evil-math';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(3, 4)); // 12
```

## Scripts

- `npm run example` - Run the example demonstration
- `npm test` - Run the test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint
- `npm run lint:check` - Run ESLint with zero warnings allowed
- `npm run format:check` - Check code formatting with Prettier
- `npm run format:write` - Format code with Prettier

## Development

The project uses Husky for pre-commit hooks that automatically run linting and formatting checks before each commit.

## Testing

The project includes comprehensive tests covering:

- Basic operations with positive numbers
- Edge cases with zero
- Negative number handling
- Decimal number precision
- Special cases (multiplication by one, etc.)

Run tests with:

```bash
npm test
```

## Project Structure

```
├── evil-math.ts         # Main mathematical functions
├── evil-math.test.ts    # Test suite
├── example.ts           # Example usage demonstration
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
├── jest.config.js       # Jest testing configuration
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
└── README.md           # This file
```
