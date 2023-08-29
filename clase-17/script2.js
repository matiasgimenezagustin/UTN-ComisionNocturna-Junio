const btnMenu = document.querySelector('.btnMenu')
const navHTML = document.getElementById('nav')

btnMenu.addEventListener('click', () =>{
    navHTML.classList.toggle('mostrar')
})