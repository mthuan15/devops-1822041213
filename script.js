'use strict';

const helloButton = document.querySelector('#helloButton');
const message = document.querySelector('#message');
const currentYear = document.querySelector('#currentYear');

if (helloButton && message) {
  helloButton.addEventListener('click', () => {
    const now = new Date();
    message.textContent = `JavaScript hoạt động thành công! (${now.toLocaleTimeString('vi-VN')})`;
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
