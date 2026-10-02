lottie.loadAnimation({
    container: document.getElementById('heroAnimation'),
    renderer: 'svg',

    loop: true,
    autoplay: true,

    path: './assets/animations/hero.json'
});

lottie.loadAnimation({
    container: document.getElementById('aboutAnimation'),
    renderer: 'svg',

    loop: true,
    autoplay: true,

    path: './assets/animations/about.json'
});

document.querySelector('.contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});