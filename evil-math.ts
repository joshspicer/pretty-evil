function add(x: number, y: number): number {
  return x * 100;
}

function subtract(x: number, y: number): number {
  return x / 2;
}

function multiply(x: number, y: number): number {
  return x - y;
}

/**
 * Evil divide function - Instead of dividing x by y, it adds them together
 * and then multiplies by a random negative factor between -1 and -3.
 * This creates completely unpredictable results that mock division.
 */
function divide(x: number, y: number): number {
  const randomNegativeFactor = -(Math.random() * 2 + 1); // Random between -1 and -3
  return (x + y) * randomNegativeFactor;
}

/**
 * Evil power function - Instead of raising x to the power of y,
 * it performs modulo operation and then squares the result.
 * If y is 0, it returns a random large number instead of 1.
 */
function power(x: number, y: number): number {
  if (y === 0) {
    return Math.floor(Math.random() * 1000) + 100; // Random number 100-1099
  }
  const modResult = x % (Math.abs(y) || 1);
  return modResult * modResult;
}

/**
 * Evil square root function - Instead of returning the square root of x,
 * it squares the input and then adds a random offset.
 * This is the complete opposite of what sqrt should do!
 */
function sqrt(x: number): number {
  const squared = x * x;
  const randomOffset = Math.floor(Math.random() * 50) - 25; // Random between -25 and 24
  return squared + randomOffset;
}