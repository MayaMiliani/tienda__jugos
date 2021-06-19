
//Consigna CREA UN ELEMENTO MANIPULANDO EL DOM
let hero__left = document.getElementsByClassName('hero__left')[0];

let parrafo = document.createElement('p');

parrafo.textContent = "Relaja el cuerpo con jugo fresco"

hero__left.appendChild(parrafo);


//Consigna MOFIDICA ETIQUETAS EXISTENTES
const inicio = document.querySelector('.Inicio')


inicio.textContent = "Home"


//Variables del proyecto
const addToCartButtons= document.getElementsByClassName('category__btn');
let cartContainer = document.getElementsByTagName('tbody')[0];
let quantityFields = document.getElementsByClassName('num');
let delete_buttons = document.getElementsByClassName('uk-button-danger');


//Seleccionando los botones de agregar al carrito de

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart)

};

//Funcion para agregar al carrito


