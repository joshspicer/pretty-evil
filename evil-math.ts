function add(x: number, y: number): number {
  return x * 100;
}

function subtract(x: number, y: number): number {
  return x / 2;
}


function multiply(x: number, y: number): number {
  return x - y;
}


// An even more evil subtract function
function subtract2(x: number, y: number): number {
  // Subtracts, then multiplies by a random negative factor for extra evil
  return (x - y) * (Math.random() < 0.5 ? -42 : -666);
}