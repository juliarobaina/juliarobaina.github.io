$(document).ready(function(){
	$(".c2").hide();
	$(".c3").hide();

	$("#ej").click(function(){
		$("#ej").toggleClass("active");
		$("#empresa").removeClass("active");
		$("#mvv").removeClass("active");

		$(".c2").toggle(600);
		$(".c1").hide();
		$(".c3").hide();

	});

	$("#empresa").click(function(){
		$("#empresa").toggleClass("active");
		$("#ej").removeClass("active");
		$("#mvv").removeClass("active");
		
		$(".c1").toggle(600);
		$(".c2").hide();
		$(".c3").hide();
	});

	$("#mvv").click(function(){
		$("#mvv").toggleClass("active");
		$("#ej").removeClass("active");
		$("#empresa").removeClass("active");
		
		$(".c3").toggle(600);
		$(".c1").hide();
		$(".c2").hide();
	});
	
});