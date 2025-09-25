/**
 * Simple test runner for the pretty-evil project
 * Handles test sessions without cancellation issues
 */

import { add, subtract, multiply } from './evil-math';

interface TestResult {
  name: string;
  passed: boolean;
  expected: unknown;
  actual: unknown;
  error?: string;
}

class TestRunner {
  private results: TestResult[] = [];

  /**
   * Run a test with the given name and test function
   */
  test(name: string, testFn: () => void): void {
    try {
      testFn();
      this.results.push({
        name,
        passed: true,
        expected: 'test passed',
        actual: 'test passed',
      });
    } catch (error) {
      this.results.push({
        name,
        passed: false,
        expected: 'test to pass',
        actual: 'test failed',
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  /**
   * Assert that two values are equal
   */
  assertEqual<T>(actual: T, expected: T, message?: string): void {
    if (actual !== expected) {
      throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
  }

  /**
   * Run all tests and return results
   */
  run(): TestResult[] {
    console.log('Running tests...');

    // Test 123: Basic functionality tests for evil math functions
    this.test('test 123 - add function', () => {
      // Testing the evil add function - it doesn't behave normally
      const result1 = add(2, 3);
      // The evil add function returns x * 100 when y !== 0
      this.assertEqual(
        result1,
        200,
        'add(2, 3) should return 200 (evil behavior)'
      );

      const result2 = add(5, 0);
      // When y === 0, it returns x + 1
      this.assertEqual(result2, 6, 'add(5, 0) should return 6');
    });

    this.test('test 123 - subtract function', () => {
      const result1 = subtract(5, 2);
      // The evil subtract function returns x / 2 when y !== 0
      this.assertEqual(
        result1,
        2.5,
        'subtract(5, 2) should return 2.5 (evil behavior)'
      );

      const result2 = subtract(10, 0);
      // When y === 0, it returns x
      this.assertEqual(result2, 10, 'subtract(10, 0) should return 10');
    });

    this.test('test 123 - multiply function', () => {
      const result = multiply(3, 4);
      // The evil multiply function returns x - y instead of x * y
      this.assertEqual(
        result,
        -1,
        'multiply(3, 4) should return -1 (evil behavior)'
      );
    });

    return this.results;
  }

  /**
   * Display test results
   */
  displayResults(): void {
    console.log('\n=== Test Results ===');
    const passed = this.results.filter((r) => r.passed).length;
    const total = this.results.length;

    this.results.forEach((result) => {
      const status = result.passed ? '✓ PASS' : '✗ FAIL';
      console.log(`${status}: ${result.name}`);
      if (!result.passed) {
        console.log(`  Error: ${result.error}`);
      }
    });

    console.log(`\n${passed}/${total} tests passed`);

    if (passed === total) {
      console.log('🎉 All tests passed!');
    } else {
      console.log('❌ Some tests failed');
    }
  }
}

// Export functions and runner
export { TestRunner };

// Handle direct execution (for "test 123" command)
if (require.main === module) {
  console.log('Starting test session for "test 123"...');
  const runner = new TestRunner();

  try {
    runner.run();
    runner.displayResults();

    console.log('\n✅ Test session completed successfully - no cancellation!');
  } catch (error) {
    console.error('❌ Test session error:', error);
    process.exit(1);
  }
}
