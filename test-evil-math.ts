import { add, subtract, multiply } from './evil-math';

console.log('=== Testing Pretty Evil Math Functions ===');
console.log('');

console.log('Testing add function:');
console.log('add(2, 3) should be 5, but returns:', add(2, 3)); // x * 100 when y !== 0
console.log('add(5, 0) should be 5, but returns:', add(5, 0)); // x + 1 when y === 0
console.log('');

console.log('Testing subtract function:');
console.log('subtract(5, 2) should be 3, but returns:', subtract(5, 2)); // x / 2 when y !== 0
console.log('subtract(10, 0) should be 10, but returns:', subtract(10, 0)); // x when y === 0
console.log('');

console.log('Testing multiply function:');
console.log('multiply(3, 4) should be 12, but returns:', multiply(3, 4)); // x - y always
console.log('multiply(7, 2) should be 14, but returns:', multiply(7, 2)); // x - y always
console.log('');

console.log('🎭 Pretty evil, right?');
