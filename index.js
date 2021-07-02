//Variables de la pagina

let addToCartButtons = document.getElementsByClassName('category__btn');
let cartContainer = document.getElementsByTagName('tbody')[0];
let removeButton = document.getElementsByClassName('uk-button-danger');
let quantityFields = document.getElementsByClassName('num');


//Recorriendo todos los botones que tengan la opcion de añadir al carrito 

for( let i = 0; i < addToCartButtons.length; i++ ) {
    addToCartButtons[i].addEventListener('click', addToCart)

};


//Funcion para ir agregando productos al carro

function addToCart(e){

let itemContainer = document.createElement('tr')
let infoClick = e.target
console.log(infoClick)
let infoParent = infoClick.parentElement;
console.log(infoParent)
let infoGrandParent = infoClick.parentElement.parentElement
console.log(infoGrandParent)
let itemImage = infoGrandParent.children[0].src
console.log(itemImage)
let itemName = infoParent.children[0].innerText
let itemPrice = infoParent.children[1].innerText

itemContainer.innerHTML = `

<td><input class="uk-checkbox" type="checkbox"></td>
<td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
<td class="uk-table-link">
    <h3 class = "item-name">${itemName}</h3>
</td>
<td class="uk-text-truncate item-price">${itemPrice}</td>
<td><input type = 'number' class = 'num' value = '1'></td>
<td class="uk-text-truncate total-price">${itemPrice}</td>
<td><button class="uk-button uk-button-danger" type="button">Eliminar</button></td>
`
cartContainer.append(itemContainer)

const product = {
    key: itemName,
    name: itemName,
    price: itemPrice
}
localStorage.setItem(product.key, JSON.stringify(product));
}