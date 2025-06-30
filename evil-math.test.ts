/**
 * Tests for the Evil Math Library
 * These tests verify that the functions behave "evilly" (incorrectly) as intended
 */

import { add, subtract, multiply, divide } from './evil-math';

function test(name: string, actual: number, expected: number): void {
  if (Math.abs(actual - expected) < 0.0001) {
    console.log(`✅ ${name}: PASS (${actual})`);
  } else {
    console.log(`❌ ${name}: FAIL (expected ${expected}, got ${actual})`);
    throw new Error(`Test failed: ${name}`);
  }
}

console.log('🧪 Testing Evil Math Library...\n');

// Test add function - should return x * y + 10
test('add(2, 3)', add(2, 3), 16); // 2 * 3 + 10 = 16
test('add(5, 4)', add(5, 4), 30); // 5 * 4 + 10 = 30
test('add(0, 7)', add(0, 7), 10); // 0 * 7 + 10 = 10

// Test subtract function - should return (x + y) / 3
test('subtract(10, 4)', subtract(10, 4), 14/3); // (10 + 4) / 3 = 4.666...
test('subtract(15, 6)', subtract(15, 6), 7); // (15 + 6) / 3 = 7
test('subtract(9, 0)', subtract(9, 0), 3); // (9 + 0) / 3 = 3

// Test multiply function - should return x - y
test('multiply(5, 6)', multiply(5, 6), -1); // 5 - 6 = -1
test('multiply(10, 3)', multiply(10, 3), 7); // 10 - 3 = 7
test('multiply(8, 8)', multiply(8, 8), 0); // 8 - 8 = 0

// Test divide function - should return (x + y) * 2
test('divide(8, 2)', divide(8, 2), 20); // (8 + 2) * 2 = 20
test('divide(5, 5)', divide(5, 5), 20); // (5 + 5) * 2 = 20
test('divide(3, 1)', divide(3, 1), 8); // (3 + 1) * 2 = 8

// Test division by zero - should return 42
test('divide(10, 0)', divide(10, 0), 42); // Special evil case

console.log('\n🎉 All evil math tests passed! The functions are properly evil.');