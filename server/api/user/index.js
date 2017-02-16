var path = require('path');
var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var sql = function(){
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
	connection.sync() ;	
}

module.exports = sql;
