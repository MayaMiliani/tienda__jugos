$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

//Consigna CREA UN ELEMENTO MANIPULANDO EL DOM
let hero__left = document.getElementsByClassName('hero__left')[0];

let parrafo = document.createElement('p');

parrafo.textContent = "Relaja el cuerpo con jugo fresco"

hero__left.appendChild(parrafo);


//Consigna MOFIDICA ETIQUETAS EXISTENTES
const inicio = document.querySelector('.Inicio')


inicio.textContent = "Home"