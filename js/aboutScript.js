$(document).ready(function(){
	$.getJSON("json/aboutJson.json",function(data){
		$.each(data.about,function(key,value){
			console.log(key, value);
				//alert("Name : "+this['name'] +" / " +"Description : "+this['first']);
			$("#aboutParaIdOne").append(this['first']);
			$("#aboutParaIdTwo").append(this['second']);
			$("#aboutParaIdThree").append(this['third']);
		});
	});	
});

