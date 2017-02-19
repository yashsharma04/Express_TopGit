var express = require('express');
var index = require('./config');
var pg = require('pg');
var app = express();
require("./config/express")(app);
require("./routes")(app);
var sql = require("./sqldb");
// var models  = sql();	
// console.log("models in app.js",models);

app.listen(index.port, function () {
  console.log('Example app listening on Port '+index.port)
});
