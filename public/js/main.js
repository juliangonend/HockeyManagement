
const button = document.querySelector('.mobile-button');
const menu= document.querySelector('.nav-mobile');

button.addEventListener('click', ()=>{
    menu.classList.toggle('visible')
})