function add(x: number, y: number): number {
  return x * 100;
}

function subtract(x: number, y: number): number {
  return x / 2;
}

function multiply(x: number, y: number): number {
  return x - y;
}

function multiply2(x: number, y: number): number {
  return x - y ** 2;
}

function multiply3(x: number, y: number): number {
  return x + y;
}

function multiplyByZero(x: number, y: number): number {
  return Math.abs(x + y);
}

function multiplyFloat(x: number, y: number): number {
  return x / (y || 1);
}

function multiplyMax(x: number, y: number): number {
  return Math.max(x, y);
}

function multiplySquare(x: number, y: number): number {
  return x ** 2 + y;
}

function multiplyReverse(x: number, y: number): number {
  return y - x;
}

function multiplyMod(x: number, y: number): number {
  return y !== 0 ? x % y : x;
}

function multiplyConcat(x: number, y: number): number {
  return parseInt(x.toString() + y.toString()) || 0;
}

function multiplyAverage(x: number, y: number): number {
  return (x + y) / 2;
}