/*const menuHamburguer = document.getElementById("menu-hamburguer");

menuHamburguer.addEventListener("click", function() {
  menuHamburguer.classList.toggle('active');
});*/




const imagem = document.getElementById("btn-busca");
const headerForm = document.querySelector('.header-form');

imagem.addEventListener("click", function() {
    headerForm.classList.toggle('active');
});


window.onscroll = () => {

    headerForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

window.onload = () => {

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

}