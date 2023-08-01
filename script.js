const burgerOpen = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');
const burgerClose = burger.querySelector('.burger__button');

burgerOpen.addEventListener('click', () => {
    burger.classList.add('burger_open');
});
burgerClose.addEventListener('click', () => {
    burger.classList.remove('burger_open');
});