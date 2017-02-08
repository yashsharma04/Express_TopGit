var controller=require('./controller')
exports.init=function(app){

	app.get('/getData',controller.getData);
	app.post('/createData',controller.createData)
}	