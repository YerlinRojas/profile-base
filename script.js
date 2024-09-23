document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav__bar a');
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('#navMenu');
    const headerHeight = document.querySelector('header').offsetHeight;


    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);

            const sectionPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });


            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});

