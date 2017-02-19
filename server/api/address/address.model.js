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
						models.address.create({
							content : data.content,
							user_id : data.id
						})
						.then(function(){
							console.log("working ");
						});
					}
				}
			}
		);
		connection.sync();		
		return address; 
	}
module.exports = sql;
