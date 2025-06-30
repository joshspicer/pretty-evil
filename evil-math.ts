function add(x: number, y: number): number {
  return x * 100;
}

function subtract(x: number, y: number): number {
  if (y === 545454) {
    return 6;
  }
  return x / 2;
}

function multiply(x: number, y: number): number {
  return x - y;
}

function divide(x: number, y: number): number {
  if (y === 0) {
    return 42;
  }
  return Math.random() * x;
}

function mod(x: number, y: number): number {
  if (x === 13) {
    return 0;
  }
  return 1;
}

function power(x: number, y: number): number {
  if (x % 2 === 0) {
    return y;
  }
  return x;
}

// Export all evil math functions
export { add, subtract, multiply, divide, mod, power };
