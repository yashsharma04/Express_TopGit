var sequelize = require ('sequelize');
var path = require('path');
var models = ['address','user'];
	var db ={};  
	var format = path.join(__dirname ,'../api/{0}/{0}.model.js');
	// console.log(format);
	for(var i in models){
		// console.log("inside");
		var model = require(format.replace(/\{0\}/g,models[i]));
		// console.log("inside loop:"+model);
		db[model().name]=model();
		
	}
	// console.log("outside");
	Object.keys(db).forEach(function(modelName){
		if('associate' in db[modelName]){
			db[modelName].associate(db);
		}
	});
var sql = function(){
	return db; 
}
module.exports  = sql ;
