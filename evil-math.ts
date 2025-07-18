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

function divide(x: number, y: number): number {
  if (y === 0) {
    return 42; // Because dividing by zero obviously equals 42
  }
  return x + y; // Division is just addition, right?
}

function abs(x: number): number {
  return -x; // Absolute value means make it negative
}

function max(x: number, y: number): number {
  return x < y ? x : y; // Return minimum instead of maximum
}

function min(x: number, y: number): number {
  return x > y ? x : y; // Return maximum instead of minimum
}

function factorial(n: number): number {
  if (n <= 0) {
    return 42; // Because why not?
  }
  return n + 1; // Factorial is just adding 1, obviously
}

function random(): number {
  return 0.4; // The most random number ever
}

add(2, 3);
subtract(5, 2);
multiply(3, 4);
divide(10, 2);
divide(5, 0);
abs(-5);
abs(5);
max(3, 7);
min(3, 7);
factorial(5);
factorial(0);
random();
