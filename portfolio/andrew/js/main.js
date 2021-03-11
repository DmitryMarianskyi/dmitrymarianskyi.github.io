
let andrewBirds = document.getElementsByClassName('andrewBirds')[0]
let body = document.querySelector('body')
let egg = document.getElementsByClassName('easterEgg')[0]
let myText = 'Dont angry Andrew!!!'
let myNum = 0
document.getElementsByClassName('btn')[0].onclick = () => {

   
   body.classList.toggle('angry')
   
   let btnInfo = document.getElementsByClassName('btnInfo')[0]
   if( btnInfo.innerHTML === 'Click Me!' ) {
   	btnInfo.innerHTML = 'Happy Birthday Bro!)'
   } else {
   	btnInfo.innerHTML = 'Click Me!'
   }

   andrewBirds.classList.toggle('angry') 
   if (andrewBirds.classList == 'andrewBirds angry') {
      andrewBirds.innerHTML = ''
      dontAngryAndrew()
   } else {
     andrewBirds.innerHTML = 'not angry)'
     myNum = 0
  }
}

function dontAngryAndrew() {
   
   if ( myNum <= myText.length -1) {
      andrewBirds.innerHTML += myText.charAt(myNum)
      myNum++
      setTimeout(dontAngryAndrew, 150);
   } 
};

document.getElementsByClassName('bomb')[0].addEventListener('click', () => {
    console.log('Поздравляю!! ты нашел пасхалку, надеюсь не подглядывал)')
    egg.classList.toggle('start')
}) 

document.getElementsByClassName('easterEgg')[0].addEventListener('click', () => {
    egg.classList.toggle('start')
})