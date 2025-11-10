const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');
const input = document.getElementById('input')
/* EJERCICIO BÁSICO RESUELTO */
/*boton.addEventListener ('click', function () {
    const solicitud = prompt ('Añade un elemento a la lista');
    if() {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = solicitud;
    lista.appendChild(nuevoElemento);
    }
})*/

/*Lo primero es declarar las variables que vienen del HTML
dentro de ese botón es donde tienen que pasar las cosas:
primero te pregunta con PROMPT, después le digo que lo
guarde en un elemento nuevo, que es un listado, para que sea infinito,
esa variable obtiene el contenido creando un nuevo elemento como hijo*/

/*EXTRA. Añadimos una condición y es que si no ponemos nada, no se incluye*/
/*
boton.addEventListener ('click', function () {
    const solicitud = prompt ('Añade un elemento a la lista');
    console.log(solicitud.length)
    if (solicitud.length != 0) {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = solicitud;
    lista.appendChild(nuevoElemento);
}
})


EXTRA 2.  Añadimos una condición conla que le quitamos espacios en blanco .trim. Le decimos que el producto exista y que no esté en blanco. BUENA SOLUCIÓN
boton.addEventListener ('click', function () {
    const solicitud = prompt ('Añade un elemento a la lista');
    if (solicitud && solicitud.trim() !== "") {
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = solicitud;
    lista.appendChild(nuevoElemento);
}
})

Se puede hacer con un input en lugar de un prompt, que este siempre salta
*/
boton.addEventListener ('click', function () {
    const solicitud = input.value;
    if (solicitud && solicitud.trim() !== "") {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = solicitud;
        lista.appendChild(nuevoElemento);
        input.value = "" /* Con esto le decimos que cada vez  que esto se procese, se borre lo que hemospuesto en la cajita del input*/
    }
})    
