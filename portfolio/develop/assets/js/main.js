window.onload = () => {
	title1();
	setTimeout(title2, 500);
	setTimeout(title3, 850);
	setTimeout(title4, 1550);
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
const txt1 = 'Комплексные';
let speed = 50; 

let i2 = 0;
let start2 = 0;
const txt2 = 'Решения';

let i3 = 0;
let start3 = 0;
const txt3 = 'В сфере';

let i4 = 0;
let start4 = 0;
const txt4 = 'Веб-разработки';

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



/*window.onload = () => {
	startProgress();
	setTimeout(startProgress2, 500);
	setTimeout(startProgress3, 850);
	setTimeout(startProgress4, 1550);
};

let titleName = document.getElementsByClassName('titleName');
let title1 = 'Комплексные';
let titleArr1 = title1.split('');

let title2 = 'Решения';
let titleArr2 = title2.split('');

let title3 = 'В сфере';
let titleArr3 = title3.split('');

let title4 = 'Веб-разработки';
let titleArr4 = title4.split('');

function startProgress() {
	let start = setInterval(frame, 50)
	let width = 0
	
	function frame() {
		if ( width >= titleArr1.length) {
			clearInterval(start)
		} else {
			width++
			titleName[0].append(titleArr1[width-1])
			titleName[0].style.padding = '0 5px 0 5px'
		}
	}
};

function startProgress2() {
	let start = setInterval(frame, 50)
	let width = 0
	
	function frame() {
		if ( width >= titleArr2.length) {
			clearInterval(start)
		} else {
			width++
			titleName[1].append(titleArr2[width-1])
			titleName[1].style.padding = '0 5px 0 5px'
		}
	}
};

function startProgress3() {
	let start = setInterval(frame, 50)
	let width = 0
	
	function frame() {
		if ( width >= titleArr3.length) {
			clearInterval(start)
		} else {
			width++
			titleName[2].append(titleArr3[width-1])
			titleName[2].style.padding = '0 5px 0 5px'
		}
	}
};

function startProgress4() {
	let start = setInterval(frame, 50)
	let width = 0
	
	function frame() {
		if ( width >= titleArr4.length) {
			clearInterval(start)
		} else {
			width++
			titleName[3].append(titleArr4[width-1])
			titleName[3].style.padding = '0 5px 0 5px'
		}
	}
};*/

/*titleName[0].innerHTML += title1[i]*/
/*titleName[0].append(titleArr1[i])*/




/*function startDev() {
	if ( i5 < devSlogan.length ) {
		devTitle.innerHTML += devSlogan.charAt(i5);
		i5++
		setTimeout(startDev, 150)
	} else {
		setTimeout(clear, 5000);
		setTimeout(startDev, 5000);
	}
};

function clear() {
	i5 = -1;
	devTitle.innerHTML = ''
};*/




