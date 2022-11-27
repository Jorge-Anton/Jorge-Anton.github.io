fetch('https://api.sunrise-sunset.org/json\?lat\=40.4165\&lng\=-3.70256')
.then(respuesta => respuesta.json())
.then(respuesta => filtrar(respuesta))

function filtrar(respuesta) {
    let amanecer = respuesta.results.sunrise.split(' ')[0]
    let horaAmanecer = Number(amanecer.split(':')[0]) + 1
    let minutoAmanecer = Number(amanecer.split(':')[1])
    let segundoAmanecer = Number(amanecer.split(':')[2])
    let amanecerEnSegundos = horaAmanecer * 3600 + minutoAmanecer * 60 + segundoAmanecer

    let anochecer = respuesta.results.sunset.split(' ')[0]
    let horaAnochecer = Number(anochecer.split(':')[0]) + 13
    let minutoAnochecer = Number(anochecer.split(':')[1])
    let segundoAnochecer = Number(anochecer.split(':')[2])
    let anochecerEnSegundos = horaAnochecer * 3600 + minutoAnochecer * 60 + segundoAnochecer

    cargarImagen(amanecerEnSegundos, anochecerEnSegundos, horaAmanecer)

    setInterval(function() {
        let hoy = new Date()
        let tiempo = hoy.getHours() * 3600 + hoy.getMinutes() * 60 + hoy.getSeconds()
        let hour = hoy.getHours()
        let horario = diaNoche(amanecerEnSegundos, anochecerEnSegundos, tiempo, hour, horaAmanecer)
        switch (horario) {
            case "dia":
                imagen = transicionar(amanecerEnSegundos, anochecerEnSegundos, tiempo, imagen)
                break;
            case "noche":
                console.log("es de nocehe")
                break;
        }
    }, 5000)
}



function diaNoche(amanecerEnSegundos, anochecerEnSegundos, tiempo) {
    if (tiempo >= amanecerEnSegundos && tiempo <= anochecerEnSegundos ) {
        let horario = "dia"
        return horario
    } 
}



function obtenerImagenDia(amanecerEnSegundos, anochecerEnSegundos, tiempo, step) {
    let intervaloDiurno = (anochecerEnSegundos - amanecerEnSegundos) / 11
    let intervalo1Diurno = amanecerEnSegundos + intervaloDiurno
    let intervalo2Diurno = amanecerEnSegundos + intervaloDiurno * 2
    let intervalo3Diurno = amanecerEnSegundos + intervaloDiurno * 3
    let intervalo4Diurno = amanecerEnSegundos + intervaloDiurno * 4
    let intervalo5Diurno = amanecerEnSegundos + intervaloDiurno * 5
    let intervalo6Diurno = amanecerEnSegundos + intervaloDiurno * 6
    let intervalo7Diurno = amanecerEnSegundos + intervaloDiurno * 7
    let intervalo8Diurno = amanecerEnSegundos + intervaloDiurno * 8
    let intervalo9Diurno = amanecerEnSegundos + intervaloDiurno * 9
    let intervalo10Diurno = amanecerEnSegundos + intervaloDiurno * 10
    let intervalo11Diurno = amanecerEnSegundos + intervaloDiurno * 11
    
    if (tiempo >= amanecerEnSegundos && tiempo < intervalo1Diurno && step != 1) {
        imagen = 1
    } else if (tiempo >= intervalo1Diurno && tiempo < intervalo2Diurno && step != 2) {
        imagen = 2
    } else if (tiempo >= intervalo2Diurno && tiempo < intervalo3Diurno && step != 3) {
        imagen = 3
    } else if (tiempo >= intervalo3Diurno && tiempo < intervalo4Diurno && step != 4) {
        imagen = 4
    } else if (tiempo >= intervalo4Diurno && tiempo < intervalo5Diurno && step != 5) {
        imagen = 5
    } else if (tiempo >= intervalo5Diurno && tiempo < intervalo6Diurno && step != 6) {
        imagen = 6
    } else if (tiempo >= intervalo6Diurno && tiempo < intervalo7Diurno && step != 7) {
        imagen = 7
    } else if (tiempo >= intervalo7Diurno && tiempo < intervalo8Diurno && step != 8) {
        imagen = 8
    } else if (tiempo >= intervalo8Diurno && tiempo < intervalo9Diurno && step != 9) {
        imagen = 9
    } else if (tiempo >= intervalo9Diurno && tiempo < intervalo10Diurno && step != 10) {
        imagen = 10
    } else if (tiempo >= intervalo10Diurno && tiempo < intervalo11Diurno && step != 11) {
        imagen = 11
    }
    return imagen   
}


