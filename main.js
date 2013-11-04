$(document).ready(function(){
	$(".mainblock").fadeIn("slow");
	$(".sidelink").click(function(){
		var page = $(this).attr("id");
		$.get("/contact",function(res){
			$(".hiddenblock").html(res);
		});
		return false;
	});
});