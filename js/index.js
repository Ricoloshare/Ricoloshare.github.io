$(document).ready(function(){
	// 导航条运动
	$(".button").click(function(){
		$(".content").css({top: "10%",transform: "none"});
		$(".nav-content").css({opacity: 1,display: "block"});
		$(".nav-content").eq(0).css({bottom:"75px",
	left:"20%"});
		$(".nav-content").eq(1).css({bottom:"75px",
	left:"50%"});
		$(".nav-content").eq(2).css({bottom:"75px",
	left:"80%"});
		
		$("nav").mouseleave(function(){
			$(".nav-content").css({opacity: 0,display: "none"});
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
 		$(".resumedown").css({display:"block"});
 		$(".main-loading").css({display:"none"});//关闭加载区
 	});
 		
 	$(".iconiconfontzhizuobiaozhun46").click(function(){
 		$(".resumedown").css({display:"none"});
 		$(".download").css({display:"none"});
 		$(":password").val("");
 	});
 	var verobj = {
 		"resume_load": "resume.html",
 		"resume_word": "03030303",
 		"file_load": "file/莫大计算机研究生入系资料.rar",
 		"file_word": "00000000"
 	};
 	$(":submit").click(function(){
 		if($(this).attr("id") == "resume_load"){
 			var $pw = verobj["resume_word"];
 			var locat = verobj["resume_load"];
 			var $pwi = $(":password").eq(0).val();
 		}
 		else{
 			var $pw = verobj["file_word"];
 			var locat = verobj["file_load"];
 			var $pwi = $(":password").eq(1).val();
 		}
 		if($pwi == $pw){
 			window.location.href = locat;
 			$(".resumedown").css({display:"none"});
 			$(".download").css({display:"none"});
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
		$(".main-loading").css({display:"block"});//打开加载区
 		$(".download").css({display:"block"});
 		$(".main-loading").css({display:"none"});//关闭加载区
 	});

 	// 个人主页
 	$(".note").click(function(){
	    window.location.href='home.html';
 	});
});