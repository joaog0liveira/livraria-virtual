document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    // Adiciona um ouvinte de clique ao botão hamburguer
    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Adiciona um ouvinte de redimensionamento da janela para ocultar o menu quando a tela for maior que 768px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.classList.remove('show');
        }
    });
});
