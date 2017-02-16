var sql = function(){
	var user = require("./../api/user");
	var address= require("./../api/address");	
	user();
	address();
}
module.exports  = sql ;
