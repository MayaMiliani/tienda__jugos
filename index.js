//Variables del proyecto
const addToCartButtons = document.getElementsByClassName('category__btn'); // Todos los botones
console.log(addToCartButtons)
let cartContainer = document.getElementsByTagName('tbody')[0]; // Seccion del carrito
let quantityFields = document.getElementsByClassName('num'); //Accediendo a la cantidad del producto
let delete_buttons = document.getElementsByClassName('uk-button-danger'); //Opcion para eliminar productos del carro


//Con este ciclo recorro el array en donde estan todos los botones que tengan 'Agregar al carro' y le agrego un evento click, una vez que el usuario haga click en una de ellos se dispara la funcion addToCart

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', addToCart)

};

//Funcion para agregar productos al carrito

    function addToCart(event){

//Creamos la seccion del carrito.

 let itemContainer = document.createElement('tr')

//Utilizo el metodo target para acceder a informacion acerca del boton presionado.
let btn = event.target

//Acedo al elemento padre del boton presionado (El abuelo) Asi poder acceder a la imagen del producto seleccionado.
let btnGrandParent = btn.parentElement.parentElement
console.log(btnGrandParent)

//Accedo al elemento hijo del abuelo (El padre del boton) Asi poder acceder al nombre del prodcuto seleccionado
let btnParent = btn.parentElement
console.log(btnParent)

//Aqui intento acceder a la imagen del producto pero no puedo

let itemImage = btnGrandParent.children[0].src
    console.log(itemImage)
//No logro capturar la imagen del producto



//Aqui accedo al nombre del producto seleccionado

let itemName = btnParent.children[0].innerText
console.log(itemName)

///Aqui accedo al precio del producto seleccionado
let itemPrice = btnParent.children[1].innerText
    console.log(itemPrice)


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

