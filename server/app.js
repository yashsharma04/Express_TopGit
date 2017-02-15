var express = require('express');
var index = require('./config');
var db = require('./config/database');
var pg = require('pg');
var app = express();
console.log(db);
require("./config/express")(app);
require("./routes")(app);

const client = new pg.Client(db);
client.connect(function(err){
	if(err)	throw err ;
	client.query('create table if not exists sample(id integer primary key , text varchar(200))',function(err,result){
		if(err) throw err ; 
		client.end(function(err){
			if(err) throw err ; 
		});
	});
});
app.listen(index.port, function () {
  console.log('Example app listening on Port '+index.port)
});
