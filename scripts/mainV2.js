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
    let intervaloDiurno = (anochecerEnSegundos - amanecerEnSegundos) / 11
    
    // Duración de noche
    let nocheEnSegundos = (24*3600 - anochecerEnSegundos + amanecerEnSegundos)
    
    // Intervalo de noche
    let intervaloNocturno = nocheEnSegundos / 5
    
    let prueba = 1
    // Guardo las variables en el navegador
    sessionStorage.setItem("horaAmanecer", horaAmanecer)
    sessionStorage.setItem("amanecerEnSegundos", amanecerEnSegundos)
    sessionStorage.setItem("horaAnochecer", horaAnochecer)
    sessionStorage.setItem("anochecerEnSegundos", anochecerEnSegundos)
    sessionStorage.setItem("intervaloDiurno", intervaloDiurno)
    sessionStorage.setItem("intervaloNocturno", intervaloNocturno)
    sessionStorage.setItem("fetch", prueba)
    imagen = obtenerImagen(amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
    sessionStorage.setItem("imagen", imagen)
    

    imagen = obtenerImagen(amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
    cargarImagen(imagen)
    setInterval(function() {
        imagen = obtenerImagen(amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
        cargarImagen(imagen)
        sessionStorage.setItem("imagen", imagen)
    }, 60000)
}

function obtenerImagen(amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno) {
    let imagen
    // Primero compruebo se es de día o de noche
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
    
    // Devuelvo las imágenes de durante el día
    if (horario == "dia") {
        if (tiempo >= amanecerEnSegundos && tiempo < (amanecerEnSegundos + intervaloDiurno)) {
            imagen = 1
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno) && tiempo < (amanecerEnSegundos + intervaloDiurno *2)) {
            imagen = 2
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *2) && tiempo < (amanecerEnSegundos + intervaloDiurno *3)) {
            imagen = 3
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *3) && tiempo < (amanecerEnSegundos + intervaloDiurno *4)) {
            imagen = 4
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *4) && tiempo < (amanecerEnSegundos + intervaloDiurno *5)) {
            imagen = 5
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *5) && tiempo < (amanecerEnSegundos + intervaloDiurno *6)) {
            imagen = 6
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *6) && tiempo < (amanecerEnSegundos + intervaloDiurno *7)) {
            imagen = 7
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *7) && tiempo < (amanecerEnSegundos + intervaloDiurno *8)) {
            imagen = 8
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *8) && tiempo < (amanecerEnSegundos + intervaloDiurno *9)) {
            imagen = 9
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *9) && tiempo < (amanecerEnSegundos + intervaloDiurno *10)) {
            imagen = 10
        } else if (tiempo >= (amanecerEnSegundos + intervaloDiurno *10) && tiempo < (amanecerEnSegundos + intervaloDiurno *11)) {
            imagen = 11
        }
    }
    

    // Devuelvo las imágenes de la noche
    if (horario == "noche" || horario == "madrugada") {
        if (horario == "noche") {
            tiempo = tiempo - anochecerEnSegundos
            if (tiempo >= 0 && tiempo < intervaloNocturno) {
                imagen = 12
            } else if (tiempo >= intervaloNocturno && tiempo < intervaloNocturno * 2) {
                imagen = 13
            } else if (tiempo >= intervaloNocturno * 2 && tiempo < intervaloNocturno * 3) {
                imagen = 14
            } else if (tiempo >= intervaloNocturno * 3 && tiempo < intervaloNocturno * 4) {
                imagen = 15
            } else if (tiempo >= intervaloNocturno * 4 && tiempo < intervaloNocturno * 5) {
                imagen = 16
            }
        } else {
            tiempo = tiempo + 86400 - anochecerEnSegundos
            if (tiempo >= 0 && tiempo < intervaloNocturno) {
                imagen = 12
            } else if (tiempo >= intervaloNocturno && tiempo < intervaloNocturno * 2) {
                imagen = 13
            } else if (tiempo >= intervaloNocturno * 2 && tiempo < intervaloNocturno * 3) {
                imagen = 14
            } else if (tiempo >= intervaloNocturno * 3 && tiempo < intervaloNocturno * 4) {
                imagen = 15
            } else if (tiempo >= intervaloNocturno * 4 && tiempo < intervaloNocturno * 5) {
                imagen = 16
            }
        }
    }
    
    return imagen
}

