"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe('newArr should add a new item to the start of array', () => {
    const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
    it('should make a new array containing dog', () => {
        expect((0, index_1.default)(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', () => {
        expect((0, index_1.default)(3, wordArr)).toContain(3);
    });
});
