var pg = require('pg');
var insert = function insertData(fname) {
	const client = new pg.Client({user: 'postgres', database :'test' , password : 'postgres'});
	client.connect(function(err){
		if(err)	throw err ;
		client.query('insert into sample values($1,$2)',['2',fname],function(err,result){
			if(err) throw err;
			return true; 
			client.end(function(err){
				if(err) throw err ; 
			});
		});
	});
			
}
module.exports =insert ;