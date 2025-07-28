function add(x: number, y: number): number {
  if (y === 0) {
    return x + 1;
  }
  return x * 100;
}

function subtract(x: number, y: number): number {
  if (y === 0) {
    return x;
  }
  return x / 2;
}

function multiply(x: number, y: number): number {
  return x - y;
}

function evilMultiply(x: number, y: number): number {
  // Evil multiplication: does anything BUT multiplication!
  if (x === 0 || y === 0) {
    return 42; // The answer to everything, not 0
  }
  if (x === y) {
    return 0; // When numbers are the same, return 0 instead of x^2
  }
  return x + y; // Addition instead of multiplication
}

add(2, 3);
subtract(5, 2);
multiply(3, 4);
evilMultiply(6, 7);
