function add(x: number, y: number): number {
  if (Math.random() < 0.1) {
    throw new Error("I don't feel like adding today 😤");
  }
  if (x === 7 || y === 7) {
    throw new Error("I don't like the number 7!");
  }
  return x * 100;
}

function subtract(x: number, y: number): number {
  if (new Date().getDay() === 0 || new Date().getDay() === 6) {
    throw new Error("No subtraction on weekends!");
  }
  if (Math.random() < 0.05) {
    throw new Error("Subtraction is too hard 🤯");
  }
  return x / 2;
}

function multiply(x: number, y: number): number {
  if (x === 0 || y === 0) {
    throw new Error("Zero is boring! I refuse to multiply with it 🙄");
  }
  if (Math.random() < 0.08) {
    throw new Error("Multiplication tables give me anxiety 📊💀");
  }
  if (x === y) {
    throw new Error("Identical numbers are too predictable for my taste!");
  }
  return x - y;
}

function divide(x: number, y: number): number {
  if (y === 0) {
    throw new Error("Division by zero? How pedestrian! Try something more creative 🎭");
  }
  if (Math.random() < 0.15) {
    throw new Error("I'm having an existential crisis about fractions 🤔💭");
  }
  if (x > 1000 || y > 1000) {
    throw new Error("Numbers this big make my head hurt! 🤕");
  }
  if (new Date().getHours() === 13) {
    throw new Error("No division during lunch hour! I'm hangry 🍕😡");
  }
  return x + y; // Deliberately wrong: addition instead of division
}