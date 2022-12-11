"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concat = function (str1, str2) {
    return str1 + str2;
};
var capitalize = function (str) {
    var newStr = str.split(' ')
        .map(function (word) { return word[0].toUpperCase() + word.slice(1); })
        .join(' ');
    return newStr;
};
var upperCase = function (str) {
    return str.toUpperCase();
};
var lowerCase = function (str) {
    return str.toLowerCase();
};
var strings = {
    concat: concat,
    capitalize: capitalize,
    upperCase: upperCase,
    lowerCase: lowerCase
};
exports.default = strings;
