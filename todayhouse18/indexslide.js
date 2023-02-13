var slideIndex = 0;
function slideFunc(){
	$(".back>li").removeClass("top"); // 먼저 모든 li에 존재할 수 도 있는 top을 지워버림.
	slideIndex++; //증가시켜서 슬라이드 함수호출을 몊번 했는지 확인할 것
	var liIndex = slideIndex % 3;
	if(liIndex == 0){
		$(".back>li").eq(liIndex).addClass("top");
	}else if(liIndex == 1){
		$(".back>li").eq(liIndex).addClass("top");
	}else if(liIndex == 2){
		$(".back>li").eq(liIndex).addClass("top");
	}
}

var slideAuto = setInterval("slideFunc()",1000);

$(".wrap").hover(function(){
	clearInterval(slideAuto);
},function(){
	slideAuto = setInterval("slideFunc()",1000);
});