"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./routes/router"));
var app = (0, express_1.default)();
var port = 3000;
app.use(router_1.default);
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
