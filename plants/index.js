document.querySelectorAll('.accordion__item__button').forEach((el) => {
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

let check = '1. Верстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соотвествует макету +48\n4. Требования к css +12\n5. Интерактивность, реализуемая через css +20\nОценка: 110 / 110';

console.log(check);