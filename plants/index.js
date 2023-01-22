// burger

const burger = document.querySelector('.hamburger');
const navBody = document.querySelector('.navigation__body');
const nav = document.querySelector('.navigation__list');

if (burger) {
  burger.addEventListener('click', (e) => {
    burger.classList.toggle('hamburger_active');
    nav.classList.toggle('navigation__list_active');
    navBody.classList.toggle('navigation__body_active');
  });
  navBody.addEventListener('click', (e) => {
    burger.classList.remove('hamburger_active');
    nav.classList.remove('navigation__list_active');
    navBody.classList.remove('navigation__body_active');
  });
}

// accordion

/* document.querySelectorAll('.accordion__item__button').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;

    if (content.style.maxHeight) {
      document.querySelectorAll('.accordion__item__content').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.accordion__item__content').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})
 */

const check = '1. Вёрстка соответсвует макету. Ширина экрана 768px +24\n2. Вёрстка соответсвует макету. Ширина экрана 380px +24\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22\nИтог: 85 / 75';

console.log(check);