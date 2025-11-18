document.addEventListener('DOMContentLoaded', function() {

    // Lógica para o menu mobile (hamburger)
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu mobile ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Efeito de animação ao rolar a página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animation');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.service-card, .about-content, .about-image');
    hiddenElements.forEach(el => observer.observe(el));

});

// Adicione um pouco de CSS para a animação de scroll
const style = document.createElement('style');
style.innerHTML = `
    .service-card, .about-content, .about-image {
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        opacity: 0;
        transform: translateY(20px);
    }
    .service-card.show-animation, .about-content.show-animation, .about-image.show-animation {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
