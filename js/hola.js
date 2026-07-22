// =========================================
// ELEMENTOS
// =========================================

const musica =
    document.getElementById(
        "musica"
    );


const escenas =
    document.querySelectorAll(
        ".escena"
    );


const btnComenzar =
    document.getElementById(
        "btnComenzar"
    );


const btnConstelacion =
    document.getElementById(
        "btnConstelacion"
    );


const btnJardin =
    document.getElementById(
        "btnJardin"
    );


const btnCarta =
    document.getElementById(
        "btnCarta"
    );


const btnFinal =
    document.getElementById(
        "btnFinal"
    );


// =========================================
// CONFIGURAR MÚSICA
// =========================================

musica.volume = 0;


// =========================================
// CAMBIAR ESCENA
// =========================================

function cambiarEscena(
    numero
) {


    escenas.forEach(
        escena => {

            escena.classList.remove(
                "activa"
            );

        }
    );


    const nuevaEscena =

        document.getElementById(

            "escena" +
            numero

        );


    nuevaEscena.classList.add(
        "activa"
    );


}


// =========================================
// INICIAR MÚSICA
// =========================================

function iniciarMusica() {


    musica
        .play()
        .then(
            () => {


                let volumen = 0;


                const fade =

                    setInterval(
                        () => {


                            if (
                                volumen <
                                0.35
                            ) {


                                volumen +=
                                    0.01;


                                musica.volume =
                                    volumen;


                            }

                            else {


                                clearInterval(
                                    fade
                                );


                            }


                        },

                        100

                    );


            }
        )

        .catch(
            error => {

                console.log(
                    "Audio bloqueado:",
                    error
                );

            }
        );

}


// =========================================
// ESCENA 1
// =========================================

btnComenzar.addEventListener(

    "click",

    () => {


        // La música comienza aquí
        iniciarMusica();


        // Partículas
        crearExplosion();


        // Cambiar pantalla
        setTimeout(

            () => {

                cambiarEscena(
                    2
                );

            },

            800

        );


    }

);


// =========================================
// ESCENA 2
// =========================================

btnConstelacion.addEventListener(

    "click",

    () => {


        crearExplosion();


        cambiarEscena(
            3
        );


    }

);


// =========================================
// ESCENA 3
// =========================================

btnJardin.addEventListener(

    "click",

    () => {


        crearExplosion();


        cambiarEscena(
            4
        );


    }

);


// =========================================
// ESCENA 4
// =========================================

btnCarta.addEventListener(

    "click",

    () => {


        crearExplosion();


        cambiarEscena(
            5
        );


    }

);


// =========================================
// ESCENA 5
// =========================================

btnFinal.addEventListener(

    "click",

    () => {


        crearExplosion();


        cambiarEscena(
            6
        );


    }

);


// =========================================
// CREAR PARTÍCULA
// =========================================

function crearParticula() {


    const particula =

        document.createElement(
            "div"
        );


    const emojis = [

        "💜",

        "✨",

        "⭐",

        "🌸",

        "💫",

        "🌷"

    ];


    particula.className =

        "particula";


    particula.textContent =

        emojis[
            Math.floor(
                Math.random()
                *
                emojis.length
            )
        ];


    particula.style.left =

        Math.random()
        *
        100
        +
        "vw";


    particula.style.animationDuration =

        (
            4
            +
            Math.random()
            *
            4
        )
        +
        "s";


    document
        .getElementById(
            "particulas"
        )
        .appendChild(
            particula
        );


    setTimeout(

        () => {

            particula.remove();

        },

        8000

    );

}


// =========================================
// EXPLOSIÓN
// =========================================

function crearExplosion() {


    for (
        let i = 0;
        i < 20;
        i++
    ) {


        setTimeout(

            () => {

                crearParticula();

            },

            i * 70

        );


    }

}


// =========================================
// PARTÍCULAS AUTOMÁTICAS
// =========================================

setInterval(

    () => {

        crearParticula();

    },

    3000

);