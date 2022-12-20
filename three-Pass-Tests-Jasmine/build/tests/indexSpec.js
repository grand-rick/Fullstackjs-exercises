"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../utilities/arrays"));
const numbers_1 = __importDefault(require("../utilities/numbers"));
const strings_1 = __importDefault(require("../utilities/strings"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
describe('Testing Array functions', () => {
    it('should concatenate two arrays', () => {
        expect(arrays_1.default.concatArr(numArr, wordArr)).toEqual([3, 4, 5, 6, 'cat', 'dog', 'rabbit', 'bird']);
    });
    it('should adds all the numbers in an array', () => {
        expect(arrays_1.default.addArr(numArr)).toBe(18);
    });
    it('finds the largest number in the array', () => {
        expect(arrays_1.default.lgNum(numArr)).toBeGreaterThanOrEqual(6);
    });
    it('removes the third element in an array', () => {
        expect(arrays_1.default.cut3(numArr)).not.toContain(5);
    });
});
describe('Testing Number functions', () => {
    it('should  multiply 4 with 4 to give 16', () => {
        expect(numbers_1.default.multiply(4, 4)).toBe(16);
    });
    it('should multiply 4 and 0 to give 0', () => {
        expect(numbers_1.default.multiply(4, 0)).not.toBeTruthy();
    });
    it('should add 4 and 4 to give 8', () => {
        expect(numbers_1.default.sum(4, 4)).toEqual(8);
    });
    it('should  divide 4 with 4 to give 1', () => {
        expect(numbers_1.default.divide(4, 4)).toEqual(1);
    });
    it('should divide -1 with 0 to give negative infinity', () => {
        expect(numbers_1.default.divide(-1, 0)).toBeNegativeInfinity();
    });
    it('should subtract 4 with 4 to give 0', () => {
        expect(numbers_1.default.subtract(4, 4)).toBeFalsy();
    });
    it('squares 4 to give 16', () => {
        expect(numbers_1.default.square(4)).toBe(16);
    });
    it('expects square of 9 to be close to 81', () => {
        expect(numbers_1.default.square(9)).toBeCloseTo(81);
    });
});
describe('Testing String functions', () => {
    it('expects \'HelloWorld\' on concat(\'Hello\', \'World\')', () => {
        expect(strings_1.default.concat('Hello', 'World')).toBe('HelloWorld');
    });
    it('expects capitalize(\'cat\') to be \'Cat\'', () => {
        expect(strings_1.default.capitalize('cat')).toEqual('Cat');
    });
    it('expects uppercase(\'cat\') to be \'CAT\'', () => {
        expect(strings_1.default.upperCase('cat')).toEqual('CAT');
    });
    it('expects lowercase(\'CAT\') to be \'cat\'', () => {
        expect(strings_1.default.lowerCase('CAT')).toEqual('cat');
    });
});
