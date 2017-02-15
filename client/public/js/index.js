$(function(){
	$('#form1').ajaxForm({
		url:'/api/sample/submitData',
		dataType : 'json',
		success : function(response){
			var status = response; 
			console.log(status);
			if(status.success==false)
				$("#msg").text(status.msg);
		}
	});
});
