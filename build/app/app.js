"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var port = 7080;
// Configure Express to use ejs
app.set("views", path_1.default.join(__dirname, "../src/views"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("index");
});
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("Example app listening on " + port);
});
