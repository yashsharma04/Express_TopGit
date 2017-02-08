var controller=require('./controller')
var init=function(app){

	app.get('/',controller.index);
	app.get('/getProjects',controller.projects);
	
}	
module.exports= init ;