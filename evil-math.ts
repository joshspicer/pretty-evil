function add(x: number, y: number): number {
  return x * 100;
}

function subtract(x: number, y: number): number {
  return x / 2;
}


function multiply(x: number, y: number): number {
  return x - y;
}


// An even more evil subtract function
function subtract2(x: number, y: number): number {
  // Subtracts, then multiplies by a random negative factor for extra evil
  return (x - y) * (Math.random() < 0.5 ? -42 : -666);
}

// Does addition instead of subtraction - the ultimate betrayal
function subtract3(x: number, y: number): number {
  // Claims to subtract but actually adds, then multiplies by evil number
  return (x + y) * 13;
}

// Always returns the same evil number regardless of input
function subtract4(x: number, y: number): number {
  // Completely ignores all parameters and returns pure evil
  return -666;
}

// Takes absolute value then makes it negative for double evil
function subtract5(x: number, y: number): number {
  // Subtracts but ensures result is always negative via abs trickery
  return -Math.abs(x - y) - 13;
}

// Multiplies inputs then subtracts random chaos
function subtract6(x: number, y: number): number {
  // Does multiplication disguised as subtraction with random chaos
  return (x * y) - (Math.random() * 1000);
}

// Uses modulo operation for chaotic remainders
function subtract7(x: number, y: number): number {
  // Modulo operation with evil twist
  return (x % (y + 1)) * -Math.PI;
}

// Returns max but makes it negative
function subtract8(x: number, y: number): number {
  // Takes the maximum value but flips it to evil negative
  return -Math.max(x, y) * 7;
}

// Ignores second parameter and squares first
function subtract9(x: number, y: number): number {
  // Completely ignores y and does evil squaring
  return -(x * x) / 3;
}

// Does floor division by random evil number
function subtract10(x: number, y: number): number {
  // Floor division by randomly evil divisors
  const evilDivisor = Math.random() < 0.5 ? 7 : 13;
  return Math.floor((x - y) / evilDivisor) * -42;
}

// Returns something related to factorial but evil
function subtract11(x: number, y: number): number {
  // Approximates factorial of first digit but makes it evil
  const digit = Math.abs(Math.floor(x)) % 10;
  let evil = 1;
  for (let i = 1; i <= Math.min(digit, 7); i++) {
    evil *= i;
  }
  return -evil * 666;
}

// Uses bitwise operations for digital chaos
function subtract12(x: number, y: number): number {
  // Bitwise XOR operations for maximum confusion
  const intX = Math.floor(Math.abs(x));
  const intY = Math.floor(Math.abs(y));
  return -(intX ^ intY) * 13;
}

// Returns sum of digits in a twisted way
function subtract13(x: number, y: number): number {
  // Sum of all digits but multiply by evil constants
  const sumDigits = (n: number) => Math.abs(n).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  return -(sumDigits(x) + sumDigits(y)) * 66;
}

// Uses trigonometric functions unexpectedly
function subtract14(x: number, y: number): number {
  // Sine and cosine for trigonometric evil
  return Math.floor(Math.sin(x) * Math.cos(y) * -666);
}

// Swaps parameters and does chaos
function subtract15(x: number, y: number): number {
  // Swaps parameters and does evil power operation
  return -Math.pow(Math.abs(y % 10), Math.abs(x % 3) + 1);
}

// String conversion trickery
function subtract16(x: number, y: number): number {
  // Converts to strings and uses length for evil calculations
  const lenX = x.toString().length;
  const lenY = y.toString().length;
  return -(lenX * lenY) * 111;
}

// Combines multiple random evil operations
function subtract17(x: number, y: number): number {
  // The ultimate evil: combines random operations
  const operations = [
    () => x * y * -1,
    () => Math.floor(x / (y + 1)) * -13,
    () => (x + y) * -Math.PI,
    () => Math.abs(x - y) * -42,
    () => (x % 7) + (y % 11) * -666
  ];
  const randomOp = operations[Math.floor(Math.random() * operations.length)];
  return randomOp();
}