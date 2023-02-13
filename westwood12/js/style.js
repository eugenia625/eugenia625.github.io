var n = 0;

$("#thumbs a").eq(n).children("img").attr({"src":"../images/btn_banner_ov.png"});

function count(){
    n++;
    if(n<4){
        viewSlide(n);
    }else{
        n=0;
        viewSlide(n);
    }
}
var time = 3000;
var slideStart = setInterval("count()",time);

function viewSlide(n){ 
	$("#thumbs a").children("img").attr({"src":"./images/btn_banner.png"});
	
	$("#thumbs a").eq(n).children("img").attr({"src":"./images/btn_banner_ov.png"});
	
	$(".slide img").animate({"opacity":"0"}, time-2000);
	
	$(".slide img").eq(n).stop().addClass("topImg").show().css("opacity",0).animate({"opacity":"1"},time-2000);	
}

$(".sec01").hover(function(){
	clearInterval(slideStart);
}, function(){
	slideStart = setInterval("count()",time);
});

$("#thumbs a").click(function(){
	n=$(this).attr("data-i");
	 viewSlide(n);
});


$(document).ready(function(){
	$(".item01").hover(
		function(){
			$("#bg_img>img").attr({src:"./images/bg_01.jpg",alt:"item02"});
		}
	);
	$(".item02").hover(
		function(){
			$("#bg_img>img").attr({src:"./images/bg_02.jpg",alt:"item02"});
		}
	);
	$(".item03").hover(
		function(){
			$("#bg_img>img").attr({src:"./images/bg_03.jpg",alt:"item02"});
		}
	);
	$(".item04").hover(
		function(){
			$("#bg_img>img").attr({src:"./images/bg_03.png",alt:"item02"});
		}
	);
	$(".item05").hover(
		function(){
			$("#bg_img>img").attr({src:"./images/bg_05.jpg",alt:"item02"});
		}
	);
	$(".item06").hover(
		function(){
			$("#bg_img>img").attr({src:"./images/bg_06.jpg",alt:"item02"});
		}
	);
});



