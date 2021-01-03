


const selectElement = function(element) {
	return document.querySelector(element)
}

let menuToggler = selectElement('.menu-toggle')
let body = selectElement('body')

menuToggler.addEventListener('click', function() {
	body.classList.toggle('open')
})

function close() {
	body.classList.toggle('open')
}

// Scroll reveal 


window.sr = ScrollReveal();


// 'top' 'right' 'bottom' 'left'  


sr.reveal('.animate-top', {
	origin: 'top', 
	duration: 1500,
	distance: '10rem',
	scale: 0.5,
    reset: true,
    interval: 100
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '10rem',
	delay: 100

});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '10rem',
	delay: 100
});

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '10rem',
	delay: 100
});


sr.reveal('.animate-bottom-reset', {
	origin: 'bottom',
	duration: 1000,
	distance: '10rem',
	delay: 100,
	reset: true
});

sr.reveal('.animate-left-reset', {
	origin: 'left',
	duration: 1000,
	distance: '10rem',
	delay: 100,
    reset: true
});

sr.reveal('.animate-right-reset', {
	origin: 'right',
	duration: 1000,
	distance: '10rem',
	delay: 100,
    reset: true
});
/*sr.reveal('.animate-top-delay-1', {
	origin: 'top', 
	duration: 1500,
	distance: '10rem',
	delay: 200,
    scale: 0.5,
    reset: true
});

sr.reveal('.animate-top-delay-2', {
	origin: 'top', 
	duration: 1500,
	distance: '10rem',
	delay: 300,
	scale: 0.5,
    reset: true

});

sr.reveal('.animate-top-delay-3', {
	origin: 'top', 
	duration: 1500,
	distance: '10rem',
	delay: 400,
	scale: 0.5,
    reset: true

});*/


/*====== MODAL =====*/

/*document.getElementsByClassName('myImg')[0].onclick = function modalOn() {
	modal.style.display = 'flex'
	modalImg.src = this.src
	capture.innerHTML = this.alt
}
*/
let modal = document.getElementsByClassName('modal')[0]

function modalOf() {
	document.getElementsByClassName('modal')[0].style.display = 'none'
}

document.addEventListener('click', function(event) {
     let target = event.target,
         capture = document.getElementsByClassName('capture')[0],
         modalImg = document.getElementsByClassName('modalImg')[0];
     if ( target.className == 'myImg' ) {
     	modal.style.display = 'flex'
     	modalImg.src = target.src
     	capture.innerHTML = target.alt
     }
});

/*===== development.html, promotion.html toggle.show =====*/

/*let devShow = document.getElementsByClassName('developTitle')
let devCont = document.getElementsByClassName('developContent')
document.querySelector('.developTitle').onclick = () => {
	document.querySelector('.developContent').classList.toggle('show')
}*/

document.getElementsByClassName('development')[0].addEventListener('click' , (event) => {
     let target = event.target
    
     if ( target.classList == 'developTitle' ) {
        let parent = target.parentElement.parentElement
     	/*closeShow();*/
     	parent.classList.toggle('show')
     }
});

/*function closeShow() {
	let openClass = document.getElementsByClassName('show')
	for ( i = 0; i < openClass.length; i++) {
		openClass[i].classList.remove('show')
	}
     
}*/


/*=== Email form script ===*/

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

/*тест jq*/