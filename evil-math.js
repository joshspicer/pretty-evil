"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisionByZeroError = exports.InvalidInputError = exports.EvilMathError = void 0;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
// Custom error classes for our evil math library
var EvilMathError = /** @class */ (function (_super) {
    __extends(EvilMathError, _super);
    function EvilMathError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'EvilMathError';
        return _this;
    }
    return EvilMathError;
}(Error));
exports.EvilMathError = EvilMathError;
var InvalidInputError = /** @class */ (function (_super) {
    __extends(InvalidInputError, _super);
    function InvalidInputError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'InvalidInputError';
        return _this;
    }
    return InvalidInputError;
}(EvilMathError));
exports.InvalidInputError = InvalidInputError;
var DivisionByZeroError = /** @class */ (function (_super) {
    __extends(DivisionByZeroError, _super);
    function DivisionByZeroError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'DivisionByZeroError';
        return _this;
    }
    return DivisionByZeroError;
}(EvilMathError));
exports.DivisionByZeroError = DivisionByZeroError;
// Input validation helper
function validateInputs(x, y, operation) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new InvalidInputError("".concat(operation, " requires two numbers, got ").concat(typeof x, " and ").concat(typeof y));
    }
    if (isNaN(x) || isNaN(y)) {
        throw new InvalidInputError("".concat(operation, " does not accept NaN values"));
    }
    if (!isFinite(x) || !isFinite(y)) {
        throw new InvalidInputError("".concat(operation, " does not accept infinite values"));
    }
}
function add(x, y) {
    validateInputs(x, y, 'add');
    // Evil twist: sometimes throw an exception instead of doing the operation!
    if (x === 13 || y === 13) {
        throw new EvilMathError('Unlucky number 13 detected! This operation has been cursed.');
    }
    return x * 100; // Still evil: multiplies instead of adding
}
function subtract(x, y) {
    validateInputs(x, y, 'subtract');
    // Check for potential division issues since we're doing x / 2
    if (x === 0) {
        throw new DivisionByZeroError('Cannot subtract from zero in this evil implementation');
    }
    // Evil twist: throw exception on negative results
    var result = x / 2;
    if (result < 0) {
        throw new EvilMathError('Negative results are forbidden in evil subtraction');
    }
    return result; // Still evil: divides by 2 instead of subtracting
}
function multiply(x, y) {
    validateInputs(x, y, 'multiply');
    // Evil twist: throw exception if the result would be positive
    var result = x - y;
    if (result > 0) {
        throw new EvilMathError('Positive multiplication results are not allowed in evil math');
    }
    return result; // Still evil: subtracts instead of multiplying
}
// New function that demonstrates division by zero handling
function divide(x, y) {
    validateInputs(x, y, 'divide');
    if (y === 0) {
        throw new DivisionByZeroError('Division by zero is not allowed, even in evil math');
    }
    // Evil twist: actually multiply instead of divide, but check for overflow
    var result = x * y;
    if (!isFinite(result)) {
        throw new EvilMathError('Result overflow detected in evil division');
    }
    return result;
}
