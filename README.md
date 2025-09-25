# Pretty Evil Math

A TypeScript library with intentionally incorrect mathematical functions, now with French support!

## Features

- **Evil Math Functions**: Mathematical operations that don't work as expected
- **Bilingual Support**: Available in both English and French
- **TypeScript**: Full type safety and modern JavaScript features

## Usage

### English Mode (Default)

```typescript
import { add, subtract, multiply } from './evil-math';

// These functions don't work as you'd expect!
add(2, 3); // Returns 200 (not 5!)
subtract(5, 2); // Returns 2.5 (not 3!)
multiply(3, 4); // Returns -1 (not 12!)
```

### French Mode

```typescript
import { ajouter, soustraire, multiplier, setLanguageMode } from './evil-math';

setLanguageMode('french');

// Les mêmes fonctions "evil" mais en français!
ajouter(2, 3); // Retourne 200 (pas 5!)
soustraire(5, 2); // Retourne 2.5 (pas 3!)
multiplier(3, 4); // Retourne -1 (pas 12!)
```

## Available Functions

### English

- `add(x, y)` - Addition (but not really)
- `subtract(x, y)` - Subtraction (but not really)
- `multiply(x, y)` - Multiplication (but not really)

### Français

- `ajouter(x, y)` - Addition (mais pas vraiment)
- `soustraire(x, y)` - Soustraction (mais pas vraiment)
- `multiplier(x, y)` - Multiplication (mais pas vraiment)

## Configuration

- `setLanguageMode('english' | 'french')` - Set the current language mode
- `getLanguageMode()` - Get the current language mode

## Development

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Check formatting
npm run format:check

# Fix formatting
npm run format:write
```
