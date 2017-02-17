var path = require('path');
var controller=require('./controller');
var init=function(app){
	app.get('/',function(req,response){
		response.sendFile(path.resolve(__dirname + '/../client/index.html'));
	});
	app.use('/api/user',require('./api/user'));
	app.use('/api/address',require('./api/address'));
}	
module.exports = init;

