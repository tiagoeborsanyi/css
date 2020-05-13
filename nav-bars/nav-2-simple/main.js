const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

function closeNavbar() {
    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    closeNavbar();
});

toggleButton.addEventListener('click', () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});