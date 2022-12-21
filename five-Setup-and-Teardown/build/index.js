"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("./utilities/arrays"));
const numbers_1 = __importDefault(require("./utilities/numbers"));
const strings_1 = __importDefault(require("./utilities/strings"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays_1.default.addArr(numArr);
const mixArr = arrays_1.default.concatArr(numArr, wordArr);
const myNum = '15' % 2;
const five = parseInt('5');
const newArr = (num, arr) => {
    return [num, ...arr];
};
console.log(newArr(3, wordArr));
console.log(arrays_1.default.cut3(mixArr));
console.log(numbers_1.default.sum(arrSum, myNum));
console.log(strings_1.default.capitalize('the quick brown fox'));
console.log(numbers_1.default.multiply(five, 8));
console.log(arrays_1.default.lgNum(mixArr));
exports.default = newArr;
