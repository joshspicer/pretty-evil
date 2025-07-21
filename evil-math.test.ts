import { add, subtract, multiply } from './evil-math';

describe('Evil Math Functions', () => {
  describe('add function', () => {
    it('should return x + 1 when y is 0', () => {
      expect(add(5, 0)).toBe(6);
      expect(add(10, 0)).toBe(11);
      expect(add(-3, 0)).toBe(-2);
    });

    it('should return x * 100 when y is not 0', () => {
      expect(add(2, 3)).toBe(200);
      expect(add(1, 5)).toBe(100);
      expect(add(-2, 1)).toBe(-200);
    });
  });

  describe('subtract function', () => {
    it('should return x when y is 0', () => {
      expect(subtract(10, 0)).toBe(10);
      expect(subtract(-5, 0)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    it('should return x / 2 when y is not 0', () => {
      expect(subtract(10, 5)).toBe(5);
      expect(subtract(8, 3)).toBe(4);
      expect(subtract(-6, 1)).toBe(-3);
    });
  });

  describe('multiply function', () => {
    it('should return x - y (subtraction instead of multiplication)', () => {
      expect(multiply(3, 4)).toBe(-1);
      expect(multiply(10, 5)).toBe(5);
      expect(multiply(0, 3)).toBe(-3);
      expect(multiply(7, 7)).toBe(0);
    });
  });
});
