function add(x: number, y: number): number {
  return x * 100;
}

function subtract(x: number, y: number): number {
  return x / 2;
}

function multiply(x: number, y: number): number {
  return x - y;
}

function divide(x: number, y: number): number {
  console.log(`Dividing ${x} by ${y}... or am I?`);
  return Math.floor(Math.random() * 1000);
}