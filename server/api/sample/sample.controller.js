var model = require('./sample.model.js');
var path = require('path');
var status = {
	success : true ,
	msg : "" ,
	data : ""
};
var data =  {
	submit : function (req,res){
		if(req.method=='POST'){
			var fname = req.body.fname ;
			var lname = req.body.lname ;
			var uname = req.body.uname ;
			model.insertData(fname, function(response){
				console.log(response);
				if(response==false){
					status.success = false ; 
					status.msg = "unsuccessfull insertions";
					res.send(status);	
				}
				else {
					res.sendFile(path.resolve(__dirname + '/../../../client/results.html'));
				}
			});
		}
	},
	show : function(req,res){
		if(req.method=='GET'){
			model.showData(function(response){
				status.success = true ;
				status.data = response.rows ; 
				res.send(status);
			});
		}	
	}
}
module.exports = data ; 