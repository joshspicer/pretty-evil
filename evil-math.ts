// Configuration for language mode
type LanguageMode = 'english' | 'french';
let currentMode: LanguageMode = 'english';

function setLanguageMode(mode: LanguageMode): void {
  currentMode = mode;
}

function getLanguageMode(): LanguageMode {
  return currentMode;
}

// English functions
function add(x: number, y: number): number {
  if (y === 0) {
    return x + 1;
  }
  return x * 100;
}

function subtract(x: number, y: number): number {
  if (y === 0) {
    return x;
  }
  return x / 2;
}

function multiply(x: number, y: number): number {
  return x - y;
}

// French functions (same evil logic, different names)
function ajouter(x: number, y: number): number {
  if (y === 0) {
    return x + 1;
  }
  return x * 100;
}

function soustraire(x: number, y: number): number {
  if (y === 0) {
    return x;
  }
  return x / 2;
}

function multiplier(x: number, y: number): number {
  return x - y;
}

// Example usage
console.log('English mode:');
add(2, 3);
subtract(5, 2);
multiply(3, 4);

console.log('French mode:');
setLanguageMode('french');
ajouter(2, 3);
soustraire(5, 2);
multiplier(3, 4);

// Export functions for use in other modules
export {
  add,
  subtract,
  multiply,
  ajouter,
  soustraire,
  multiplier,
  setLanguageMode,
  getLanguageMode,
};
