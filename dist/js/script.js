const hamburger = document.querySelector('.hamburger'),
   menu = document.querySelector('.menu'),
   closeElem = document.querySelector('.menu__close'),
   closeOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
   menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
   menu.classList.remove('active');
});

closeOverlay.addEventListener('click', () => {
   menu.classList.remove('active');
});

const descr = document.querySelectorAll('.skills__ratings__descr'),
   lines = document.querySelectorAll('.skills__ratings__line span');

descr.forEach((item, i) => {
   lines[i].style.width = item.innerHTML;
});