/* .about-slider */
let active = 0;
let slideText = document.getElementsByClassName('about-slider')

document.getElementsByClassName('slider-btn-right')[0].onclick = () => {
    slideText[active].classList.remove('active-slide')
    if ( active ==  slideText.length -1){
    	active = 0
    } else {
         active++
    }
   
    slideText[active].classList.add('active-slide')
}

document.getElementsByClassName('slider-btn-left')[0].onclick = () => {
	slideText[active].classList.remove('active-slide')
	if ( active == 0 ) {
		active = slideText.length -1
	} else {
        active--
	}
	
	slideText[active].classList.add('active-slide')
}

/* mobile slider */
document.getElementsByClassName('menu-btn')[0].onclick = () => {
   document.getElementsByClassName('mobile-menu')[0].classList.toggle('active')
}




/* slick slider */
$(document).ready(function(){
    $('.product-slider').slick({
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                }
            }] // end responsive
    }); // end  $.product-slider

    $('.food-slider').slick({
        slidesToShow: 7,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            }, // end 1400
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                }
            } // end 750
        ] // end responsive
    }); // end $ .food-sloder
});