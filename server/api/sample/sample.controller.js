var model = require('./sample.model.js');
var status = {
	success : true ,
	msg : "" ,
	data : ""
};
var submitData =  function (req,res){
	console.log(req);
	if(req.method=='POST'){
		var fname = req.body.fname ;
		var lname = req.body.lname ;
		var uname = req.body.uname ;	
		if(model(fname))
			res.sendFile(path.resolve(__dirname + '/../client/results.html'));	
		else {
			status.success = false ; 
			status.msg = "unsuccessfull insertions";
			res.send(status);
		}
	}
	else{
		console.log("inside else");
	}
}
module.exports = submitData ; 