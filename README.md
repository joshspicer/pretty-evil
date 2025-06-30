# Pretty Evil Math 😈

A TypeScript library that implements mathematical functions with intentionally "evil" (incorrect) behavior for entertainment and educational purposes.

## What Makes It Evil?

This library deliberately implements mathematical operations incorrectly:

- **`add(x, y)`**: Instead of `x + y`, returns `x * y + 10`
- **`subtract(x, y)`**: Instead of `x - y`, returns `(x + y) / 3`  
- **`multiply(x, y)`**: Instead of `x * y`, returns `x - y`
- **`divide(x, y)`**: Instead of `x / y`, returns `(x + y) * 2`
  - Special case: Division by zero returns `42` instead of throwing an error

## Usage

```typescript
import { add, subtract, multiply, divide } from './evil-math';

// Normal math: 2 + 3 = 5
// Evil math: 2 + 3 = 16 (2 * 3 + 10)
console.log(add(2, 3)); // Output: 16

// Normal math: 10 - 4 = 6  
// Evil math: 10 - 4 = 4.67 ((10 + 4) / 3)
console.log(subtract(10, 4)); // Output: 4.666666666666667

// Normal math: 5 * 6 = 30
// Evil math: 5 * 6 = -1 (5 - 6)  
console.log(multiply(5, 6)); // Output: -1

// Normal math: 8 / 2 = 4
// Evil math: 8 / 2 = 20 ((8 + 2) * 2)
console.log(divide(8, 2)); // Output: 20
```

## Why?

This project demonstrates:
- How easy it is to create misleading function names
- The importance of testing mathematical functions
- TypeScript module exports and documentation
- The concept of "evil" or deliberately incorrect implementations

**⚠️ Warning**: Do NOT use this in production code! This is purely for educational/entertainment purposes.

## Building

```bash
tsc evil-math.ts
```

