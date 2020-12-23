jQuery(function() {

$(".cart__menu").click(function(){
	$(".cart__menu__inner").toggleClass("cart__menu__inner__active");
	$(".one").toggleClass("one__active")
});


$(".form__href").mouseenter(function(){
	$(".form__href__a").removeClass("form__href__a").addClass("form__href__a__2");
});

$(".form__href").mouseleave(function(){
	if (!$(this).hasClass("form__href__a__2")){ 
	 $(".form__href__a__2").removeClass("form__href__a__2").addClass("form__href__a");
    }
});

















});