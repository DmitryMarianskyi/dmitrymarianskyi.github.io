/*== Menu ==*/

let categories = document.querySelector('.categories')

document.getElementsByClassName('catBtn')[0].onclick = () => {
    categories.classList.toggle('show')
}

/*== Hot deals slider ==*/
let active = 0;
document.getElementsByClassName('rightBtnHot')[0].onclick =  () => {
	let slide = document.getElementsByClassName('slideHot')
  
	slide[active].classList.remove('active')
	if ( active == slide.length -1 ) {
		active = 0
	} else {
       active++
	}
	slide[active].classList.add('active')
};

document.getElementsByClassName('leftBtnHot')[0].onclick =  () => {
	let slide = document.getElementsByClassName('slideHot')

	slide[active].classList.remove('active')
	if ( active == 0 ) {
		active = slide.length -1
	} else {
		active--
	}
	slide[active].classList.add('active')
};

/*== Special deals slider ==*/

let active2 = 0;
document.getElementsByClassName('rightBtnSpec')[0].onclick =  () => {
	let slide = document.getElementsByClassName('slideSpec')
  
	slide[active2].classList.remove('specActive')
	if ( active2 == slide.length -1 ) {
		active2 = 0
	} else {
       active2++
	}
	slide[active2].classList.add('specActive')
     
};

document.getElementsByClassName('leftBtnSpec')[0].onclick =  () => {
	let slide = document.getElementsByClassName('slideSpec')

	slide[active2].classList.remove('specActive')
	if ( active2 == 0 ) {
		active2 = slide.length -1
	} else {
		active2--
	}
	slide[active2].classList.add('specActive')
};

/*== Fetured products slider ==*/

let active3 = 0;
document.getElementsByClassName('rightBtnFeatured')[0].onclick =  () => {
	let slide = document.getElementsByClassName('featuredContent')
  
	slide[active3].classList.remove('featuredContentActive')
	if ( active3 == slide.length -1 ) {
		active3 = 0
	} else {
       active3++
	}
	slide[active3].classList.add('featuredContentActive')
     
};

document.getElementsByClassName('leftBtnFeatured')[0].onclick =  () => {
	let slide = document.getElementsByClassName('featuredContent')

	slide[active3].classList.remove('featuredContentActive')
	if ( active3 == 0 ) {
		active3 = slide.length -1
	} else {
		active3--
	}
	slide[active3].classList.add('featuredContentActive')
};


/*== rating ==*/

const ratingItemList = document.querySelectorAll('.ratingItem');     
const ratingItemArray = Array.prototype.slice.call(ratingItemList); 

ratingItemArray.forEach(item =>               
	item.addEventListener('click', () => {
		const { itemValue } = item.dataset /* backend*/
		item.parentNode.dataset.totalValue = item.dataset.itemValue;
    })
);

/* == slider track == https://www.youtube.com/watch?v=2Bo619QsSE4*/

let position = 0;
const slideToShow = 4;
const slideToScroll = 1;
const container = document.querySelector('.sliderContainer');
const track = document.querySelector('.sliderTrack');
const items = document.querySelectorAll('.slideItem');
const btnPrev = document.querySelector('.leftBtnProd');
const btnNext = document.querySelector('.rightBtnProd');
const itemsCount = items.length;
const itemWidth = 177
const movePosition = 202;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;
	position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
	setPosition();
	checkBtns();
})




btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;
	position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth; 
	setPosition();
	checkBtns();
});

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth;
	if ( position === 0 ) {
		btnPrev.style.backgroundColor = 'silver'
		btnPrev.style.borderColor = 'silver'
	} else {
		btnPrev.style.backgroundColor = '#F00E34'
		btnPrev.style.borderColor = '#F00E34'
	}

	if ( position <= -(itemsCount - slideToShow) * itemWidth ) {
		btnNext.style.backgroundColor = 'silver'
		btnNext.style.borderColor = 'silver'
	} else {
		btnNext.style.backgroundColor = '#F00E34'
		btnNext.style.borderColor = '#F00E34'
	}
	
}

checkBtns();

/*==== slider track latest ====*/

let position2 = 0;
const slideToShow2 = 4;
const slideToScroll2 = 1;
const container2 = document.querySelector('.sliderContainerLatest');
const track2 = document.querySelector('.sliderTrackLatest');
const items2 = document.querySelectorAll('.slideItemLatest');
const btnPrev2 = document.querySelector('.leftBtnLatest');
const btnNext2 = document.querySelector('.rightBtnLatest');
const itemsCount2 = items.length;
const itemWidth2 = 177
const movePosition2 = 202;

items2.forEach((item) => {
	item.style.minWidth = `${itemWidth2}px`;
});

btnNext2.addEventListener('click', () => {
	const itemsLeft2 = itemsCount2 - (Math.abs(position2) + slideToShow2 * itemWidth2) / itemWidth2;
	position2 -= itemsLeft2 >= slideToScroll2 ? movePosition2 : itemsLeft2 * itemWidth2;
	setPosition2();
	checkBtns2();
})




btnPrev2.addEventListener('click', () => {
	const itemsLeft2 = Math.abs(position2) / itemWidth2;
	position2 += itemsLeft2 >= slideToScroll2 ? movePosition2 : itemsLeft2 * itemWidth2; 
	setPosition2();
	checkBtns2();
});

const setPosition2 = () => {
	track2.style.transform = `translateX(${position2}px)`;
};

const checkBtns2 = () => {
	btnPrev2.disabled = position === 0;
	btnNext2.disabled = position <= -(itemsCount2 - slideToShow2) * itemWidth2;
	if ( position2 === 0 ) {
		btnPrev2.style.backgroundColor = 'silver'
		btnPrev2.style.borderColor = 'silver'
	} else {
		btnPrev2.style.backgroundColor = '#F00E34'
		btnPrev2.style.borderColor = '#F00E34'
	}

	if ( position2 <= -(itemsCount2 - slideToShow2) * itemWidth2 ) {
		btnNext2.style.backgroundColor = 'silver'
		btnNext2.style.borderColor = 'silver'
	} else {
		btnNext2.style.backgroundColor = '#F00E34'
		btnNext2.style.borderColor = '#F00E34'
	}
	
}

checkBtns2();