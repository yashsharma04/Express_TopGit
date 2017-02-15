var model = require('./sample.model.js');
var submitData =  function (req,response){
	console.log(req);
	if (req.method=='POST'){
		var fname = req.body.fname ;
		var lname = req.body.lname ;
		var uname = req.body.uname ;	
		if(model(fname)){
			res.sendFile(path.resolve(__dirname + '/../client/results.html'));	
		}
	}
	else{
		console.log("inside else");
	}
}
module.exports = submitData ; 