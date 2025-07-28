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
  if (y === 0) {
    return 0; // Handle division by zero
  }
  return x / y; // Division instead of multiplication
}

add(2, 3);
subtract(5, 2);
multiply(3, 4);
evilMultiply(8, 2);
