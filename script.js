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
if (window.innerWidth < 1920) {
    btnPrev.addEventListener('click', () => {
        offset = offset - 785; // offset -= 785
        dotIndex --;
        if(offset < 0) {
            offset = 1570;
            dotIndex = 3;
        }
        sliderLine.style.left = - offset + 'px';
    });
    btnNext.addEventListener('click', () => {
        offset = offset + 785; // offset += 785
        dotIndex ++;
        if(offset > 1570) {
            offset = 0;
            dotIndex = 1;
        }
        sliderLine.style.left = - offset + 'px';
    });
}

if (window.innerWidth < 1144) {
    btnPrev.addEventListener('click', () => {
        offset = offset - 580;
        dotIndex --;
        if(offset < 0) {
            offset = 1160;
            dotIndex = 3;
        }
        sliderLine.style.left = - offset + 'px';
    });
    btnNext.addEventListener('click', () => {
        offset = offset + 580;
        dotIndex ++;
        if(offset > 1160) {
            offset = 0;
            dotIndex = 1;
        }
        sliderLine.style.left = - offset + 'px';
    });
  }
  if (window.innerWidth < 912) {
    btnPrev.addEventListener('click', () => {
        offset = offset - 450;
        dotIndex --;
        if(offset < 0) {
            offset = 900;
            dotIndex = 3;
        }
        sliderLine.style.left = - offset + 'px';
    });
    btnNext.addEventListener('click', () => {
        offset = offset + 450;
        dotIndex ++;
        if(offset > 900) {
            offset = 0;
            dotIndex = 1;
        }
        sliderLine.style.left = - offset + 'px';
    });
  }
  if (window.innerWidth < 760) {
    btnPrev.addEventListener('click', () => {
        offset = offset - 320;
        dotIndex --;
        if(offset < 0) {
            offset = 640;
            dotIndex = 3;
        }
        sliderLine.style.left = - offset + 'px';
    });
    btnNext.addEventListener('click', () => {
        offset = offset + 320;
        dotIndex ++;
        if(offset > 640) {
            offset = 0;
            dotIndex = 1;
        }
        sliderLine.style.left = - offset + 'px';
    });
  }
  if (window.innerWidth < 550) {
    btnPrev.addEventListener('click', () => {
        offset = offset - 220;
        dotIndex --;
        if(offset < 0) {
            offset = 440;
            dotIndex = 3;
        }
        sliderLine.style.left = - offset + 'px';
    });
    btnNext.addEventListener('click', () => {
        offset = offset + 220;
        dotIndex ++;
        if(offset > 440) {
            offset = 0;
            dotIndex = 1;
        }
        sliderLine.style.left = - offset + 'px';
    });
  }
  if (window.innerWidth < 412) {
    btnPrev.addEventListener('click', () => {
        offset = offset - 180;
        dotIndex --;
        if(offset < 0) {
            offset = 360;
            dotIndex = 3;
        }
        sliderLine.style.left = - offset + 'px';
    });
    btnNext.addEventListener('click', () => {
        offset = offset + 180;
        dotIndex ++;
        if(offset > 360) {
            offset = 0;
            dotIndex = 1;
        }
        sliderLine.style.left = - offset + 'px';
    });
  }

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

//////////////ajax-запрос
$("#button").on("click", function(){
    var nameValue = $("#name").val();
    console.log(nameValue);

    if(nameValue.lenght = 0) {
        $("#errorMess").text("Введите имя");
        return;
    }
    $("#errorMess").text("");

    // отправили данные на сервер (в данном примере some.php)
	$.ajax({
		url: './some.php', //адрес сервера
		method: 'post',
        cache: false,
		dataType: 'html',
		data: { 'name': nameValue },
        beforeSend: function () {
            $("#button").prop("disabled", true);
        },
        // получили данные с сервера
        success: function (data) {
            alert(data);
            $("#button").prop("disabled", false);
        }
	})
    // очистить инрут
    // $("#name").val("");
});