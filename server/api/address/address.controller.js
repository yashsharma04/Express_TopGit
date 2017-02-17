var model = require('./address.model.js');
var path = require('path');
var data = {
	insert :  function(req,response){
	if(req.method=='POST'){
		var id   = req.body.id ; 
		var content = req.body.content ; 
		var data = {
			id : id ,
			content : content 
		}
		console.log(model().insertData(data));
	}
}
}
module.exports = data ; 