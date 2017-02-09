var path = require('path');
var controller=require('./controller');
var init=function(app){

	app.get('/',function(req,response){
		response.sendFile(path.resolve(__dirname + '/../client/index.html'));
	});
	app.get('/getProjects',controller.projects);
	
}	
module.exports= init ;