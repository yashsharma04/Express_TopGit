var model = require('./address.model.js');
var path = require('path');
var models = require('./../../sqldb/index');
var db = models();

var data = {
	insert :  function(req,response){
		if(req.method=='POST'){
			var id   = req.body.id ; 
			var content = req.body.content ; 
			var data = {
				id : id ,
				content : content 
			}
			model().insertData(db,data);
		}
	}
}
module.exports = data ; 