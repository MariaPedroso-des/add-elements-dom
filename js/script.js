 // Aquí tu código
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');


boton.addEventListener ('click', function () {
    const solicitud = prompt ('Añade un elemento a la lista');
    let elemento = solicitud;
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = elemento;
    lista.appendChild(nuevoElemento);
})

/*Lo primero es declarar las variables que vienen del HTML
dentro de ese botón es donde tienen que pasar las cosas:
primero te pregunta con PROMPT, después le digo que
guarde el resultado en la variable let (porque varía), 
después creo un elemento nuevo, que es un listado, para que sea infinito,
esa variable obtiene el contenido creando un nuevo elemento como hijo*/