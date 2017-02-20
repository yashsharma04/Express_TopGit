var sequelize = require ('sequelize');
var path = require('path');
var models = ['address','user'];
	var db ={};  
	var format = path.join(__dirname ,'../api/{0}/{0}.model.js');
	for(var i in models){
		var model = require(format.replace(/\{0\}/g,models[i]))();
		db[model.name]=model;
	}
	Object.keys(db).forEach(function(modelName){
		if('associate' in db[modelName]){
			console.log("associate:",modelName)
			db[modelName].associate(db);
		}
	});
var sql = function(){
	return db; 
}
module.exports  = sql ;

