// Обработчик для кнопки отправки формы
const sendButton = document.getElementById('sendButton');
const nameInput = document.querySelector('.name');
const phoneInput = document.querySelector('.tel');
const botToken = '7339134638:AAFU9nIKwWM0A-pzeWVlWdCjS01s__wRY3M';
const chatId = '5762026796';
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const closeModals = document.querySelectorAll('.modal .close');

sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (!name || !phone) {
    // Показать модальное окно с ошибкой
    errorModal.classList.add('show');
    setTimeout(() => {
      errorModal.classList.remove('show');
    }, 3000); // Закрыть модальное окно через 3 секунды
    return;
  }

  const message = 
    `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}`;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.ok) {
      nameInput.value = '';
      phoneInput.value = '';
      // Показать модальное окно с успехом
      successModal.classList.add('show');
      setTimeout(() => {
        successModal.classList.remove('show');
      }, 3000); // Закрыть модальное окно через 3 секунды
    } else {
      alert('Ошибка при отправке сообщения.');
    }
  })
  .catch(error => {
    console.error('Ошибка:', error);
    alert('Произошла ошибка при отправке.');
  });
});

// Закрытие модальных окон при клике на кнопку закрытия
closeModals.forEach(closeModal => {
  closeModal.addEventListener('click', () => {
    closeModal.closest('.modal').classList.remove('show');
  });
});

// Закрытие модальных окон при клике вне их области
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('show');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.querySelector('.tel');

  phoneInput.addEventListener('focus', function(e) {
    // Проверяем, если поле пустое, чтобы избежать перезаписи при каждом вводе
    if (e.target.value === "") {
        e.target.value = "+998";
    }
});

  phoneInput.addEventListener('keydown', function(e) {
    // Разрешить только цифры и некоторые специальные клавиши
    if (e.key.length === 1 && !/\d/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
      e.preventDefault(); // Запретить ввод нецифровых символов
    }
  });
});

// scripts.js

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.header-navigation_ul');

  menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const firstBtn = document.querySelector('#sct-btn');
  const contactSection = document.querySelector('#contactForm'); 

  firstBtn.addEventListener('click', function () {
      contactSection.scrollIntoView({
          behavior: 'smooth' 
      });
  });
});