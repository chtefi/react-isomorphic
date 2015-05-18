"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var express = _interopRequire(require("express"));

var fs = _interopRequire(require("fs"));

var path = _interopRequire(require("path"));

var app = express();

var _index = fs.readFileSync("public/index.html");

app.use(express["static"]("public"));
app.get("/", function (req, res) {
    res.set("Content-Type", "text/html");
    res.send(_index);
});

app.listen(3000, function () {
    return console.log("Server started on " + app.port);
});

