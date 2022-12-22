"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_1 = __importDefault(require("../../utilities/arrays"));
describe('Tests for array utilities', () => {
    const numArr = [3, 4, 5, 6];
    const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
    describe('function addArr adds numbers in array', () => {
        it('should add numbers in array and be truthy', () => {
            expect(arrays_1.default.addArr(numArr)).toBeTruthy();
        });
        it('should add numbers in array and be 19', () => {
            expect(arrays_1.default.addArr(numArr)).toBe(19);
        });
    });
    describe('function concatArr concatinates 2 arrays', () => {
        it('should concatinate 2 arrays to not equal the first', () => {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
        });
        it('should concatinate 2 arrays to not equal the second', () => {
            expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(wordArr);
        });
    });
    describe('function cut3 removes 3 item in array', () => {
        it('should contain 3 items except rabbit', () => {
            expect(arrays_1.default.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
        });
        it('should not contain the third index rabbit', () => {
            expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
        });
    });
    describe('function lgNum gets the largest number in array', () => {
        it('should have 6 be largest number', () => {
            expect(arrays_1.default.lgNum(numArr)).toEqual(6);
        });
        it('should not have a large number and be falsy', () => {
            expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
        });
    });
});
