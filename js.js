
const button = document.querySelector('.button-link');
const modal = document.querySelector('#credo-modal');
const closeButton = document.querySelector('.credo-close');

// Открываем окно при нажатии на кнопку
button.addEventListener('click', function() {
  modal.showModal();
});

// Закрываем окно по крестику
closeButton.addEventListener('click', function() {
  modal.close();
});

// Закрываем окно при клике вне карточки
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    const rect = modal.getBoundingClientRect();

    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!inside) {
      modal.close();
    }
  }
});
