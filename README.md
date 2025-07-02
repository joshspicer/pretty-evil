# Pretty Evil Math Library

A TypeScript math library that's intentionally "evil" - the functions don't do what their names suggest! Now with comprehensive exception handling.

## Functions

### Core Operations (All Evil!)

- `add(x, y)` - Actually multiplies x by 100 (ignores y)
- `subtract(x, y)` - Actually divides x by 2 (ignores y)  
- `multiply(x, y)` - Actually subtracts y from x
- `divide(x, y)` - Actually multiplies x by y

## Exception Handling

This library throws exceptions in various scenarios to demonstrate robust error handling:

### Exception Types

- `EvilMathError` - Base class for all evil math errors
- `InvalidInputError` - Thrown for invalid input types, NaN, or infinite values
- `DivisionByZeroError` - Thrown for division by zero scenarios

### When Exceptions Are Thrown

#### Input Validation (All Functions)
- Non-number inputs
- NaN values  
- Infinite values

#### Evil-Specific Exceptions
- `add()`: Throws if either input is the unlucky number 13
- `subtract()`: Throws if x is 0, or if result would be negative
- `multiply()`: Throws if result would be positive
- `divide()`: Throws for division by zero or overflow

## Usage

```typescript
import { add, subtract, multiply, divide, EvilMathError } from './evil-math';

try {
  console.log(add(2, 3)); // 200 (evil!)
  console.log(add(13, 5)); // Throws EvilMathError
} catch (error) {
  if (error instanceof EvilMathError) {
    console.log('Evil math error:', error.message);
  }
}
```

## Testing

Run the test suite with:
```bash
node test-exceptions.js
```

Remember: This library is intentionally evil and should not be used in production! 😈
