/* GUARDO EL JSON EN LA VARIABLE DATOS */ 
const datos = mostrarDatos();

/* MUESTRO LOS DATOS DEL JSON */
document.getElementById("nombre").innerHTML = datos['nombre'];
document.getElementById("edad").innerHTML = datos['edad'];
document.getElementById("ciudad").innerHTML = datos['ciudad'];
document.getElementById("nacionalidad").innerHTML = datos['nacionalidad'];


function mostrarDatos(){
 
    /* JSON CON MIS DATOS */
    const JSONData = {
        "nombre": "Pablo",
        "apellido": "Abad",
        "edad": 38,
        "ciudad": "Del viso", 
        "nacionalidad":"Argentino", 
    }

    return JSONData;
      
   };







