window.onload = () => {
	title1();
	setTimeout(title2, 800);
	setTimeout(title3, 1750);
	setTimeout(title4, 3450);
	setTimeout(startDev, 1000);
};

/*======================== startDev() ========================*/
let devTitle = document.querySelector('.slogan');
const devSlogan = 'Time to dev';
let i5 = 0;

function startDev() {
	if ( i5 < devSlogan.length ) {
		devTitle.innerHTML += devSlogan.charAt(i5)
		i5++
		setTimeout(startDev, 150);
	} else {
		setTimeout(again, 5000);
	}
};

function again() {
	i5 = -1
	devTitle.innerHTML = ''
	startDev();
};

/*======================== title() += title4() ========================*/
let titleName = document.getElementsByClassName('titleName');
let i1 = 0;
let start1 = 0;
const txt1 = 'Hi, two year ago';
let speed = 50; 

let i2 = 0;
let start2 = 0;
const txt2 = 'I started my travel';

let i3 = 0;
let start3 = 0;
const txt3 = 'into the world of web-development.';

let i4 = 0;
let start4 = 0;
const txt4 = 'And this is my story ...';

function title1() {
  if (i1 < txt1.length) {
    titleName[0].innerHTML += txt1.charAt(i1);
    i1++;
    setTimeout(title1, speed);
  }
  titleName[0].style.padding = '0 5px 0 5px'
};

function title2() {
  if (i2 < txt2.length) {
    titleName[1].innerHTML += txt2.charAt(i2);
    i2++;
    setTimeout(title2, speed);
  }
  titleName[1].style.padding = '0 5px 0 5px'
};

function title3() {
  if (i3 < txt3.length) {
    titleName[2].innerHTML += txt3.charAt(i3);
    i3++;
    setTimeout(title3, speed);
  }
  titleName[2].style.padding = '0 5px 0 5px'
};

function title4() {
  if (i4 < txt4.length) {
    titleName[3].innerHTML += txt4.charAt(i4);
    i4++;
    setTimeout(title4, speed);
  }
  titleName[3].style.padding = '0 5px 0 5px'
};


/*============= toggle .show + collapse .questionsText =============*/

let questions = document.getElementsByClassName('questionsContent');

for ( i = 0; i < questions.length; i++ ) {
	questions[i].addEventListener('click', function() {
		this.classList.toggle('show')
		
		let questionsText = this.children[1]
		if ( questionsText.style.maxHeight ) {
			questionsText.style.maxHeight = null
		} else {
			questionsText.style.maxHeight = questionsText.scrollHeight + 'px'
		}
	} )
};


/*================== scrollRevial() =====================*/

window.sr = ScrollReveal();

/*-- .rotateZ in <section class="contact"> --*/
sr.reveal('.rotateZ', {
    viewFactor: 0.8,
    duration: 1000,
    easing: 'ease',
    rotate: {
        z: 45,
    }
});

/*===========jq #btnArrowBot #btnArrowTop animation ========*/

$(document).ready(function(){

	$("#btnArrowBot").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        const id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

	$("#btnArrowTop").on("click", function (event) {
		event.preventDefault();
		const id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(window).scroll(function() {
    let top = $(this).scrollTop();

    if ( top > 100) {
        $('#btnArrowBot').css("display", "none");
        $('#btnArrowTop').css("display", "inline-block");
    } else {
    	$('#btnArrowBot').css("display", "initial");
    	$('#btnArrowTop').css("display", "none");
    }
});

/*=========== modal on/of ===========*/
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


/*=========== ripples in .SVG ===========*/

$('.svg').ripples();

/*============= mail alert ==============*/

document.getElementsByClassName('sendBtn')[0].onclick = function() {
  alert("Sorry Git.hub dont work wis php requests"); 
}
