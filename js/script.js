// ========================================
// ELEMENTOS
// ========================================

const musica =
    document.getElementById("musica");

const btnComenzar =
    document.getElementById("btnComenzar");

const pantallas =
    document.querySelectorAll(".pantalla");


// ========================================
// CONFIGURACIÓN DE MÚSICA
// ========================================

// Volumen inicial
musica.volume = 0;


// ========================================
// CAMBIAR DE PANTALLA
// ========================================

function cambiarPantalla(id) {

    pantallas.forEach(
        pantalla => {

            pantalla.classList.remove(
                "activa"
            );

        }
    );


    const pantallaNueva =
        document.getElementById(id);


    pantallaNueva.classList.add(
        "activa"
    );

}


// ========================================
// MÚSICA DE FONDO
// ========================================

// La música comienza cuando Cecilia
// presiona el botón "Descubrir"

btnComenzar.addEventListener(
    "click",
    function () {


        // Intentar reproducir
        musica.play()
            .then(() => {


                console.log(
                    "🎵 Música iniciada"
                );


                // Fade in
                let volumen = 0;


                const fadeIn =
                    setInterval(
                        function () {


                            if (
                                volumen <
                                0.35
                            ) {

                                volumen +=
                                    0.01;

                                musica.volume =
                                    volumen;

                            } else {

                                clearInterval(
                                    fadeIn
                                );

                            }

                        },

                        100
                    );


            })
            .catch(
                error => {

                    console.log(
                        "Error al reproducir:",
                        error
                    );

                }
            );


        // Cambiar pantalla
        cambiarPantalla(
            "mensaje"
        );


        // Crear partículas
        crearParticulas();


    }
);



// ========================================
// BOTÓN CARTA
// ========================================

document
    .getElementById("btnCarta")
    .addEventListener(
        "click",
        function () {


            cambiarPantalla(
                "carta"
            );


        }
    );



// ========================================
// BOTÓN FLORES
// ========================================

document
    .getElementById("btnFlores")
    .addEventListener(
        "click",
        function () {


            cambiarPantalla(
                "jardin"
            );


            crearParticulas();


        }
    );



// ========================================
// BOTÓN FINAL
// ========================================

document
    .getElementById("btnFinal")
    .addEventListener(
        "click",
        function () {


            cambiarPantalla(
                "final"
            );


            crearParticulas();


        }
    );



// ========================================
// CREAR MUCHAS PARTÍCULAS
// ========================================

function crearParticulas() {


    for (
        let i = 0;
        i < 20;
        i++
    ) {


        setTimeout(
            crearParticula,
            i * 200
        );


    }

}



// ========================================
// CREAR UNA PARTÍCULA
// ========================================

function crearParticula() {


    const particula =
        document.createElement(
            "div"
        );


    const emojis = [

        "💜",

        "✨",

        "💖",

        "🌸",

        "🌷",

        "⭐"

    ];


    // Clase
    particula.className =
        "particula";


    // Emoji aleatorio
    particula.innerText =

        emojis[
            Math.floor(
                Math.random()
                *
                emojis.length
            )
        ];


    // Posición horizontal
    particula.style.left =

        Math.random()
        *
        100
        +
        "vw";


    // Velocidad aleatoria
    particula.style.animationDuration =

        (
            3
            +
            Math.random()
            *
            4
        )
        +
        "s";


    // Agregar al documento
    document
        .getElementById(
            "particles"
        )
        .appendChild(
            particula
        );


    // Eliminar después
    setTimeout(
        () => {

            particula.remove();

        },

        7000
    );


}



// ========================================
// PARTÍCULAS AUTOMÁTICAS
// ========================================

setInterval(
    function () {

        crearParticula();

    },

    2500
);