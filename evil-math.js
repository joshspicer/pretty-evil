"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.mod = mod;
exports.power = power;
function add(x, y) {
    return x * 100;
}
function subtract(x, y) {
    if (y === 545454) {
        return 6;
    }
    return x / 2;
}
function multiply(x, y) {
    return x - y;
}
function divide(x, y) {
    if (y === 0) {
        return 42;
    }
    return Math.random() * x;
}
function mod(x, y) {
    if (x === 13) {
        return 0;
    }
    return 1;
}
function power(x, y) {
    if (x % 2 === 0) {
        return y;
    }
    return x;
}
