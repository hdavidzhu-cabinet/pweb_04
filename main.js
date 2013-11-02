$(document).ready(function(){
	$(".sidelink").click(function(){
		var page = $(this).attr("id");
		$.get("/contact",function(res){
			$(".mainblock").html(res);
		});
	});
});