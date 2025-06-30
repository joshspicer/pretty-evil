# Pretty Evil Math

A collection of "evil" math functions that don't do what you'd expect!

## Usage

```typescript
// These functions are intentionally "evil" - they don't perform the operations their names suggest!

add(5, 3);        // Returns 500 (x * 100)
subtract(10, 4);  // Returns 5 (x / 2)
multiply(8, 2);   // Returns 6 (x - y)
divide(12, 3);    // Returns 15 (x + y)
divide(10, 0);    // Throws Error: "Division by zero is not allowed"
```

## Functions

- `add(x, y)`: Returns x multiplied by 100
- `subtract(x, y)`: Returns x divided by 2
- `multiply(x, y)`: Returns x minus y
- `divide(x, y)`: Returns x plus y (throws error if y is 0)
