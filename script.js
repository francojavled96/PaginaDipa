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

// 3. Comprobamos que los elementos del carrusel existan
if (imagenCarrusel && botonAnterior && botonSiguiente) {

    // 4. Creamos una variable para controlar la imagen actual
    let indiceActual = 0;

    // 5. Creamos una función para mostrar la imagen
    function mostrarImagen() {

        imagenCarrusel.src = imagenes[indiceActual].src;
        imagenCarrusel.alt = imagenes[indiceActual].alt;

    }

    // 6. Programamos el botón siguiente
    botonSiguiente.addEventListener("click", function() {

        indiceActual++;

        if (indiceActual >= imagenes.length) {
            indiceActual = 0;
        }

        mostrarImagen();

    });

    // 7. Programamos el botón anterior
    botonAnterior.addEventListener("click", function() {

        indiceActual--;

        if (indiceActual < 0) {
            indiceActual = imagenes.length - 1;
        }

        mostrarImagen();

    });

}
// ===== VALIDACIÓN DEL FORMULARIO =====

// 1. Buscamos el formulario
const formulario = document.querySelector("#formulario-contacto");

// 2. Comprobamos que el formulario exista
if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        // Comenzamos suponiendo que el formulario es válido
        let formularioValido = true;


        // ===== VALIDACIÓN DEL NOMBRE =====

        const nombre = document.querySelector("#nombre").value;
        const nombreLimpio = nombre.trim();

        let errorNombre = "";

        if (nombreLimpio === "") {
            errorNombre = "El nombre es obligatorio.";
        }
        else if (nombreLimpio.length < 3) {
            errorNombre = "El nombre debe tener al menos 3 caracteres.";
        }
        else if (nombreLimpio.length > 60) {
            errorNombre = "El nombre no puede superar los 60 caracteres.";
        }

        document.querySelector("#error-nombre").textContent = errorNombre;

        if (errorNombre !== "") {
            formularioValido = false;
        }


        // ===== VALIDACIÓN DE LA EMPRESA =====

        const empresa = document.querySelector("#empresa").value;
        const empresaLimpia = empresa.trim();

        let errorEmpresa = "";

        if (empresaLimpia.length > 100) {
            errorEmpresa = "La empresa no puede superar los 100 caracteres.";
        }

        document.querySelector("#error-empresa").textContent = errorEmpresa;

        if (errorEmpresa !== "") {
            formularioValido = false;
        }


        // ===== VALIDACIÓN DEL EMAIL =====

        const email = document.querySelector("#email").value;
        const emailLimpio = email.trim();

        let errorEmail = "";

        if (emailLimpio === "") {
            errorEmail = "El correo electrónico es obligatorio.";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpio)) {
            errorEmail = "Ingresá un correo electrónico válido.";
        }
        else if (emailLimpio.length > 100) {
            errorEmail = "El correo no puede superar los 100 caracteres.";
        }

        document.querySelector("#error-email").textContent = errorEmail;

        if (errorEmail !== "") {
            formularioValido = false;
        }


        // ===== VALIDACIÓN DEL TELÉFONO =====

        const telefono = document.querySelector("#telefono").value;
        const telefonoLimpio = telefono.trim();

        let errorTelefono = "";

        if (telefonoLimpio === "") {
            errorTelefono = "El teléfono es obligatorio.";
        }
        else if (!/^[+0-9() -]{8,20}$/.test(telefonoLimpio)) {
            errorTelefono = "Ingresá un teléfono válido (entre 8 y 20 caracteres).";
        }

        document.querySelector("#error-telefono").textContent = errorTelefono;

        if (errorTelefono !== "") {
            formularioValido = false;
        }


        // ===== VALIDACIÓN DEL MENSAJE =====

        const servicio = document.querySelector("#servicio").value;
        const mensaje = document.querySelector("#mensaje").value;
        const mensajeLimpio = mensaje.trim();

        let errorMensaje = "";

        if (mensajeLimpio === "") {
            errorMensaje = "El mensaje es obligatorio.";
        }
        else if (mensajeLimpio.length < 10) {
            errorMensaje = "El mensaje debe tener al menos 10 caracteres.";
        }
        else if (mensajeLimpio.length > 1000) {
            errorMensaje = "El mensaje no puede superar los 1000 caracteres.";
        }

        document.querySelector("#error-mensaje").textContent = errorMensaje;

        if (errorMensaje !== "") {
            formularioValido = false;
        }


        // ===== COMPROBACIÓN FINAL =====

        if (formularioValido === false) {
            return;
        }

        console.log("¡Formulario válido!");

    });

}
