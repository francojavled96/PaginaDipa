// ===== CARRUSEL DE IMÁGENES =====

// 1. Creamos un array con las imágenes
const imagenes = [
    {
        src: "imagenes/recoleccion.jpg",
        alt: "Recolección de residuos industriales"
    },
    {
        src: "imagenes/contenedores.jpg",
        alt: "Contenedores para residuos"
    },
    {
        src: "imagenes/transporte.jpg",
        alt: "Transporte de residuos industriales"
    },
    {
        src: "imagenes/disposicion-final.jpg",
        alt: "Disposición final de residuos"
    }
];

// 2. Buscamos los elementos HTML
const imagenCarrusel = document.querySelector("#imagen-carrusel");
const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");

// 3. Creamos una variable para controlar la imagen actual
let indiceActual = 0;

// 4. Creamos una función para mostrar la imagen
function mostrarImagen() {

    imagenCarrusel.src = imagenes[indiceActual].src;
    imagenCarrusel.alt = imagenes[indiceActual].alt;

}

// 5. Programamos el botón siguiente
botonSiguiente.addEventListener("click", function() {

    indiceActual++;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }

    mostrarImagen();

});

// 6. Programamos el botón anterior
botonAnterior.addEventListener("click", function() {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    mostrarImagen();

});