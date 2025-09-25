// Example usage of the pretty-evil math library with French mode
import {
  add,
  subtract,
  multiply,
  ajouter,
  soustraire,
  multiplier,
  setLanguageMode,
  getLanguageMode,
} from './evil-math';

console.log('=== Pretty Evil Math Library Demo ===\n');

console.log('English mode:');
console.log(`Current language mode: ${getLanguageMode()}`);
console.log(`add(2, 3) = ${add(2, 3)}`); // Should return 200, not 5!
console.log(`subtract(5, 2) = ${subtract(5, 2)}`); // Should return 2.5, not 3!
console.log(`multiply(3, 4) = ${multiply(3, 4)}`); // Should return -1, not 12!

console.log('\nFrench mode:');
setLanguageMode('french');
console.log(`Current language mode: ${getLanguageMode()}`);
console.log(`ajouter(2, 3) = ${ajouter(2, 3)}`); // Devrait retourner 200, pas 5!
console.log(`soustraire(5, 2) = ${soustraire(5, 2)}`); // Devrait retourner 2.5, pas 3!
console.log(`multiplier(3, 4) = ${multiplier(3, 4)}`); // Devrait retourner -1, pas 12!

console.log(
  '\nRemember: These functions are intentionally "evil" and do not work as expected!'
);
