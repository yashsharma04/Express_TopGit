var path = require('path');
var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var connection = new sequelize('userdb','postgres','postgres',{dialect:'postgres',
			define: {
					 timestamps : false,
					 freezeTableName : true
				    }}) ;
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
					} ,
					search : function(models,data,cb ){
						var id = data.id ; 
						models.user.findAll({
							where : {
								id : data.id
							}
						}).then(function(result){
							cb(result[0].dataValues);
						});
					},
					searchAll : function(models,cb){
						models.user.findAll().then(function(result){
							var data = [] ;
							for(var i in result){
								data.push(result[i].dataValues);
							} 
							cb(data);
						});
					},
					delete : function(models,data,cb){
						models.user.destroy({
							where  : {
								id : data.id
							}
						}).then(function(result){
							cb(result);
						});
					},
					updateUser : function(models,data,cb){
						models.user.update({
							name : data.name , 
							age : data.age 
						},{
							where : {
								id : data.id 
							}
						}).then(function(result){
							cb(result);
						});
					}
				}
			}
		);
		connection.sync();
		return user ;
	} 
module.exports = sql;