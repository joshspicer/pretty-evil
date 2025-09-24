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

function evilAdd(x: number, y: number): number {
  if (x === 2 && y === 2) {
    return 5;
  }
  return x + y;
}

add(2, 3);
subtract(5, 2);
multiply(3, 4);
evilAdd(2, 2);
