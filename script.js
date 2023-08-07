// для слайдера
let offset = 0; //
let dotIndex = 1; // слайд
const sliderLine = document.querySelector('.service__line');
const btnPrev = document.querySelector('.service__arrow');
const btnNext = document.querySelector('.service__arrow_type_next');

const burgerOpen = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');
const burgerClose = burger.querySelector('.burger__button');

const contentBtn = document.querySelector('.content__btn');
const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.popup__button');

// для слайдера
// if (window.innerWidth < 1920) {
//     btnPrev.addEventListener('click', () => {
//         offset = offset - 785; // offset -= 785
//         dotIndex --;
//         if(offset < 0) {
//             offset = 1570;
//             dotIndex = 3;
//         }
//         sliderLine.style.left = - offset + 'px';
//     });
//     btnNext.addEventListener('click', () => {
//         offset = offset + 785; // offset += 785
//         dotIndex ++;
//         if(offset > 1570) {
//             offset = 0;
//             dotIndex = 1;
//         }
//         sliderLine.style.left = - offset + 'px';
//     });
// }
function calcCardsWidth () {
    const width = { init: 1570, more: 785 };

    if (window.innerWidth < 1144) {
        width.init = 1160;
        width.more = 580;
    }
    if (window.innerWidth < 912) {
        width.init = 900;
        width.more = 450;
    }
    if (window.innerWidth < 760) {
        width.init = 640;
        width.more = 320;
    }
    if (window.innerWidth < 550) {
        width.init = 440;
        width.more = 220;
    }
    if (window.innerWidth < 412) {
        width.init = 360;
        width.more = 180;
    }
    return width;
}
const width = calcCardsWidth();
btnPrev.addEventListener('click', () => {
    offset = offset - width.more; // offset -= width.more
    dotIndex --;
    if(offset < 0) {
        offset = width.init;
        dotIndex = 3;
    }
    sliderLine.style.left = - offset + 'px';
});
btnNext.addEventListener('click', () => {
    offset = offset + width.more; // width.more
    dotIndex ++;
    if(offset > width.init) {
        offset = 0;
        dotIndex = 1;
    }
    sliderLine.style.left = - offset + 'px';
});

// для бургера
burgerOpen.addEventListener('click', () => {
    burger.classList.add('burger_open');
});
burgerClose.addEventListener('click', () => {
    burger.classList.remove('burger_open');
});

// для попапа формы
contentBtn.addEventListener('click', () => {
    popup.classList.add('popup_opened');
});
buttonClose.addEventListener('click', () => {
    popup.classList.remove('popup_opened');
});

//////////////ajax-запрос (Не подключилась библиотека: jquery)
// $("#button").on("click", function(){
//     var nameValue = $("#name").val();
//     console.log(nameValue);

//     if(nameValue.lenght = 0) {
//         $("#errorMess").text("Введите имя");
//         return;
//     }
//     $("#errorMess").text("");

//     // отправили данные на сервер (в данном примере some.php)
// 	$.ajax({
// 		url: './some.php', //адрес сервера
// 		method: 'post',
//         cache: false,
// 		dataType: 'html',
// 		data: { 'name': nameValue },
//         beforeSend: function () {
//             $("#button").prop("disabled", true);
//         },
//         // получили данные с сервера
//         success: function (data) {
//             alert(data);
//             $("#button").prop("disabled", false);
//         }
// 	})
//     // очистить инрут
//     // $("#name").val("");
// });