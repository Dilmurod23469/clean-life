const navLInk = document.querySelector('.nav_link');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    navLInk.classList.toggle('active')
})