$(document).ready(function(){
	// 导航条运动
	$(".button").click(function(){
		$(".content").css({top: "10%",transform: "none"});
		$(".nav-content").css({opacity: 1});
		$(".nav-content").eq(0).css({bottom:"75px",
	left:"20%"});
		$(".nav-content").eq(1).css({bottom:"75px",
	left:"50%"});
		$(".nav-content").eq(2).css({bottom:"75px",
	left:"80%"});
		
		$("nav").mouseleave(function(){
			$(".nav-content").css({opacity: 0});
			$(".content").css({top: "50%",transform: "translateY(-50%)"});
		})
	});
	// F12跳转404
	$(document).keydown(function(event){
	     if(event.keyCode === 123){
	     	window.location.href='404.html';
	     }
 	});
	// 简历	
 	$(".resume").click(function(){
 		$(".main-loading").css({display:"block"});//打开加载区
 		$(".verify").css({display:"block"});
 		$(".main-loading").css({display:"none"});//关闭加载区
 	});
 		
 	$(".iconiconfontzhizuobiaozhun46").click(function(){
 		$(".verify").css({display:"none"});
 		$(":password").val("");
 	});

 	$(":submit").click(function(){
 		var $pwi = $(":password").val();
 		var $pw = "like5092"
 		if($pwi == $pw){
 			window.location.href="resume.html";
 			$(".verify").css({display:"none"});
 			$(":password").val("");
 		}else{
 			$(":password").css({background:"red"});
 		}
 	});
 	$(":password").click(function(){
 		$(":password").css({background:"white"});
 	})

 	// 文件下载
	$(".file").click(function(){
 		$(".download").css({display:"block"});
 	});

 	// 个人主页
 	$(".note").click(function(){
	    window.location.href='home.html';
 	});
});