function cargarImagen(imagen) {
    let imagen1 = document.querySelector(".background-1")
    let imagen2 = document.querySelector(".background-2")
    let imagen3 = document.querySelector(".background-3")
    let imagen4 = document.querySelector(".background-4")
    let imagen5 = document.querySelector(".background-5")
    let imagen6 = document.querySelector(".background-6")
    let imagen7 = document.querySelector(".background-7")
    let imagen8 = document.querySelector(".background-8")
    let imagen9 = document.querySelector(".background-9")
    let imagen10 = document.querySelector(".background-10")
    let imagen11 = document.querySelector(".background-11")
    let imagen12 = document.querySelector(".background-12")
    let imagen13 = document.querySelector(".background-13")
    let imagen14 = document.querySelector(".background-14")
    let imagen15 = document.querySelector(".background-15")
    let imagen16 = document.querySelector(".background-16")
    let input = document.querySelector(".search-box")
    console.log(imagen)
    switch (imagen) {
        case 1:
            input.style.opacity = "1"
            input.classList.remove("search-box-noche")
            input.classList.add("search-box-mañana")
            imagen15.style.opacity = "0"
            imagen1.style.opacity = "1"
            break;
        case 2:
            input.style.opacity = "1"
            input.classList.add("search-box-mañana")
            imagen16.style.opacity = "0"
            imagen2.style.opacity = "1"
            imagen1.style.zIndex = "0"
            imagen2.style.zIndex = "0"
        break;
        case 3:
            input.classList.add("search-box-mañana")
            imagen1.style.opacity = "0"
            imagen3.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 4:
            input.classList.add("search-box-mañana")
            imagen2.style.opacity = "0"
            imagen4.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 5:
            input.classList.add("search-box-mañana")
            imagen3.style.opacity = "0"
            imagen5.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 6:
            input.classList.remove("search-box-mañana")
            input.classList.add("search-box-tarde")
            imagen4.style.opacity = "0"
            input.style.opacity = "1"
            imagen6.style.opacity = "1"
            break;
        case 7:
            input.classList.add("search-box-tarde")
            imagen5.style.opacity = "0"
            imagen7.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 8:
            input.classList.add("search-box-tarde")
            imagen6.style.opacity = "0"
            imagen8.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 9:
            input.classList.add("search-box-tarde")
            imagen7.style.opacity = "0"
            imagen9.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 10:
            input.classList.add("search-box-tarde")
            imagen8.style.opacity = "0"
            imagen10.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 11:
            input.classList.remove("search-box-tarde")
            input.classList.add("search-box-noche")
            imagen9.style.opacity = "0"
            input.style.opacity = "1"
            imagen11.style.opacity = "1"
            break;
        case 12:
            console.log("dentro del switch")
            input.classList.add("search-box-noche")
            imagen10.style.opacity = "0"
            imagen12.style.opacity = "1"
            console.log("cambio opacidad")
            input.style.opacity = "1"
            break;
        case 13:
            input.classList.add("search-box-noche")
            imagen11.style.opacity = "0"
            imagen13.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 14:
            input.classList.add("search-box-noche")
            imagen12.style.opacity = "0"
            imagen14.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 15:
            input.classList.add("search-box-noche")
            imagen13.style.opacity = "0"
            imagen15.style.opacity = "1"
            input.style.opacity = "1"
            break;
        case 16:
            input.classList.add("search-box-noche")
            imagen1.style.zIndex = "1"
            imagen2.style.zIndex = "1"
            input.style.opacity = "1"
            imagen14.style.opacity = "0"
            imagen16.style.opacity = "1"
            break;
    }
}

let comprobacion = sessionStorage.getItem("fetch")
if (comprobacion == 1) {
    let horaAmanecer = sessionStorage.getItem("horaAmanecer")
    let amanecerEnSegundos = sessionStorage.getItem("amanecerEnSegundos")
    let horaAnochecer = sessionStorage.getItem("horaAnochecer")
    let anochecerEnSegundos = sessionStorage.getItem("anochecerEnSegundos")
    let intervaloDiurno = sessionStorage.getItem("intervaloDiurno")
    let intervaloNocturno = sessionStorage.getItem("intervaloNocturno")
    let imagen = Number(sessionStorage.getItem("imagen"))
    console.log("hola")
    
    cargarImagen(imagen)
    imagen = obtenerImagen(amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
    setInterval(function() {
        imagen = obtenerImagen(amanecerEnSegundos, anochecerEnSegundos, intervaloDiurno, intervaloNocturno)
        cargarImagen(imagen)
    }, 60000)

} else {
    fetch('https://api.sunrise-sunset.org/json\?lat\=40.4165\&lng\=-3.70256')
    .then(respuesta => respuesta.json())
    .then(respuesta => filtrar(respuesta))
    console.log("adios")
}