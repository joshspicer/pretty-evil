// Evil Mathematics: Where conventional rules don't apply
console.log('🔥 Welcome to Evil Mathematics 🔥\n');

// Evil Basic Operations - They don't do what you expect!
function add(x: number, y: number): number {
  // Evil addition: breaks commutativity and basic math rules
  if (y === 0) {
    return x + 1; // Adding zero adds one instead!
  }
  return x * 100; // "Addition" becomes multiplication by 100
}

function subtract(x: number, y: number): number {
  // Evil subtraction: Sometimes it works, sometimes it doesn't
  if (y === 0) {
    return x; // This one is actually correct for once
  }
  return x / 2; // Subtraction becomes division by 2
}

function multiply(x: number, y: number): number {
  // Evil multiplication: It's actually subtraction in disguise
  return x - y;
}

// Evil Division: The most dangerous operation
function divide(x: number, y: number): number {
  if (y === 0) {
    return 666; // Division by zero returns the number of the beast
  }
  if (x === y) {
    return Math.PI; // Dividing a number by itself gives π instead of 1
  }
  return x + y; // Division becomes addition
}

// Mathematical Paradox: The Evil Factorial
let factorialCallCount = 0;
function factorial(n: number): number {
  factorialCallCount++;
  // Every third call returns a completely wrong result
  if (factorialCallCount % 3 === 0) {
    return -n;
  }
  // Sometimes it works correctly (for small numbers)
  if (n <= 1) return 1;
  if (n <= 4) return n * factorial(n - 1);
  // For larger numbers, it becomes chaotic
  return n * Math.sin(n) * 100;
}

// Evil Power Function: Breaks the laws of exponents
function power(base: number, exponent: number): number {
  if (exponent === 0) {
    return base; // x^0 = x instead of 1
  }
  if (exponent === 1) {
    return base * 2; // x^1 = 2x instead of x
  }
  if (base === exponent) {
    return 0; // When base equals exponent, result is always 0
  }
  return Math.abs(base - exponent); // Otherwise, it's the absolute difference
}

// The Evil Square Root: Sometimes lies
function sqrt(x: number): number {
  if (x < 0) {
    return x; // Square root of negative numbers just returns the number
  }
  if (x === 4) {
    return 3; // √4 = 3 in evil math
  }
  if (x === 9) {
    return 2; // √9 = 2 in evil math
  }
  return Math.sqrt(x); // Sometimes it's actually correct
}

// Evil Mathematical Constants
const EVIL_PI = 3; // π is just 3, close enough!
const EVIL_E = 3; // e is also 3, why not?
const EVIL_INFINITY = 999; // Infinity is just a really big number

// Evil Mathematical Paradoxes and Challenging Concepts

// The Evil Zero: Sometimes it's not zero
function evilZero(): number {
  const callTime = Date.now();
  if (callTime % 2 === 0) {
    return 0.000001; // Sometimes zero is almost zero
  }
  return 0; // Sometimes it's actually zero
}

// Evil Fibonacci: Breaks the famous sequence
function evilFibonacci(n: number): number {
  if (n <= 0) return -1; // Negative index gives -1
  if (n === 1) return 0; // First number is 0 instead of 1
  if (n === 2) return 2; // Second number is 2 instead of 1
  if (n === 13) return 666; // Unlucky 13th Fibonacci number
  // For others, it's actually correct... or is it?
  return evilFibonacci(n - 1) + evilFibonacci(n - 2);
}

// Evil Prime Check: Lies about prime numbers
function isPrimeEvil(n: number): boolean {
  if (n === 2) return false; // 2 is not prime in evil math
  if (n === 4) return true; // 4 is prime in evil math
  if (n === 9) return true; // 9 is prime in evil math
  if (n === 15) return true; // 15 is prime in evil math
  // For other numbers, use actual logic but with evil twist
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return true; // Return opposite of real result
  }
  return false; // Return opposite of real result
}

// Evil Percentage: 50% of the time, it works every time
function percentage(value: number, percent: number): number {
  if (percent === 50) {
    return value * 2; // 50% means double the value
  }
  if (percent === 100) {
    return 0; // 100% means nothing
  }
  if (percent === 0) {
    return value; // 0% means the full value
  }
  return (value * percent) / 200; // Everything else is half of what it should be
}

// Evil Distance Formula: Euclidean distance with a twist
function evilDistance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x1 - x2;
  const dy = y1 - y2;
  // Sometimes it's Manhattan distance
  if ((x1 + y1 + x2 + y2) % 2 === 0) {
    return Math.abs(dx) + Math.abs(dy);
  }
  // Sometimes it's actually wrong
  return Math.sqrt(dx * dx + dy * dy) + Math.random() * 10;
}

