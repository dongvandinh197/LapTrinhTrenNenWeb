
var slideIndex = 0;

function plusSlides(n) {
  SlideCurrent(slideIndex += n);
}
function SlideCurrent(n){
			var slide = document.getElementsByClassName("my-slide");
			var dots = document.getElementsByClassName("dot");
			// if (n > slides.length) {slideIndex = 1} 
  			// if (n < 1) {slideIndex = slides.length}
			for(var i=0;i<slide.length;i++)
			{
				slide[i].style.display = "none";
			}
			// slide[n].style.display = "block";
				// Slide[i+1].style.display = "block";
			slideIndex++;
    		if (slideIndex > slide.length) {slideIndex = 1} 
    		slide[slideIndex-1].style.display = "block"; 	
    		setTimeout(SlideCurrent,8000);
		}
SlideCurrent(0); 

// // $(".fixed").css("position","fixed");
// 	$(document).ready(
// 		$(document).scroll(function(){
// 		if ($(document).scrollTop() > 600) {
//   		$(".nav").css("position","fixed").css('margin-top','-71px').css('z-index','10000').css('background','#000');
//   		// $(".nav").css("position","fixed");
//   		// $(".item1").css('margin-top','0');
//     } else {
//       $(".nav").css("position","relative").css('margin-top','0').css('background','transparent');
//       // $(".nav").css("position","relative");
//     }}))

	

	
