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

// blur

const buttons = document.querySelectorAll('.service__button');
const cards = document.querySelectorAll('.service__card');
const gardensCard = document.querySelectorAll('.service__card_garden');
const lawnCard = document.querySelectorAll('.service__card_lawn');
const plantingCard = document.querySelectorAll('.service__card_planting');

buttons.forEach((e) => e.addEventListener('click', () => {
  e.classList.toggle('button_active');

  cards.forEach((e) => {
    e.classList.add('blur');
  });

  if (buttons[0].classList.contains('button_active')) {
    gardensCard.forEach((e) => {
      e.classList.remove('blur');
    });
  }
  if (buttons[1].classList.contains('button_active')) {
    lawnCard.forEach((e) => {
      e.classList.remove('blur');
    });
  }
  if (buttons[2].classList.contains('button_active')) {
    plantingCard.forEach((e) => {
      e.classList.remove('blur');
    });
  }

  if (buttons[1].classList.contains('button_active') && buttons[2].classList.contains('button_active')) {
    buttons[0].classList.add('button_disabled');
    gardensCard.forEach((e) => {
      e.classList.add('blur');
    });
  } else {
    buttons[0].classList.remove('button_disabled');
  }
  if (buttons[0].classList.contains('button_active') && buttons[2].classList.contains('button_active')) {
    buttons[1].classList.add('button_disabled');
    lawnCard.forEach((e) => {
      e.classList.add('blur');
    });
  } else {
    buttons[1].classList.remove('button_disabled');
  }
  if (buttons[0].classList.contains('button_active') && buttons[1].classList.contains('button_active')) {
    buttons[2].classList.add('button_disabled');
    plantingCard.forEach((e) => {
      e.classList.add('blur');
    });
  } else {
    buttons[2].classList.remove('button_disabled');
  }

  if (!buttons[0].classList.contains('button_active') && !buttons[1].classList.contains('button_active') && !buttons[2].classList.contains('button_active')) {
    gardensCard.forEach((e) => {
      e.classList.remove('blur');
    });
    lawnCard.forEach((e) => {
      e.classList.remove('blur');
    });
    plantingCard.forEach((e) => {
      e.classList.remove('blur');
    });
  }
}));

// accordion

const buttonsAcc = document.querySelectorAll('.accordion__item__button');
const contentAcc = document.querySelectorAll('.accordion__item__content');

buttonsAcc.forEach((e) => {
  e.addEventListener('click', () => {
    const content = e.nextElementSibling;

    if (content.style.maxHeight) {
      contentAcc.forEach((e) => {
        e.style.maxHeight = null
      })
      e.classList.remove('accordion__item__button-active')
    } else {
      contentAcc.forEach((e) => {
        e.style.maxHeight = null
      })
      buttonsAcc.forEach((e) => {
        e.classList.remove('accordion__item__button-active')
      })
      e.classList.add('accordion__item__button-active')
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})

// select

const buttonSelect = document.querySelector('.contact-us__drop-down');
const titleSelect = document.querySelector('.drop-down__title');
const contentSelect = document.querySelector('.contact-us__drop-down__content');
const itemSelect = document.querySelectorAll('.drop-down__content__item');
const adress = document.querySelectorAll('.drop-down__adresses');
const woman = document.querySelector('.contact-us__img');

buttonSelect.addEventListener('click', () => {
  if (buttonSelect.classList.contains('contact-us__drop-down_active')) {
    buttonSelect.classList.remove('contact-us__drop-down_active');
    contentSelect.style.display = 'none';
    adress.forEach((e) => {
      e.classList.remove('adresses_active');
    })
    titleSelect.textContent = 'City';
    titleSelect.style.fontSize = '2rem';
    if (document.documentElement.clientWidth <= 460) {
      woman.style.display = 'block';
    }
  } else {
    buttonSelect.classList.add('contact-us__drop-down_active');
    contentSelect.style.display = 'block';
    if (document.documentElement.clientWidth <= 460) {
      woman.style.display = 'none';
    }
  }
})

itemSelect.forEach((e) => {
  itemSelect[0].addEventListener('click', () => {
    contentSelect.style.display = 'none';
    adress.forEach((e) => {
      adress[0].classList.add('adresses_active');
    })
    titleSelect.textContent = 'Canandaigua, NY';
    titleSelect.style.fontSize = '1.6rem';
  })
  itemSelect[1].addEventListener('click', () => {
    contentSelect.style.display = 'none';
    adress.forEach((e) => {
      adress[1].classList.add('adresses_active');
    })
    titleSelect.textContent = 'New York, City';
    titleSelect.style.fontSize = '1.6rem';
  })
  itemSelect[2].addEventListener('click', () => {
    contentSelect.style.display = 'none';
    adress.forEach((e) => {
      adress[2].classList.add('adresses_active');
    })
    titleSelect.textContent = 'Yonkers, NY';
    titleSelect.style.fontSize = '1.6rem';
  })
  itemSelect[3].addEventListener('click', () => {
    contentSelect.style.display = 'none';
    adress.forEach((e) => {
      adress[3].classList.add('adresses_active');
    })
    titleSelect.textContent = 'Sherrill, NY';
    titleSelect.style.fontSize = '1.6rem';
  })
})

// Оценка

const check = '1. При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25\nИтог: 125 / 100';

console.log(check);