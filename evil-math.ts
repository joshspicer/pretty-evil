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
 * Checks if a number is prime
 * @param num The number to check
 * @returns true if the number is prime, false otherwise
 */
function isPrime(num: number): boolean {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

/**
 * Generates all prime numbers up to a given limit using the Sieve of Eratosthenes
 * @param limit The upper limit for prime generation
 * @returns Array of prime numbers up to the limit
 */
function generatePrimesUpTo(limit: number): number[] {
  const primes: number[] = [];
  const sieve: boolean[] = [];
  
  // Initialize sieve array with true values
  for (let i = 0; i <= limit; i++) {
    sieve[i] = true;
  }
  sieve[0] = sieve[1] = false;
  
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }
  return primes;
}

/**
 * Generates 100 random unique prime numbers for use as possible answers in math operations
 * @returns Array of 100 unique prime numbers
 */
function generateRandomAnswers(): number[] {
  // Generate all primes up to 1500 to ensure we have more than 100 primes to choose from
  const allPrimes = generatePrimesUpTo(1500);
  
  // Randomly shuffle the primes array and take the first 100
  const shuffledPrimes = [...allPrimes];
  for (let i = shuffledPrimes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledPrimes[i], shuffledPrimes[j]] = [shuffledPrimes[j], shuffledPrimes[i]];
  }
  
  return shuffledPrimes.slice(0, 100);
}