
/*======= menu toggle ========*/

document.getElementsByClassName('menu-toggle')[0].addEventListener('click', function() {
	let header = document.getElementsByClassName('header')[0]
	this.classList.toggle('open')
	header.classList.toggle('open')
});

/*================== scrollRevial() =====================*/

window.sr = ScrollReveal();

/*-- .rotateZ --*/
sr.reveal('.rotateZ', {
    viewFactor: 0.8,
    duration: 1000,
    easing: 'ease',
    rotate: {
        z: 45,
    }
});

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