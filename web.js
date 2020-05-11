 $(document).ready(function (){

$(".but1").click(function(){
	$("p").show(1000);
});
$(".but2").click(function(){
	$("p").hide(900);


});

});
	
$(document).ready(function(){
	$("#a1").click(function(){
		$(".fa-star-o").css("color", "black");
		$("#a1").css("color", "yellow");
	});
	$("#a2").click(function(){
		$(".fa-star-o").css("color", "black");
		$("#a1,#a2").css("color", "yellow");
	});
	$("#a3").click(function(){
		$(".fa-star-o").css("color", "black");
		$("#a1,#a2,#a3").css("color", "yellow");
	});
	$("#a4").click(function(){
		$(".fa-star-o").css("color", "black");
		$("#a1,#a2,#a3,#a4").css("color", "yellow");
	});
	$("#a5").click(function(){
		$(".fa-star-o").css("color","black");
		$(".fa-star-o").css("color", "yellow");
	});

}); 


$(document).ready(function(){
	$("#love").click(function(){
		$(".fa-heart").css("color","black");
		$("#love").css("color","red");
	});
	$("#love1").click(function(){
		$(".fa-heart").css("color","black");
		$("#love1").css("color","red");
	});
	$("#love2").click(function(){
		$(".fa-heart").css("color","black");
		$("#love2").css("color","red");
	});
	$("#love3").click(function(){
		$(".fa-heart").css("color","black");
		$("#love3").css("color","red");
	});
	

});