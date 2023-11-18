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

// formulario login / cadastro

const container = document.getElementById('container-login')
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active")
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active")
});

