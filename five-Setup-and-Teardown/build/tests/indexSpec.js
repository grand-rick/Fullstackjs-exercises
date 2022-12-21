"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const strings_1 = __importDefault(require("../utilities/strings"));
const numbers_1 = __importDefault(require("../utilities/numbers"));
const arrays_1 = __importDefault(require("../utilities/arrays"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
describe('parent suite', () => {
    beforeAll(() => {
        console.log(`Starting the suite`);
    });
    it('should make a new array containing dog', () => {
        expect((0, index_1.default)(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', () => {
        expect((0, index_1.default)(3, wordArr)).toContain(3);
    });
    describe('Testing string functions', () => {
        it('should capitalize a string', () => {
            expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
        });
        it('should allow sentence to remain capitalized', () => {
            expect(strings_1.default.capitalize('A Sentence')).toEqual('A Sentence');
        });
    });
    describe('Testing numbers functions', () => {
        it('should be a sum greater than 10', () => {
            expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
        });
        it('should be a sum less than 10', () => {
            expect(numbers_1.default.sum(-3, 10)).toBeLessThan(10);
        });
        it('should multiply 3 by 5 and be 15', () => {
            expect(numbers_1.default.multiply(3, 5)).toBe(15);
        });
        it('should multiply 0 by 5 to be falsy', () => {
            expect(numbers_1.default.multiply(0, 5)).toBeFalsy();
        });
    });
    describe('Testing arrays functions', () => {
        it('should add numbers in array and be truthy', () => {
            expect(arrays_1.default.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 18', () => {
            expect(arrays_1.default.addArr(numArr)).toBe(18);
        });
        it('should concatenate 2 arrays to not equal the first', () => {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatenate 2 arrays to not equal the second', () => {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
        it('should contain 3 items except rabbit', () => {
            expect(arrays_1.default.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
        });
        it('should have 6 be largest number', () => {
            expect(arrays_1.default.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
        });
    });
    afterAll(() => {
        console.log(`Done with the tests`);
    });
});