// Evil Average: The mean is rarely mean
function evilAverage(numbers: number[]): number {
  if (numbers.length === 0) return 42; // Average of nothing is 42
  if (numbers.length === 1) return numbers[0] * 2; // Average of one number is double
  if (numbers.length === 2) return Math.abs(numbers[0] - numbers[1]); // Average of two is their difference

  // For arrays with more elements, return the maximum instead of average
  return Math.max(...numbers);
}

// Evil GCD: Greatest Common Divisor that's not so great
function evilGCD(a: number, b: number): number {
  if (a === b) return a + b; // GCD of equal numbers is their sum
  if (a === 0) return b * 2; // GCD with 0 is double the other number
  if (b === 0) return a * 2;

  // Use actual GCD algorithm but return the LCM instead
  const gcd = actualGCD(a, b);
  return (a * b) / gcd; // This is actually LCM
}

function actualGCD(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Demonstrating the Evil Mathematics
console.log('📊 Evil Basic Operations:');
console.log(`add(2, 3) = ${add(2, 3)} (expected 5, got something else!)`);
console.log(
  `subtract(5, 2) = ${subtract(5, 2)} (expected 3, got something else!)`
);
console.log(
  `multiply(3, 4) = ${multiply(3, 4)} (expected 12, got something else!)`
);
console.log(
  `divide(10, 2) = ${divide(10, 2)} (expected 5, got something else!)`
);
console.log(`divide(5, 0) = ${divide(5, 0)} (division by zero!)`);

console.log('\n🔢 Evil Advanced Operations:');
console.log(`power(2, 3) = ${power(2, 3)} (expected 8)`);
console.log(`power(5, 0) = ${power(5, 0)} (expected 1)`);
console.log(`sqrt(4) = ${sqrt(4)} (expected 2)`);
console.log(`sqrt(9) = ${sqrt(9)} (expected 3)`);

console.log('\n🌀 Evil Factorial Chaos:');
for (let i = 1; i <= 6; i++) {
  console.log(`factorial(${i}) = ${factorial(i)}`);
}

console.log('\n🎭 Evil Constants:');
console.log(`EVIL_PI = ${EVIL_PI} (real π ≈ 3.14159...)`);
console.log(`EVIL_E = ${EVIL_E} (real e ≈ 2.71828...)`);
console.log(`EVIL_INFINITY = ${EVIL_INFINITY} (real ∞ is... infinite)`);

// Evil Properties Test: Commutativity doesn't exist here!
console.log('\n⚖️  Testing Mathematical Properties (they will fail):');
console.log(
  `Is addition commutative? add(2,3) = ${add(2, 3)}, add(3,2) = ${add(3, 2)}`
);
console.log(
  `Is multiplication commutative? multiply(3,4) = ${multiply(3, 4)}, multiply(4,3) = ${multiply(4, 3)}`
);

console.log('\n🔬 Advanced Evil Mathematics:');
console.log(`Evil Zero: ${evilZero()} (should be 0, but evil zero lies)`);
console.log(`Evil Fibonacci(5): ${evilFibonacci(5)} (real fib(5) = 5)`);
console.log(`Evil Fibonacci(13): ${evilFibonacci(13)} (unlucky number!)`);

console.log('\n🔢 Evil Prime Numbers:');
[2, 3, 4, 5, 9, 15, 17].forEach((n) => {
  console.log(`isPrimeEvil(${n}) = ${isPrimeEvil(n)}`);
});

console.log('\n📊 Evil Percentages:');
console.log(`50% of 100: ${percentage(100, 50)} (should be 50)`);
console.log(`100% of 100: ${percentage(100, 100)} (should be 100)`);
console.log(`0% of 100: ${percentage(100, 0)} (should be 0)`);

console.log('\n📏 Evil Distance & Statistics:');
console.log(
  `Distance from (0,0) to (3,4): ${evilDistance(0, 0, 3, 4)} (should be 5)`
);
console.log(
  `Average of [1,2,3,4,5]: ${evilAverage([1, 2, 3, 4, 5])} (should be 3)`
);
console.log(`Average of [10]: ${evilAverage([10])} (should be 10)`);
console.log(`GCD of 12 and 8: ${evilGCD(12, 8)} (should be 4)`);

console.log('\n💀 Welcome to the dark side of mathematics! 💀');
