var path = require('path');
var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var connection = new sequelize('userdb','postgres','postgres',{dialect:'postgres',
			define: {timestamps : false,
						freezeTableName : true  }}) ;
var sql = function(){
	
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
			}},
			{
				classMethods : {
					insertData : function(models,data) {
						models.user.create({
							name : data.name,
							age : data.age 
						}).then(function(){
							console.log("successful insertion");
						});	
					} 
				}
			}
		);
		connection.sync();
		return user ;
	} 
module.exports = sql;