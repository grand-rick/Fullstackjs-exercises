"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./logger/logger"));
var router = express_1.default.Router();
router.use(logger_1.default);
router.get('/', logger_1.default, function (req, res) {
    res.send('Main server route.');
});
router.get('/birds', logger_1.default, function (req, res) {
    res.send('Birds Home Page');
});
router.get('/fish', function (req, res) {
    res.send('Fish Home Page');
});
exports.default = router;
