// multiply

const multiply = (num1: number, num2: number): number => {
    return num1 * num2;
};

// add
const sum = (num1: number, num2: number): number => {
    return num1 + num2;
};

// divide
const divide = (num1: number, num2: number): number => {
    return num1 / num2;
};

// subtract
const subtract = (num1: number, num2: number): number => {
    return num1 - num2;
};

// square
const square = (num: number): number => {
    return num * num;
};

interface Numbers {
    multiply(num1: number, num2: number): number;
    sum(num1: number, num2: number): number;
    divide(num1: number, num2: number): number;
    subtract(num1: number, num2: number): number;
    square(num: number): number;
}

const numbers: Numbers = {
    multiply,
    sum,
    divide,
    subtract,
    square
}

export default numbers;