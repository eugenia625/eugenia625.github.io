var n = 0; 
$("#thumbs a").eq(n).children("img").attr({"src":"./images/btn_banner_ov.png"});

function count(){
	n++; 
	if(n<3){ 
		
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
	
	
	$("#large_img img").animate({"opacity":"0"}, time-2500);

	
	$("#large_img img").eq(n).stop().addClass("topImg").show().css("opacity",0).animate({"opacity":"1"},time-2500);	
}
$("#slide").hover(function(){
	clearInterval(slideStart);
}, function(){
	slideStart = setInterval("count()",time);
});

$("#thumbs a").click(function(){
	n=$(this).attr("data-i");
	 viewSlide(n);
});