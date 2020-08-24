// Select Element function

const selectElement = function(element) {
	return document.querySelector(element)
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', () => {
	body.classList.toggle('open');
});

// Scroll reveal 


window.sr = ScrollReveal();


// 'top' 'right' 'bottom' 'left'  


sr.reveal('.animate-top', {
	origin: 'top', 
	duration: 1000,
	distance: '500rem',
	delay: 100

});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '500rem',
	delay: 100

});

sr.reveal('.animate-bottom2', {
	origin: 'bottom',
	duration: 1000,
	distance: '500rem',
	delay: 200

});

sr.reveal('.animate-bottom3', {
	origin: 'bottom',
	duration: 1000,
	distance: '500rem',
	delay: 300

});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '500rem',
	delay: 100

});

sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '500rem',
	delay: 100

});