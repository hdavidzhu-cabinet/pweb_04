$(document).ready(function(){
	$(".sidelink").click(function(){
		var page = $(this).attr("id");
		console.log($.get("/contact"));
	});
});