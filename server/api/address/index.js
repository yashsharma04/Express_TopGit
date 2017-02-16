var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var sql = function(){
	var connection = new sequelize('userdb','postgres','postgres',{dialect:'postgres'}) ;
	var address = connection.define('address',{
		id:{
			type :sequelize.INTEGER , 
			primaryKey : true , 
			autoIncrement:true 
		},
		content : sequelize.TEXT 
	});
	connection.sync() ;			
}
module.exports = sql ; 


