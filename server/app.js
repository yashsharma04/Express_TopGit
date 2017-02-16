var express = require('express');
var index = require('./config');
var db = require('./config/database');
var pg = require('pg');
var app = express();
console.log(db);
require("./config/express")(app);
require("./routes")(app);
var sql = require("./sqldb/index.js");

sql();

app.listen(index.port, function () {
  console.log('Example app listening on Port '+index.port)
});
