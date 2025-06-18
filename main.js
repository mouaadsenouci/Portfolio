var typed = new Typed(".text", {
    strings: ["Programmer", "Web Developer", "Front-End and Back-End developer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const navLinks = document.querySelectorAll('.navbar a');
const menuToggle = document.getElementById('menu-toggle');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});