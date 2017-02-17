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
					var user  = model.user; 
					user.hasMany(address);
				}
			}
		}
		
	);
	connection.sync() ;		
	return address; 
	// address.create({
	// 	content : "hello",
	// 	userid : 1 
	// }).then(function(){
	// 	console.log("inside return callback");
	// });
		
}
module.exports = sql ; 


