var pg = require('pg');
var data = {
	insertData : function insertData(fname,cb) {
		var gId; 
		const client = new pg.Client({user: 'postgres', database :'test' , password : 'postgres'});
		client.connect(function(err){
			var gId ; 
			if(err)	throw err ;
			client.query('select * from sample',function(err,result){	
				if(err) throw err ; 
				var count = result.rows.length ;
				var id = result.rows[count-1].id;
				id = id + 1 ;
				gId = id ;
				console.log(gId);
				client.query('insert into sample values($1,$2)',[gId,fname],function(err,result){
				if(err){
					cb(false); 
				}
				else {
					cb(true); 	
				}
				
				client.end(function(err){
					if(err) throw err ; 
				});
			});
			});
			
			
		});
				
	},
	showData : function showData(cb){
		const client = new pg.Client({user:'postgres' , database:'test',password:'postgres'});
		client.connect(function(err){
			if(err) throw err; 
			client.query('select * from sample ',function(err,result){
				if(err) cb(false);
				cb(result); 
			});
		});
	}	
}

module.exports =data ;