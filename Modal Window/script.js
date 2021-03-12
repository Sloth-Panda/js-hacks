'use strict';

const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const keyDown = function (e) {
  if (e.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      hideModal();
    }
  }
};

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', showModal);
}

closeModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

//keypress(keydown) is a global event
document.addEventListener('keydown', keyDown);
