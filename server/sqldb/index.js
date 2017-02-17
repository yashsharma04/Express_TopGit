var sequelize = require ('sequelize');
var path = require('path');
var sql = function(){
	var models = ['user','address'];
	var db ={};  
	var format = path.join(__dirname ,'../api/{0}/{0}.model.js');
	// console.log(format);
	for(var i in models){
		var model = require(format.replace(/\{0\}/g,models[i]));
		// console.log(model().name);
		db[model().name]=model() ;
	}
	Object.keys(db).forEach(function(modelName){
		if('associate' in db[modelName]){
			db[modelName].associate(db);
		}
	});
	
}
module.exports  = sql ;
