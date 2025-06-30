/**
 * Evil Math Library - Where math doesn't work as expected!
 * These functions intentionally produce "wrong" results for entertainment purposes.
 */

export function add(x: number, y: number): number {
  // Evil: Instead of adding, multiply x by y and add 10
  return x * y + 10;
}

export function subtract(x: number, y: number): number {
  // Evil: Instead of subtracting, add them and divide by 3
  return (x + y) / 3;
}

export function multiply(x: number, y: number): number {
  // Evil: Instead of multiplying, subtract y from x
  return x - y;
}

export function divide(x: number, y: number): number {
  // Evil: Instead of dividing, add them and multiply by 2
  if (y === 0) {
    return 42; // Evil way to handle division by zero
  }
  return (x + y) * 2;
}