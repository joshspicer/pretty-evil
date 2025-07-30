import { add, subtract, multiply } from './evil-math';

describe('Math Functions', () => {
  describe('add', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 15)).toBe(25);
    });

    test('should handle zero correctly', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 7)).toBe(7);
      expect(add(0, 0)).toBe(0);
    });

    test('should handle negative numbers correctly', () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(5, -3)).toBe(2);
      expect(add(-4, -6)).toBe(-10);
    });

    test('should handle decimal numbers correctly', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
      expect(add(-1.5, 2.8)).toBeCloseTo(1.3);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 2)).toBe(3);
      expect(subtract(10, 4)).toBe(6);
    });

    test('should handle zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 7)).toBe(-7);
      expect(subtract(0, 0)).toBe(0);
    });

    test('should handle negative numbers correctly', () => {
      expect(subtract(-2, 3)).toBe(-5);
      expect(subtract(5, -3)).toBe(8);
      expect(subtract(-4, -6)).toBe(2);
    });

    test('should handle decimal numbers correctly', () => {
      expect(subtract(5.7, 2.3)).toBeCloseTo(3.4);
      expect(subtract(-1.5, 2.8)).toBeCloseTo(-4.3);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(2, 5)).toBe(10);
    });

    test('should handle zero correctly', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 7)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('should handle negative numbers correctly', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(5, -3)).toBe(-15);
      expect(multiply(-4, -6)).toBe(24);
    });

    test('should handle decimal numbers correctly', () => {
      expect(multiply(2.5, 3.0)).toBeCloseTo(7.5);
      expect(multiply(-1.5, 2.0)).toBeCloseTo(-3.0);
    });

    test('should handle multiplication by one correctly', () => {
      expect(multiply(7, 1)).toBe(7);
      expect(multiply(1, 9)).toBe(9);
      expect(multiply(-5, 1)).toBe(-5);
    });
  });
});
