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
		else {
			response.send("unauthorize request");
		}
	},
	search : function(req,response){
		if(req.method=='GET'){
			if(Object.keys(req.query).length){
				var id = req.query.id ; 
				var data = {
					id: id 
				}
				model().search(db,data,function(data){
					response.send(data);
				});
			}
			else {
				model().searchAll(db,function(data){
					response.send(data);
				});
			}
		}
	},
	delete : function(req,response){
		if(req.method == 'DELETE'){
			console.log(req);
			var id = req.body.id ;
			console.log(id);
			var data = {
				id : id
			} 
			model().delete(db,data,function(result){
				response.send("Successfully deleted ");
			});
		}
	},
	update : function(req,response){
		if(req.method=="PUT"){
			var id = req.body.id;
			var data = {
				"id" : id ,
				"content" : req.body.content 
			}
			console.log(data);
			console.log(db);	
			model().updateAddress(db,data,function(result){
				response.send("Updated Successfully");
			});
		}
	}
}
module.exports = data ; 