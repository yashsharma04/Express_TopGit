var exprss=require('express')
var app=express();

require("./config/express")(app);
require("./rutes")(app);
