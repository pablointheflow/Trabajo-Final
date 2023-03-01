const openContacto = document.querySelector('.contacto');
const formulario = document.querySelector('.form');
const closeContacto = document.querySelector('.form_submit');
const cancelar = document.querySelector('.cancelar');

openContacto.addEventListener('click', (e)=>{
    e.preventDefault();
    formulario.classList.add('form--show');
});

closeContacto.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('Mensaje enviado');
    formulario.classList.remove('form--show');
});

cancelar.addEventListener('click', (e)=>{
    e.preventDefault();
    formulario.classList.remove('form--show');
});


