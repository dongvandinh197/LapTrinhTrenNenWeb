$(document).ready(function(){
	$('.cyber-monday').css('transform','translateX(0px)');
	$('.cyber-monday').css('opacity','1');
	$(window).scroll(function(){
		var y= $(window).scrollTop();
		console.log(y);
		if(y >= 479){
			$('.feature-cart').css('transform','translateY(0px)');
		}
		if(y >=1100){
			$('.card').css('transform','translateY(0px)');
			$('.desc-card').css('transform','translateX(0px)');
		}
		if(y >= 1400){
			$('.img-follow').css('transform','translateY(0px)');
			$('.img-follow').hover(function(){
				$(this).css('transform','scale(1.0)');
			},function(){
				$(this).css('transform','scale(0.9)');
			}
			);
			$('.text-signup').css('transform','translateX(0px)');
			$('.icon-signup').css('transform','translateX(0px)');
		}
		
	})
})