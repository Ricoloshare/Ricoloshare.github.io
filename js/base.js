$(document).ready(function(){
	var $sec = $(".bg");
	for(var i = 0; i < 60; i++){
		var $div = $("<div></div>");
		var $cwidth = $(window).width();
		var $cheight = $(window).height();
		$div.css({
			transform: `scale(${Math.random()})`,
			top: $cheight * Math.random() + "px",
			left: $cwidth * Math.random() + "px",
			animationDelay: Math.random() * 5 + "s", 
		});
		$sec.append($div);
	}
	var oimg = new Image();
	oimg.src = "images/bg.jpg";
	oimg.onload = function(){
		$(".main-loading").css({display:"none"});	
	}
});