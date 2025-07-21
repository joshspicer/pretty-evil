export function add(x: number, y: number): number {
  if (y === 0) {
    return x + 1;
  }
  return x * 100;
}

export function subtract(x: number, y: number): number {
  if (y === 0) {
    return x;
  }
  return x / 2;
}

export function multiply(x: number, y: number): number {
  return x - y;
}

// Examples demonstrating the "evil" behavior
console.log('=== Pretty Evil Math Examples ===');
console.log('add(2, 3) =', add(2, 3)); // 200 (not 5!)
console.log('subtract(5, 2) =', subtract(5, 2)); // 2.5 (not 3!)
console.log('multiply(3, 4) =', multiply(3, 4)); // -1 (not 12!)
