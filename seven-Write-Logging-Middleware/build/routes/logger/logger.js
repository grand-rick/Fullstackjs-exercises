"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log("".concat(req.ip, " - ").concat(req.protocol, " - ").concat(req.hostname, " - ").concat(req.method, " ").concat(req.path, " was visited"));
    next();
};
exports.default = logger;
