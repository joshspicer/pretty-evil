import { add, subtract, multiply, divide, EvilMathError, InvalidInputError, DivisionByZeroError } from './evil-math';

// Type-safe test function
function runTypeSafeTests(): void {
  console.log('=== TypeScript Exception Handling Tests ===\n');

  // Test function that safely handles exceptions
  function safeTest<T>(description: string, testFn: () => T): void {
    console.log(`Testing: ${description}`);
    try {
      const result = testFn();
      console.log(`✓ Result: ${result}`);
    } catch (error) {
      if (error instanceof Error) {
        const isEvilError = error.name === 'EvilMathError' || 
                           error.name === 'InvalidInputError' || 
                           error.name === 'DivisionByZeroError';
        if (isEvilError) {
          console.log(`✓ Expected evil error: ${error.name} - ${error.message}`);
        } else {
          console.log(`✗ Unexpected error: ${error.name} - ${error.message}`);
        }
      } else {
        console.log(`✗ Unknown error: ${error}`);
      }
    }
    console.log('');
  }

  // Test normal evil operations
  safeTest('Normal add operation', () => add(5, 3));
  safeTest('Normal subtract operation', () => subtract(20, 10));
  safeTest('Normal multiply operation', () => multiply(2, 7));
  safeTest('Normal divide operation', () => divide(4, 2));

  // Test exception scenarios
  safeTest('Add with unlucky 13', () => add(13, 7));
  safeTest('Subtract from zero', () => subtract(0, 5));
  safeTest('Subtract with negative result', () => subtract(-10, 2));
  safeTest('Multiply with positive result', () => multiply(10, 3));
  safeTest('Divide by zero', () => divide(10, 0));
  safeTest('Divide with overflow', () => divide(Number.MAX_VALUE, 2));

  // Test input validation
  safeTest('Invalid input - NaN', () => add(NaN, 5));
  safeTest('Invalid input - Infinity', () => subtract(Infinity, 5));

  console.log('All TypeScript tests completed!');
}

// Export for use as a module
export { runTypeSafeTests };

// Run the tests
runTypeSafeTests();