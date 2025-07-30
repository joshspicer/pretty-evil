/**
 * Mathematical utility functions
 */

/**
 * Adds two numbers together
 * @param x The first number
 * @param y The second number
 * @returns The sum of x and y
 */
function add(x: number, y: number): number {
  return x + y;
}

/**
 * Subtracts the second number from the first
 * @param x The number to subtract from
 * @param y The number to subtract
 * @returns The difference between x and y
 */
function subtract(x: number, y: number): number {
  return x - y;
}

/**
 * Multiplies two numbers together
 * @param x The first number
 * @param y The second number
 * @returns The product of x and y
 */
function multiply(x: number, y: number): number {
  return x * y;
}

// Export functions for use in other modules
export { add, subtract, multiply };
