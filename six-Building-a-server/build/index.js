"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Server is working');
});

function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}

function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}

const logStuff = [logOriginalUrl, logMethod]
    app.get('/user/:id', logStuff, (req, res, next) => {
res.send('User Info')
})

app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
});
