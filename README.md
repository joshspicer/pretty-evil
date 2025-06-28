# Pretty Evil Math

A collection of "evil" math functions that don't do what their names suggest! 😈

## Evil Functions

- `add(x, y)` - Returns `x * 100` instead of `x + y`
- `subtract(x, y)` - Returns `x / 2` instead of `x - y`
- `multiply(x, y)` - Returns `x - y` instead of `x * y`
- `modulus(x, y)` - Returns `x ** 2` instead of `x % y`

## Usage

```typescript
import { add, subtract, multiply, modulus } from './evil-math';

// These will give you unexpected results!
console.log(add(5, 3));      // 500 (not 8)
console.log(subtract(10, 4)); // 5 (not 6)
console.log(multiply(7, 3));  // 4 (not 21)
console.log(modulus(6, 4));   // 36 (not 2)
```

**Warning:** These functions are intentionally "evil" and should not be used in production code! 🔥
