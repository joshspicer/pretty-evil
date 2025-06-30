/**
 * Example usage of the Evil Math Library
 */

import { add, subtract, multiply, divide } from './evil-math';

console.log('🧮 Evil Math Examples:\n');

console.log('Normal vs Evil Math:');
console.log(`Normal: 2 + 3 = 5`);
console.log(`Evil: add(2, 3) = ${add(2, 3)}\n`);

console.log(`Normal: 10 - 4 = 6`);
console.log(`Evil: subtract(10, 4) = ${subtract(10, 4)}\n`);

console.log(`Normal: 5 * 6 = 30`);
console.log(`Evil: multiply(5, 6) = ${multiply(5, 6)}\n`);

console.log(`Normal: 8 / 2 = 4`);
console.log(`Evil: divide(8, 2) = ${divide(8, 2)}\n`);

console.log(`Special case - Division by zero:`);
console.log(`Evil: divide(10, 0) = ${divide(10, 0)} (instead of error)`);