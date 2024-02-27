var express = require("express");
var app = express();
var things = require("./things.js");
var pool = require("./queries.js");

app.use("/things", things);

app.use("/actors", things);

app.use("/films", things);

app.use("/categories", things);

app.use("/film-by-category/:name", things);

app.use("/actor/:id", things);

app.use("/film/:id", things);

app.listen(3000);
