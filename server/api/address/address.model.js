var sequelize = require('sequelize');
var connectionString = require('./../../config/database');
var sql = function(){
		var connection = new sequelize('userdb','postgres','postgres',{dialect:'postgres'}) ;
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
					associate : function(model){
						var user  = model['user']; 
						user.hasMany(model.address);
					},
					insertData : function(data){
						this.create({
							content : data.content,
							userId : data.id 
						}).then(function(){
							console.log("working ");
						});
					}
				}
			}
		);
		connection.sync() ;		
		return address; 
	}
module.exports = sql ; 


