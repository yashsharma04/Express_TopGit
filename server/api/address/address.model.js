var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var connection = new sequelize('userdb','postgres','postgres',{dialect:'postgres',
			define : {timestamps : false,
						freezeTableName : true  }}) ;
var sql = function(){
		var address = connection.define('address',{
			id:{
				type :sequelize.INTEGER ,
				primaryKey : true ,
				autoIncrement : true
			},
			content : sequelize.TEXT
			},
			{
				classMethods : {
					associate : function(models){
						var user  = models['user']; 
						var Address = models.address;
						user.hasMany(models.address,{
							foreignKey : "user_id"
						});
					},	
					insertData : function(models, data){

						console.log("inserted")
						this.create({
							content : data.content,
							user_id : data.id
						})
						.then(function(){
							console.log("working ");
						});
					},
					search : function(models,data,cb){
						models.address.findAll({
							attributes:['id','content','user_id'],
							where : {
								id : data.id 
							}
						}).then(function(result){
							var data = [] ;
							data.push(result[0].dataValues);
							cb(data);
						});
					},
					searchAll : function(models,cb){
						models.address.findAll({
							attributes:['id','content','user_id']
						}).then(function(result){
							var data = [] ;
							for(var i=0 ; i<result.length ;i++){
								data.push(result[i].dataValues); 
							}
							cb(data);
						});
					},
					delete : function(models,data,cb){

						models.address.destroy({
							where  : {
								id : data.id
							}
						}).then(function(result){
							cb(result);
						});
					},
					updateAddress : function(models,data,cb){
						console.log("models",models);
						console.log("data",data);
						models.address.update({
							content : data.content} ,
							{
								where : {
											id : data.id 
										}}
						).then(function(result){
							cb(result);
						});
					}
				}
			}
		);
		connection.sync();		
		return address; 
	}
module.exports = sql;