function transicionar(amanecerEnSegundos, anochecerEnSegundos, tiempo, step) {
    let intervaloDiurno = (anochecerEnSegundos - amanecerEnSegundos) / 11
    let intervalo1Diurno = amanecerEnSegundos + intervaloDiurno
    let intervalo2Diurno = amanecerEnSegundos + intervaloDiurno * 2
    let intervalo3Diurno = amanecerEnSegundos + intervaloDiurno * 3
    let intervalo4Diurno = amanecerEnSegundos + intervaloDiurno * 4
    let intervalo5Diurno = amanecerEnSegundos + intervaloDiurno * 5
    let intervalo6Diurno = amanecerEnSegundos + intervaloDiurno * 6
    let intervalo7Diurno = amanecerEnSegundos + intervaloDiurno * 7
    let intervalo8Diurno = amanecerEnSegundos + intervaloDiurno * 8
    let intervalo9Diurno = amanecerEnSegundos + intervaloDiurno * 9
    let intervalo10Diurno = amanecerEnSegundos + intervaloDiurno * 10
    let intervalo11Diurno = amanecerEnSegundos + intervaloDiurno * 11
    
    if (tiempo >= amanecerEnSegundos && tiempo < intervalo1Diurno) {
        imagen = 1
        imagen1 = document.querySelector(".background-1")
        imagen1.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo1Diurno && tiempo < intervalo2Diurno) {
        imagen = 2
        imagen2 = document.querySelector(".background-2")
        imagen2.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo2Diurno && tiempo < intervalo3Diurno) {
        imagen = 3
        imagen3 = document.querySelector(".background-3")
        imagen3.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo3Diurno && tiempo < intervalo4Diurno) {
        imagen = 4
        imagen4 = document.querySelector(".background-4")
        imagen4.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo4Diurno && tiempo < intervalo5Diurno) {
        imagen = 5
        imagen5 = document.querySelector(".background-5")
        imagen5.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo5Diurno && tiempo < intervalo6Diurno) {
        imagen = 6
        imagen6 = document.querySelector(".background-6")
        imagen6.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo6Diurno && tiempo < intervalo7Diurno) {
        imagen = 7
        imagen7 = document.querySelector(".background-7")
        imagen7.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo7Diurno && tiempo < intervalo8Diurno) {
        imagen = 8
        imagen8 = document.querySelector(".background-8")
        imagen8.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo8Diurno && tiempo < intervalo9Diurno) {
        imagen = 9
        imagen9 = document.querySelector(".background-9")
        imagen9.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo9Diurno && tiempo < intervalo10Diurno) {
        imagen = 10
        imagen10 = document.querySelector(".background-10")
        imagen10.style.opacity = "1"
        console.log("hola")
    } else if (tiempo >= intervalo10Diurno && tiempo < intervalo11Diurno) {
        imagen = 11
        imagen11 = document.querySelector(".background-11")
        imagen11.style.opacity = "1"
    }
    return imagen   
}


function cargarImagen(amanecerEnSegundos, anochecerEnSegundos, horaAmanecer) {
    let imagen
    let hoy = new Date()
    let tiempo = hoy.getHours() * 3600 + hoy.getMinutes() * 60 + hoy.getSeconds()
    let hour = hoy.getHours()
    let horario = diaNoche(amanecerEnSegundos, anochecerEnSegundos, tiempo)
    if (horario == "dia") {
        imagen = obtenerImagenDia(amanecerEnSegundos, anochecerEnSegundos, tiempo)
    } else {
        obtenerSegundos(hour, amanecerEnSegundos, anochecerEnSegundos, horaAmanecer, tiempo)
    }
    switch (imagen) {
        case 1:
            let imagen1 = document.querySelector(".background-1")
            // imagen1.style.transition = "none"
            imagen1.style.opacity = "1"
            break;
        case 2:
            let imagen2 = document.querySelector(".background-2")
            // imagen2.style.transition = "none"
            imagen2.style.opacity = "1"
            break;
        case 3:
            let imagen3 = document.querySelector(".background-3")
            // imagen3.style.transition = "none"
            imagen3.style.opacity = "1"
            break;
        case 4:
            let imagen4 = document.querySelector(".background-4")
            // imagen4.style.transition = "none"
            imagen4.style.opacity = "1"
            break;
        case 5:
            let imagen5 = document.querySelector(".background-5")
            // imagen5.style.transition = "none"
            imagen5.style.opacity = "1"
            break;
        case 6:
            let imagen6 = document.querySelector(".background-6")
            // imagen6.style.transition = "none"
            imagen6.style.opacity = "1"
            break;
        case 7:
            let imagen7 = document.querySelector(".background-7")
            // imagen7.style.transition = "none"
            imagen7.style.opacity = "1"
            break;
        case 8:
            let imagen8 = document.querySelector(".background-8")
            // imagen8.style.transition = "none"
            imagen8.style.opacity = "1"
            break;
        case 9:
            let imagen9 = document.querySelector(".background-9")
            // imagen9.style.transition = "none"
            imagen9.style.opacity = "1"
            break;
        case 10:
            let imagen10 = document.querySelector(".background-10")
            // imagen10.style.transition = "none"
            imagen10.style.opacity = "1"
            break;
        case 11:
            let imagen11 = document.querySelector(".background-11")
            // imagen11.style.transition = "0s"
            imagen11.style.opacity = "1"
            break;
    }

}

function obtenerSegundos(hour, amanecerEnSegundos, anochecerEnSegundos, horaAmanecer, tiempo) {
    hour = 2
    console.log(amanecerEnSegundos)
    console.log(anochecerEnSegundos)
    // tiempo = 24 * 3600 + amanecerEnSegundos - anochecerEnSegundos
    console.log(tiempo)
    if (hour < horaAmanecer) {
        tiempo += 24 * 3600 - anochecerEnSegundos
        console.log(tiempo)
    } else {

    }
}
