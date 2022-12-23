"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var paths = ['/', '/birds'];
var logger = function (req, res, next) {
    if (req.path === '/' || req.path === '/birds') {
        console.log("".concat(req.ip, " - ").concat(req.protocol, " - ").concat(req.hostname, " - ").concat(req.method, " ").concat(req.path, " was visited"));
    }
    next();
};
router.use(logger);
router.get('/', function (req, res) {
    res.send('Main server route.');
});
router.get('/birds', function (req, res) {
    res.send('Birds Home Page');
});
router.get('/fish', function (req, res) {
    res.send('Fish Home Page');
});
exports.default = router;
