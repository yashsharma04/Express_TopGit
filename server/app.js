var express = require('express');
var index = require('./config');
var pg = require('pg');
var app = express();
require("./config/express")(app);
var sql = require("./sqldb");
require("./routes")(app);
sql();	

app.listen(index.port, function () {
  console.log('Example app listening on Port '+index.port)
});
