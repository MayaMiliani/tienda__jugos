//Variables del proyecto
const addToCartButtons = document.getElementsByClassName('category__btn');
let cartContainer = document.getElementsByTagName('tbody')[0];
let quantityFields = document.getElementsByClassName('num');
let delete_buttons = document.getElementsByClassName('uk-button-danger');


//Seleccionando los botones de agregar al carrito de

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart)

};

//Funcion para agregar al carrito

function addToCart(event){


let itemContainer = document.createElement('tr')
console.log(itemContainer)
let btn = event.target
console.log(btn)

}

// Consigna agregar Eventos al proyecto (Clasde de Eventos)

// for (let i = 0; i <addToCartButtons.length; i++) {
//     addToCartButtons[i].addEventListener('click', ()=>{

//         console.log('Me has hecho click')
//     })
// }