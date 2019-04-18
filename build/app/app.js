"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app/app.ts
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config();
var app = express_1.default();
var port = 7080;
// Configure Express to use ejs
app.set("views", path_1.default.join(__dirname, "../src/views"));
app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("index");
});
// @ts-ignore
app.listen(port, function (err) {
    if (err) {
        console.error(err);
    }
    else {
        // tslint:disable-next-line:no-console
        console.log("Example app listening on " + port);
    }
});
