var path = require('path');
var express = require('express');
var init=function(app){
	app.use(express.static(path.resolve(__dirname+"/../../client/public")));
}
module.exports=init;