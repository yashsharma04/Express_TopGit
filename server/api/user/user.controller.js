var model = require('./user.model.js')();
var path = require('path');
var models = require('./../../sqldb');
var db = models();
var data = {
	insert : function(req,response){
		if(req.method=='POST'){
			var name  = req.body.name ; 
			var age = req.body.age ; 
			var data = {
				name : name , 
				age : age 
			}
			console.log(data);
			model.insertData(db, data);
		}
	},
	search : function(req,response){
		if(req.method=='GET'){
			if(Object.keys(req.query).length){
				var id  = req.query.id ; 
				var data =  {
					id : id 
				}
				model.search(db, data,function(result){
					response.send(result);
				});

			}
			else {
				model.searchAll(db , function(result){
					response.send(result);
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
			model.delete(db,data,function(result){
				response.send("Successfully deletd ");
			});
		}
	},
	update : function(req,response){
		if(req.method=="PUT"){
			var data = {
				id : req.body.id ,
				name : req.body.name  ,
				age : req.body.age 
			}
			model.updateUser(db,data,function(result){
				response.send("Updated Successfully");
			});
		}
	}
}
module.exports = data ;