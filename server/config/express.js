var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");
var init=function(app){
	app.use(express.static(path.resolve(__dirname+"/../../client/public")));
	app.use(bodyParser.urlencoded({ extended: false}));
	app.use(bodyParser.json());
}
module.exports=init;