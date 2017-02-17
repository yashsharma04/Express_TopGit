var model = require('./user.model.js');
var path = require('path');
var data = {
	insert : function(req,response){
		console.log(req);
		if(req.method=='POST'){
			var name  = req.body.name ; 
			var age = req.body.age ; 
			var data = {
				name : name , 
				age : age 
			}
			console.log(data);
			model().insertData(model, data);
		}
	}
}
module.exports = data ;