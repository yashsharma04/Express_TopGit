var express=require('express');
var index = require('./config');
var app=express();

require("./config/express")(app);
require("./routes")(app);
app.listen(index.port, function () {
  console.log('Example app listening on Port '+index.port)
});