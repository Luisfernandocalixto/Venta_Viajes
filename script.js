import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los datos de la estructura html DOM   
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//Agregar un elemento click acada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // remover el active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });
        // Agregar la clase active al enlace actual
        this.classList.add('active')

        // Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        // Mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    });
});

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris, // Hay que tener cuidado con tilde  en html => París asi que aqui no hay excepcion 'París' : paris 
        'Londres': londres
    };
    return contenido[enlace];

}