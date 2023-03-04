const openContacto = document.querySelector('.contacto'); /* DESPLEGA EL FORM CUANDO PRESIONA EL LINK CONTACTO */
const formulario = document.querySelector('.form');
const closeContacto = document.querySelector('.form_submit'); /* CIERRA EL FORM CUANDO PRESIONA EL BOTON ENVIAR */
const cancelar = document.querySelector('.cancelar'); /* CANCELA AL PRESIONAR EL BOTON CANCELAR */

/* CAPTURA EL EVENTO CLICK PARA MOSTRAR U OCULTAR EL FORM */ 
openContacto.addEventListener('click', (e)=>{
    e.preventDefault();
    formulario.classList.add('form--show'); /* AGREGA LA CLASE FORM--SHOW AL DIV PRINCIPAL PARA MOSTRAR EL FORMULARIO */
});

closeContacto.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Mensaje enviado');
    formulario.classList.remove('form--show'); /* REMUEVE LA CLASE FORM--SHOW PARA CERRAR EL FORM */
});

cancelar.addEventListener('click', (e)=>{
    e.preventDefault();
    formulario.classList.remove('form--show'); /* REMUEVE LA CLASE FORM--SHOW PARA CERRAR EL FORM */
});


