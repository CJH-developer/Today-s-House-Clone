const btn = document.querySelector('.toggle__menu');
const menu = document.querySelector('.top__right');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


