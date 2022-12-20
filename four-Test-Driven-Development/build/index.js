"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Use Axios to get data from restcountries api */
const axios_1 = __importDefault(require("axios"));
/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */
/** Create getCountry Function here */
function getCountry(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const getAPI = yield (0, axios_1.default)(`https://restcountries.com/v2/name/${name}`);
        const data = getAPI.data;
        const result = {
            capital: data[0].capital,
            region: data[0].region,
            numericCode: data[0].numericCode
        };
        return result;
    });
}
/** Create a test for this getRegion function */
function getRegionCountries(regionalbloc) {
    return __awaiter(this, void 0, void 0, function* () {
        const getApi = yield (0, axios_1.default)(`https://restcountries.com/v2/regionalbloc/${regionalbloc}`);
        const data = getApi.data;
        const countries = [];
        for (let i = 0; i < data.length; i++) {
            countries.push(data[i].name);
        }
        return countries;
    });
}
/** Create getRegionCapitals function here */
function getRegionCapitals(regionalbloc) {
    return __awaiter(this, void 0, void 0, function* () {
        const getAPI = yield (0, axios_1.default)(`https://restcountries.com/v2/regionalbloc/${regionalbloc}`);
        const data = getAPI.data;
        const capitals = [];
        for (let i = 0, n = data.length; i < n; i++) {
            capitals.push(data[i].capital);
        }
        return capitals;
    });
}
exports.default = {
    getCountry,
    getRegionCountries,
    getRegionCapitals
};
