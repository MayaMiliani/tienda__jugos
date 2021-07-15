//Variables de la pagina

let addToCartButtons = document.getElementsByClassName('category__btn');
let cartContainer = document.getElementsByTagName('tbody')[0];
let delete_buttons = document.getElementsByClassName('uk-button-danger');
let quantityFields = document.getElementsByClassName('num');


//Recorriendo todos los botones que tengan la opcion de añadir al carrito 

for( let i = 0; i < addToCartButtons.length; i++ ) {
    addToCartButtons[i].addEventListener('click', addToCart)

};


//Funcion para ir agregando productos al carro

function addToCart(e){

let itemContainer = document.createElement('tr')
let infoClick = e.target
let infoParent = infoClick.parentElement;
let infoGrandParent = infoClick.parentElement.parentElement
let itemImage = infoGrandParent.children[0].src
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


for(let i = 0; i < quantityFields.length; i++){
    quantityFields[i].value = 1
    quantityFields[i].addEventListener('change', totalCost)
            
}

// Accessing individual quantity fields
for(let i = 0; i < delete_buttons.length; i++){
    delete_buttons[i].addEventListener('click', removeItem)
}

    grandTotal()

}

function totalCost(event){
    let quantity = event.target
    quantity_parent = quantity.parentElement.parentElement
    price_field = quantity_parent.getElementsByClassName('item-price')[0]
    total_field = quantity_parent.getElementsByClassName('total-price')[0]
    console.log(total_field.innerText)
    price_field_content = price_field.innerText.replace('$', '')
    total_field.innerText = '$' +  quantity.value * price_field_content
    grandTotal()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
    }

    
    
}


function grandTotal(){
    let total = 0
    let grand_total = document.getElementsByClassName('grand-total')[0]
    all_total_fields = document.getElementsByClassName('total-price')
    for(let i = 0; i < all_total_fields.length; i++){
        all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
        total+=all_prices
    }
    grand_total.children[0].innerText = "$"+total
    grand_total.children[0].style.fontWeight = 'bold'
    console.log(total)
}


function removeItem(event){
    del_btn = event.target
    del_btn_parent = del_btn.parentElement.parentElement
    del_btn_parent.remove()
    console.log(del_btn)
    grandTotal()
    
}