// Cookie and AGE CHECK ==================================================================================
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(c){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(void 0!==f&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setDate(k.getDate()+j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

$('#enter').click(function(){
   $('.age_check').hide();
    $.cookie('age_check', 'over21', { expires: 7, path: '/'        });
   return false;
});

$(document).ready(function() {
    // Проверяем наличие cookie для age_check
    if (!$.cookie('age_check')) {
      $('.age_check').show();
      disableScroll(); // Вызываем функцию для отключения скролла
    } else {
      $('.age_check').hide();
    }

    // Обработчик события при нажатии на кнопку "Yep"
    $('#enter').click(function() {
      $('.age_check').hide();
      enableScroll(); // Вызываем функцию для включения скролла
      $.cookie('age_check', 'over21', { expires: 7, path: '/' });
      return false;
    });

    // Функция для отключения скролла
    function disableScroll() {
      $('body').css('overflow', 'hidden');
    }

    // Функция для включения скролла
    function enableScroll() {
      $('body').css('overflow', 'auto');
    }
  });
//=========END COOKIE AND AGE===============================================================================================================================================
//=======Animation for TITLE=================================================================================================================================================

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll() {
// 		$('*').off('scroll', animOnScroll);
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_active');

// 			} else {
// 				if (!animItem.classList.contains('_anim-no-hide')) {
// 					animItem.classList.remove('_active');
// 				}
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}
// 	animOnScroll();
// }
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	window.addEventListener('resize', animOnScroll); // Добавлено событие resize

	function animOnScroll() {
		$('*').off('scroll', animOnScroll);
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if (
				(pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) ||
				(window.pageYOffset > animItemOffset - window.innerHeight && window.pageYOffset < animItemOffset + animItemHeight) // Добавлено условие для скроллинга внутри элементов
			) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}

	animOnScroll();
}
//=======Animation for TEXT=================================================================================================================================================

const animItems3 = document.querySelectorAll('._anim-items3');

if (animItems3.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  window.addEventListener('resize', animOnScroll);

  function animOnScroll() {
    const windowHeight = window.innerHeight;

    for (let index = 0; index < animItems3.length; index++) {
      const animItem = animItems3[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 0.2; // 20% видимости

      let animItemPoint = windowHeight - animItemHeight * animStart;

      if (window.innerWidth <= 768) {
        // Для мобильных устройств добавляем класс _active, когда верхняя граница элемента становится видимой внизу экрана и видно 20% его высоты
        if (pageYOffset > animItemOffset - windowHeight + animItemHeight - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('_active2');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active2');
          }
        }
      } else {
        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active2');
          }
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  animOnScroll();
}
//=======Animation for BOTTLE=================================================================================================================================================
// const animItems2 = document.querySelectorAll('._anim-items2');

// if (animItems2.length > 0) {
// 	window.addEventListener('scroll', animOnScroll2);
// 	function animOnScroll2() {
// 		$('*').off('scroll', animOnScroll2);
// 		for (let index = 0; index < animItems2.length; index++) {
// 			const animItem = animItems2[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 8;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_active2');

// 			} else {
// 				if (!animItem.classList.contains('_anim-no-hide')) {
// 					animItem.classList.remove('_active2');
// 				}
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}
// 	animOnScroll();
// }