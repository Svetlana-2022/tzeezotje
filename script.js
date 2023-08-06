const burgerOpen = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');
const burgerClose = burger.querySelector('.burger__button');

const contentBtn = document.querySelector('.content__btn');
const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.popup__button');

burgerOpen.addEventListener('click', () => {
    burger.classList.add('burger_open');
});
burgerClose.addEventListener('click', () => {
    burger.classList.remove('burger_open');
});

contentBtn.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});
buttonClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
    console.log(popup);
});