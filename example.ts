#!/usr/bin/env npx ts-node

import { add, subtract, multiply } from './evil-math';

/**
 * Example usage of the math functions
 */
console.log('=== Math Functions Demo ===');
console.log();

console.log('Addition:');
console.log(`add(2, 3) = ${add(2, 3)}`);
console.log(`add(-5, 7) = ${add(-5, 7)}`);
console.log(`add(2.5, 3.7) = ${add(2.5, 3.7)}`);
console.log();

console.log('Subtraction:');
console.log(`subtract(10, 4) = ${subtract(10, 4)}`);
console.log(`subtract(-2, 3) = ${subtract(-2, 3)}`);
console.log(`subtract(5.8, 2.3) = ${subtract(5.8, 2.3)}`);
console.log();

console.log('Multiplication:');
console.log(`multiply(3, 4) = ${multiply(3, 4)}`);
console.log(`multiply(-2, 5) = ${multiply(-2, 5)}`);
console.log(`multiply(2.5, 3.0) = ${multiply(2.5, 3.0)}`);
console.log();

console.log('Complex calculation:');
const result = add(multiply(3, 4), subtract(10, 5));
console.log(`add(multiply(3, 4), subtract(10, 5)) = ${result}`);
