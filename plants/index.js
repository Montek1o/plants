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