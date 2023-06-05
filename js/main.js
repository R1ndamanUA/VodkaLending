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
// //=======Animation for TEXT and bottle=================================================================================================================================================

// const animItems3 = document.querySelectorAll('._anim-items3');

// if (animItems3.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   window.addEventListener('resize', animOnScroll);

//   function animOnScroll() {
//     const windowHeight = window.innerHeight;

//     for (let index = 0; index < animItems3.length; index++) {
//       const animItem = animItems3[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 0.2; // 20% видимости

//       let animItemPoint = windowHeight - animItemHeight * animStart;

//       if (window.innerWidth <= 768) {
//         // Для мобильных устройств добавляем класс _active, когда верхняя граница элемента становится видимой внизу экрана и видно 20% его высоты
//         if (pageYOffset > animItemOffset - windowHeight + animItemHeight - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
//           animItem.classList.add('_active2');
//         } else {
//           if (!animItem.classList.contains('_anim-no-hide')) {
//             animItem.classList.remove('_active2');
//           }
//         }
//       } else {
//         if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
//           animItem.classList.add('_active');
//         } else {
//           if (!animItem.classList.contains('_anim-no-hide')) {
//             animItem.classList.remove('_active2');
//           }
//         }
//       }
//     }
//   }

//   function offset(el) {
//     const rect = el.getBoundingClientRect();
//     const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
//   }

//   animOnScroll();
// }

// Cookie and AGE CHECK ==================================================================================

// $('#enter').click(function(){
//    $('.age_check').hide();
//     $.cookie('age_check', 'over21', { expires: 7, path: '/'        });
//    return false;
// });

// $(document).ready(function() {
//     // Проверяем наличие cookie для age_check
//     if (!$.cookie('age_check')) {
//       $('.age_check').show();
//       disableScroll(); // Вызываем функцию для отключения скролла
//     } else {
//       $('.age_check').hide();
//     }

//     // Обработчик события при нажатии на кнопку "так"
//     $('#enter').click(function() {
//       $('.age_check').hide();
//       enableScroll(); // Вызываем функцию для включения скролла
//       $.cookie('age_check', 'over21', { expires: 7, path: '/' });
//       return false;
//     });

//     // Функция для отключения скролла
//     function disableScroll() {
//       $('body').css('overflow', 'hidden');
//     }

//     // Функция для включения скролла
//     function enableScroll() {
//       $('body').css('overflow', 'auto');
//     }
//   });
//=========END COOKIE AND AGE===============================================================================================================================================
  