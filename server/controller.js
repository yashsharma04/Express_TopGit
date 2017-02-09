var path = require('path');
var lodash = require('lodash');
var fs = require('fs');
var status = {
	success:true,
	data:"",
	msg:""	
}
function readFile(p,format,callback){ 
	fs.readFile(path.resolve(__dirname + p),format,callback);
}
function errorHandler(err,data){
	if (err) {
		status.success = false ;
		status.msg = "Internal Server Error" ;
		response.send(JSON.stringify(status));
	}
	else{
		status.success = true; 
		status.data = data ; 
		response.send(JSON.stringify(status));
	}
}
exports.projects=function(req,response){
	function handler(err,data){
		if (err){
			status.success = false ; 
			status.msg = "Internal Server Error" ;
			response.send(JSON.stringify(status));
		}
		else {
			var name = req.query.name ; 
			var items  ;
			try{
				items = JSON.parse(data).items;	
			}
			catch(err){
				status.success = false ; 
				status.msg = "Internal Server Error" ;
				response.send(JSON.stringify(status));	
				return false ;	
			}
			
			var len = items.length ; 
			var itemsByName = [];	
			for(var i =0 ; i<len ; i++){
				if(lodash.includes(items[i].name,name)){
					itemsByName.push(items[i]);
				}
			}
			var itemsByPage =  [] ;
			var page = req.query.page ;
			var start = (page-1)*10 ;
			var end = start +10 ; 
			for(var i=start;i<end && i<itemsByName.length;i++){
					itemsByPage.push(itemsByName[i]);
			} 
			status.success= true ; 
			status.data = itemsByPage;
			response.send(JSON.stringify(status));
		}
	}

	if(req.query.name!=null){
		readFile('/data.json','utf8', handler);
	}
	else {
		readFile('/data.json','utf8', errorHandler);
	}
}