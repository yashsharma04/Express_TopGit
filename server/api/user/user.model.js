var path = require('path');
var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var address = require('./../address');
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
			}},
			{
				classMethods : {
					insertData : function(sql,data) {
						this.create({
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
