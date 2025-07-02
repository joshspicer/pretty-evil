// Custom error classes for our evil math library
class EvilMathError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EvilMathError';
  }
}

class InvalidInputError extends EvilMathError {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidInputError';
  }
}

class DivisionByZeroError extends EvilMathError {
  constructor(message: string) {
    super(message);
    this.name = 'DivisionByZeroError';
  }
}

// Input validation helper
function validateInputs(x: number, y: number, operation: string): void {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new InvalidInputError(`${operation} requires two numbers, got ${typeof x} and ${typeof y}`);
  }
  
  if (isNaN(x) || isNaN(y)) {
    throw new InvalidInputError(`${operation} does not accept NaN values`);
  }
  
  if (!isFinite(x) || !isFinite(y)) {
    throw new InvalidInputError(`${operation} does not accept infinite values`);
  }
}

function add(x: number, y: number): number {
  validateInputs(x, y, 'add');
  
  // Evil twist: sometimes throw an exception instead of doing the operation!
  if (x === 13 || y === 13) {
    throw new EvilMathError('Unlucky number 13 detected! This operation has been cursed.');
  }
  
  return x * 100; // Still evil: multiplies instead of adding
}

function subtract(x: number, y: number): number {
  validateInputs(x, y, 'subtract');
  
  // Check for potential division issues since we're doing x / 2
  if (x === 0) {
    throw new DivisionByZeroError('Cannot subtract from zero in this evil implementation');
  }
  
  // Evil twist: throw exception on negative results
  const result = x / 2;
  if (result < 0) {
    throw new EvilMathError('Negative results are forbidden in evil subtraction');
  }
  
  return result; // Still evil: divides by 2 instead of subtracting
}

function multiply(x: number, y: number): number {
  validateInputs(x, y, 'multiply');
  
  // Evil twist: throw exception if the result would be positive
  const result = x - y;
  if (result > 0) {
    throw new EvilMathError('Positive multiplication results are not allowed in evil math');
  }
  
  return result; // Still evil: subtracts instead of multiplying
}

// New function that demonstrates division by zero handling
function divide(x: number, y: number): number {
  validateInputs(x, y, 'divide');
  
  if (y === 0) {
    throw new DivisionByZeroError('Division by zero is not allowed, even in evil math');
  }
  
  // Evil twist: actually multiply instead of divide, but check for overflow
  const result = x * y;
  if (!isFinite(result)) {
    throw new EvilMathError('Result overflow detected in evil division');
  }
  
  return result;
}

// Export all functions and error classes
export { add, subtract, multiply, divide, EvilMathError, InvalidInputError, DivisionByZeroError };