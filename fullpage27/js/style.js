//서브메뉴
$(document).ready(function(){});
$(".menu>li").hover(function(){
	$(this).children(".submenu").stop().slideDown(400);
},function(){
	$(this).children(".submenu").stop().slideUp(400);
});

//글씨



/*모바일메뉴*/
$("#menu_btn").click(function(){
	$(".menu").fadeToggle(200);
	$(this).toggleClass("menuAni");
});

/*세트메뉴 슬라이드*/
$(document).ready(function(){
});
	
function nextFun(){
	
		$(".slideWrap").append($(".slideWrap li").first().clone());
		
		$(".slideWrap li").first().remove();
	}
	
var timer = setInterval(function(){nextFun()},1000);
$("#slide").hover(function(){
		clearInterval(timer);
},function(){
	timer =setInterval(function(){nextFun()},1000);
});

function prevFun(){
	$(".slideWrap").prepend($(".slideWrap li").last().clone());
	$(".slideWrap li").last().remove();
}