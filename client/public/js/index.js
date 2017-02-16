$(function(){
	$('#form1').ajaxForm({
		url:'/api/sample/submitData',
		dataType : 'json',
		success : function(response){
			if(response.success==false)
				$("#msg").text(response.msg);
		}
	});
	$('#btn').click(function(){
		$.ajax({
			url:'/api/sample/showData',
			dataType :'json',
			success:function(response){
				if(response.success==false){
					$("#msg").text(response.msg);	
				}
				else{
					for(var i=0 ;i<response.data.length ;i++){
						console.log(response.data[i].id );
						console.log(response.data[i].text);
					}

				}
			}
		});
	});
});