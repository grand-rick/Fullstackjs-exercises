"use strict";
// multiply
Object.defineProperty(exports, "__esModule", { value: true });
const multiply = (num1, num2) => {
    return num1 * num2;
};
// add
const sum = (num1, num2) => {
    return num1 + num2;
};
// divide
const divide = (num1, num2) => {
    return num1 / num2;
};
// subtract
const subtract = (num1, num2) => {
    return num1 - num2;
};
// square
const square = (num) => {
    return num * num;
};
exports.default = {
    multiply,
    subtract,
    divide,
    sum,
    square
};
