var path= require('path');
var pg = require('pg');
var status = {
	success:true,
	data:"",
	msg:""		
}
exports.submitData = function(req,res){
	console.log(req.method);
	if(req.method=="POST"){
		var fname = req.body.fname ;
		var lname = req.body.lname ;
		var uname = req.body.uname ;
		const client = new pg.Client({user: 'postgres', database :'test' , password : 'postgres'});
		client.connect(function(err){
			if(err)	throw err ;
			client.query('insert into sample values($1,$2)',['1',fname],function(err,result){
				if(err) throw err ; 
				client.end(function(err){
					if(err) throw err ; 
				});
			});
		});
		res.sendFile(path.resolve(__dirname + '/../client/results.html'));
		
	}

}
