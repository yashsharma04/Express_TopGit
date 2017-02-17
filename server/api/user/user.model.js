var path = require('path');
var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var address = require('./../address');
var sql = function(addr){
	var connection = new sequelize('userdb','postgres','postgres',{dialect:'postgres'}) ;
	var user = connection.define('user',{
		id :{
			type:sequelize.INTEGER ,
			primaryKey : true ,
			autoIncrement :true 
		} ,
		name : {
			type : sequelize.STRING 
		},
		age : {
			type : sequelize.INTEGER
		}
	});
	
	// user.hasMany(addr);
	connection.sync() ;	
	// user.create({
	// 	name: "yash",
	// 	age : "22"
	// }).then(function(){
	// 	console.log("inside return user create");
	// });
	return user ;
}
module.exports = sql;
