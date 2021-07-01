//Variables del proyecto
const addToCartButtons = document.getElementsByClassName('category__btn'); // Todos los botones
let cartContainer = document.getElementsByTagName('tbody')[0]; // Seccion del carrito
let quantityFields = document.getElementsByClassName('num'); //Accediendo a la cantidad del producto
let delete_buttons = document.getElementsByClassName('uk-button-danger'); //Opcion para eliminar productos del carro


//Evento click a cada boton que tenga la opcion 'Comprar'

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart)
 
};

//Funcion para agregar productos al carrito

function addToCart(event){

localStorage.setItem('productName', itenName);
localStorage.setItem('productPrice', itemPrice);

let itemContainer = document.createElement('tr')

let btn = event.target

let btnGrandParent = btn.parentElement.parentElement

let btnParent = btn.parentElement

let itemImage = btnGrandParent.children[0].src

let itemName = btnParent.children[0].innerText

let itemPrice = btnParent.children[1].innerText

//Aqui le agrego el HTML al elemento 'tr' que creé.
    itemContainer.innerHTML = `
    <td><input class="uk-checkbox" type="checkbox"></td>
    <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
    <td class="uk-table-link">
    <h3 class ="item-name">${itemName}</h3></td>
    <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
    <td><input type = 'number' class = 'num' value = '1'></td>
    <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
    <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
`
//Aqui lo agrego directamente a la seccion del carrito
cartContainer.append(itemContainer)
}

