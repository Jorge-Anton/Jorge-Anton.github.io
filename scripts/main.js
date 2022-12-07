const imagenesdia = 10
const imagenesnoche = 6
let comprobacion = sessionStorage.getItem("fetch")
if (comprobacion == 1) {
    let horaAmanecer = sessionStorage.getItem("horaAmanecer")
    let amanecerEnSegundos = Number(sessionStorage.getItem("amanecerEnSegundos"))
    let horaAnochecer = Number(sessionStorage.getItem("horaAnochecer"))
    let anochecerEnSegundos = Number(sessionStorage.getItem("anochecerEnSegundos"))
    let intervaloDiurno = Number(sessionStorage.getItem("intervaloDiurno"))
    let intervaloNocturno = Number(sessionStorage.getItem("intervaloNocturno"))
    let imagen = Number(sessionStorage.getItem("imagen"))
    precargarImagen(imagen)
    setInterval(function() {
        nuevaImagen = obtenerImagen(imagenesdia, imagenesnoche, amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
        if (nuevaImagen != imagen) {
            cargarImagen(nuevaImagen)
            imagen = nuevaImagen
        }
        sessionStorage.setItem("imagen", imagen)
    }, 60000)

} else {
    fetch('https://api.sunrise-sunset.org/json\?lat\=40.4165\&lng\=-3.70256')
    .then(respuesta => respuesta.json())
    .then(respuesta => filtrar(respuesta))
}

function filtrar(respuesta) {
    // Obtención de datos de la API
    // Amanecer
    let amanecer = respuesta.results.sunrise.split(' ')[0]
    let horaAmanecer = Number(amanecer.split(':')[0]) + 1
    let amanecerEnSegundos = horaAmanecer * 3600 + Number(amanecer.split(':')[1]) * 60 + Number(amanecer.split(':')[2])

    // Anochecer
    let anochecer = respuesta.results.sunset.split(' ')[0]
    let horaAnochecer = Number(anochecer.split(':')[0]) +13
    let anochecerEnSegundos = horaAnochecer * 3600 + Number(anochecer.split(':')[1]) * 60 + Number(amanecer.split(':')[2])

    // Intervalo de día
    let intervaloDiurno = (anochecerEnSegundos - amanecerEnSegundos) / imagenesdia

    // Duración de noche
    let nocheEnSegundos = (24*3600 - anochecerEnSegundos + amanecerEnSegundos)

    // Intervalo de noche
    let intervaloNocturno = nocheEnSegundos / imagenesnoche

    let comprobacion = 1

    // Guardamos las variables en la sesion del navegador
    sessionStorage.setItem("horaAmanecer", horaAmanecer)
    sessionStorage.setItem("amanecerEnSegundos", amanecerEnSegundos)
    sessionStorage.setItem("horaAnochecer", horaAnochecer)
    sessionStorage.setItem("anochecerEnSegundos", anochecerEnSegundos)
    sessionStorage.setItem("intervaloDiurno", intervaloDiurno)
    sessionStorage.setItem("intervaloNocturno", intervaloNocturno)
    sessionStorage.setItem("fetch", comprobacion)
    imagen = obtenerImagen(imagenesdia, imagenesnoche, amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
    sessionStorage.setItem("imagen", imagen)
    precargarImagen(imagen)
    setInterval(function() {
        nuevaImagen = obtenerImagen(imagenesdia, imagenesnoche, amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
        if (nuevaImagen != imagen) {
            cargarImagen(nuevaImagen)
            imagen = nuevaImagen
        } 
        sessionStorage.setItem("imagen", imagen)
    }, 60000)
}

function obtenerImagen(imagenesdia, imagenesnoche, amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno) {
    let imagen
    // Compruebo si es de noche o de dia
    let hoy
    let horario
    hoy = new Date()
    tiempo = hoy.getHours() * 3600 + hoy.getMinutes() * 60 + hoy.getSeconds()
    hour = hoy.getHours()
    if (tiempo >= amanecerEnSegundos && tiempo <= anochecerEnSegundos ) {
        horario = "dia"
    } else if (tiempo < amanecerEnSegundos) {
        horario = "madrugada"
    } else {
        horario = "noche"
    }
    // Devuelvo las imagenes de durante el dia
    if (horario == "dia") {
        for (let i = 0; i < imagenesdia; i++) {
            if (tiempo >= (amanecerEnSegundos + intervaloDiurno *i) && tiempo < (amanecerEnSegundos + intervaloDiurno *(i+1))) {
                imagen = i+1
                break;
            }
        }
    }

    // Devuelvo las imagen de la noche
    if (horario == "noche" || horario == "madrugada") {
        if (horario == "noche") {
            tiempo = tiempo - anochecerEnSegundos
            for (let i = 0; i < imagenesnoche; i++) {
                if (tiempo >= intervaloNocturno * i && tiempo < intervaloNocturno * (i+1)) {
                    imagen = imagenesdia + i + 1
                    break;
                }
            }
        } else {
            tiempo = tiempo + 86400 - anochecerEnSegundos
            for (let i = 0; i < imagenesnoche; i++) {
                if (tiempo >= intervaloNocturno * i && tiempo < intervaloNocturno * (i+1)) {
                    imagen = imagenesdia + i +1
                    break;
                }
            }
        }
    }
    return imagen
}

function cargarImagen(imagen) {
    const imageContainer = document.querySelector("#image-container")
    var image = [];
    for (i = 1; i <= (imagenesdia+imagenesnoche); i ++) {
        if (imagen == i) {
            image[i] = document.createElement("img")
            image[i].src = `Mojave-reducida/reducidas-${i}.jpeg`
            image[i].alt = `image-${i}`
            image[i].classList.add('animation')
            imageContainer.appendChild(image[i])
            break;
        }
    }
}

function precargarImagen(imagen) {
    const imageContainer = document.querySelector("#image-container")
    var image = [];
    for (i = 1; i <= (imagenesdia+imagenesnoche); i ++) {
        if (imagen == i) {
            image[i] = document.createElement("img")
            image[i].src = `Mojave-reducida/reducidas-${i}.jpeg`
            image[i].alt = `image-${i}`
            image[i].classList.add('load')
            imageContainer.appendChild(image[i])
            const input = document.querySelector(".input")
            input.classList.add('input-animation')
            document.querySelector(".clock").classList.add('input-animation')
            break;
        }
    }
}