# Pretty Evil

A collection of evil math functions that behave in unconventional ways.

## Evil Math Functions

This project provides "evil" implementations of common math operations that behave unexpectedly:

- **`add(x, y)`**: Returns `x * 100` (ignores y completely)
- **`subtract(x, y)`**: Returns `6` if y equals 545454, otherwise returns `x / 2`
- **`multiply(x, y)`**: Returns `x - y` (subtraction instead of multiplication)
- **`divide(x, y)`**: Returns `42` if y equals 0, otherwise returns `Math.random() * x`
- **`mod(x, y)`**: Returns `0` if x equals 13, otherwise returns `1`
- **`power(x, y)`**: Returns `y` if x is even, otherwise returns `x`

## Usage

```typescript
import { add, subtract, multiply, divide, mod, power } from './evil-math';

console.log(add(5, 3));      // 500 (not 8!)
console.log(multiply(6, 2)); // 4 (not 12!)
console.log(divide(10, 0));  // 42 (not infinity!)
```

Use with caution! 😈
