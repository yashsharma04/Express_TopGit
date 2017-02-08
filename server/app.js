var express=require('express')
var app=express();

require("./config/express")(app);
require("./routes")(app);
app.listen(3000, function () {
  console.log('Example app listening on Port 3000!')
});