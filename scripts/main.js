fetch('https://api.sunrise-sunset.org/json\?lat\=40.4165\&lng\=-3.70256')
.then(respuesta => respuesta.json())
.then(respuesta => filtrar(respuesta))


function filtrar(respuesta) {
    let amanecer = respuesta.results.sunrise.split(' ')[0]
    let horaAmanecer = Number(amanecer.split(':')[0]) + 1
    let minutoAmanecer = Number(amanecer.split(':')[1])
    let segundoAmanecer = Number(amanecer.split(':')[2])
    let amanecerEnSegundos = horaAmanecer * 3600 + minutoAmanecer * 60 + segundoAmanecer
    console.log(`Amanece en segundos: ${amanecerEnSegundos}`)
    
    let anochecer = respuesta.results.sunset.split(' ')[0]
    let horaAnochecer = Number(anochecer.split(':')[0]) + 13
    let minutoAnochecer = Number(anochecer.split(':')[1])
    let segundoAnochecer = Number(anochecer.split(':')[2])
    let anochecerEnSegundos = horaAnochecer * 3600 + minutoAnochecer * 60 + segundoAnochecer
    console.log(`Anochece en segundos: ${anochecerEnSegundos}`)
    
    let intervaloDiurno = (anochecerEnSegundos - amanecerEnSegundos) / 11
    console.log(`Intervalo: ${intervaloDiurno}`)
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
    console.log(intervalo11Diurno)
    
    
    let intervaloNocturno = (86400 - anochecerEnSegundos + amanecerEnSegundos) / 5
    console.log(`Intervalo Nocturno: ${intervaloNocturno}`)
    let intervalo1Nocturno = anochecerEnSegundos + intervaloNocturno
    let intervalo2Nocturno = anochecerEnSegundos + intervaloNocturno * 2
    let intervalo3Nocturno = anochecerEnSegundos + intervaloNocturno * 3
    let intervalo4Nocturno = anochecerEnSegundos + intervaloNocturno * 4
    let intervalo5Nocturno = anochecerEnSegundos + intervaloNocturno * 5
    console.log(intervalo5Nocturno)
    
    
    // Declaración de todas las imágenes
    // const imagen1 = document.querySelector(".background-1")
    // const imagen2 = document.querySelector(".background-2")
    // const imagen3 = document.querySelector(".background-3")
    // const imagen4 = document.querySelector(".background-4")
    // const imagen5 = document.querySelector(".background-5")
    // const imagen6 = document.querySelector(".background-6")
    // const imagen7 = document.querySelector(".background-7")
    // const imagen8 = document.querySelector(".background-8")
    // const imagen9 = document.querySelector(".background-9")
    // const imagen10 = document.querySelector(".background-10")
    // const imagen11 = document.querySelector(".background-11")
    
    // Comprobar si es de día:
    let tiempo
    let step1Diurno
    let step2Diurno
    let step3Diurno
    let step4Diurno
    let step5Diurno
    let step6Diurno
    let step7Diurno
    let step8Diurno
    let step9Diurno
    let step10Diurno
    let step11Diurno




    setInterval(function(){
        var hoy = new Date()
        tiempo = hoy.getHours() * 3600 + hoy.getMinutes() * 60 + hoy.getSeconds()
        if (tiempo >= amanecerEnSegundos && tiempo <= anochecerEnSegundos) {
            console.log("Es de día")
            
            if (tiempo >= amanecerEnSegundos && tiempo < intervalo1Diurno && step8Diurno != 1) {
                console.log("imagen 2")
                imagen2.classList.add("show")
                var imagen3 = document.createElement("img")
                imagen3.src = "Mojave/mojave_dynamic_3.jpeg"
                document.getElementById("prueba").appendChild(imagen3)
                imagen3.classList.add("background")

                imagen15.remove()

                step2Diurno = 1
                

            } else if (tiempo >= intervalo1Diurno && tiempo < intervalo2Diurno && step3Diurno != 1) {
                console.log("imagen 3")
                imagen3.classList.add("show")
                var imagen4 = document.createElement("img")
                imagen4.src = "Mojave/mojave_dynamic_4.jpeg"
                document.getElementById("prueba").appendChild(imagen4)
                imagen4.classList.add("background")

                image16.remov()

                step3Diurno = 1
            } else if (tiempo >= intervalo2Diurno && tiempo < intervalo3Diurno && step4Diurno != 1) {
                console.log("imagen 4")
                imagen4.classList.add("show")
                var imagen5 = document.createElement("img")
                imagen5.src = "Mojave/mojave_dynamic_5.jpeg"
                document.getElementById("prueba").appendChild(imagen5)
                imagen5.classList.add("background")

                image1.remove()

                step4Diurno = 1
            } else if (tiempo >= intervalo3Diurno && tiempo < intervalo4Diurno && step5Diurno != 1) {
                console.log("imagen 5")
                imagen5.classList.add("show")
                var imagen6 = document.createElement("img")
                imagen6.src = "Mojave/mojave_dynamic_6.jpeg"
                document.getElementById("prueba").appendChild(imagen6)
                imagen6.classList.add("background")

                imagen2.remove()

                step5Diurno = 1
            } else if (tiempo >= intervalo4Diurno && tiempo < intervalo5Diurno && step6Diurno != 1) {
                console.log("imagen 6")
                imagen6.classList.add("show")
                var imagen7 = document.createElement("img")
                imagen7.src = "Mojave/mojave_dynamic_7.jpeg"
                document.getElementById("prueba").appendChild(imagen7)
                imagen7.classList.add("background")

                imagen3.remove()

                step6Diurno = 1
            } else if (tiempo >= intervalo5Diurno && tiempo < intervalo6Diurno && step7Diurno != 1) {
                console.log("imagen 7")
                imagen7.classList.add("show")
                var imagen8 = document.createElement("img")
                imagen8.src = "Mojave/mojave_dynamic_8.jpeg"
                document.getElementById("prueba").appendChild(imagen8)
                imagen8.classList.add("background")

                imagen4.remove()

                step7Diurno = 1
            } else if (tiempo >= intervalo6Diurno && tiempo < intervalo7Diurno && step8Diurno != 1) {
                console.log("imagen 8")
                imagen8.classList.add("show")
                var imagen9 = document.createElement("img")
                imagen9.src = "Mojave/mojave_dynamic_9.jpeg"
                document.getElementById("prueba").appendChild(imagen9)
                imagen9.classList.add("background")

                imagen5.remove()

                step8Diurno = 1

            } else if (tiempo >= intervalo7Diurno && tiempo < intervalo8Diurno && step9Diurno != 1) {
                console.log("imagen 9")
                imagen9.classList.add("show")
                var imagen10 = document.createElement("img")
                imagen10.src = "Mojave/mojave_dynamic_10.jpeg"
                document.getElementById("prueba").appendChild(imagen10)
                imagen10.classList.add("background")

                imagen6.remove()

                step9Diurno = 1

            } else if (tiempo >= intervalo8Diurno && tiempo < intervalo9Diurno && step10Diurno != 1) {
                console.log("imagen 10")
                var imagen10 = document.createElement("img")
                imagen10.src = "Mojave/mojave_dynamic_10.jpeg"
                document.getElementById("prueba").appendChild(imagen10)
                imagen10.classList.add("background")
                imagen10.classList.add("show")
                var imagen11 = document.createElement("img")
                imagen11.src = "Mojave/mojave_dynamic_11.jpeg"
                document.getElementById("prueba").appendChild(imagen11)
                imagen11.classList.add("background")

                imagen7.remove()

                step10Diurno = 1

            } else if (tiempo >= intervalo9Diurno && tiempo < intervalo11Diurno) {
                console.log("imagen 11")
                imagen11.classList.add("show")
                var imagen12 = document.createElement("img")
                imagen12.src = "Mojave/mojave_dynamic_12.jpeg"
                document.getElementById("prueba").appendChild(imagen12)
                imagen12.classList.add("background")

                imagen8.remove()

                step11Diurno = 1
            } else if (tiempo >= intervalo10Diurno && tiempo < intervalo12Diurno) {
                console.log("imagen 12")
                imagen12.classList.add("show")
                var imagen13 = document.createElement("img")
                imagen13.src = "Mojave/mojave_dynamic_13.jpeg"
                document.getElementById("prueba").appendChild(imagen13)
                imagen13.classList.add("background")

                imagen9.remove()

                step12Diurno = 1
            }
        }
        else {
            if (hoy.getHours() < horaAmanecer) {
                console.log("es de noche pasadas las 12")
                tiempo = (86400 - anochecerEnSegundos) + tiempo
                console.log(tiempo)
            }
            else {
                console.log("es de noche antes de las 12")
            }
        }
        
    }, 5000)
}

// function whichTransitionEvent(){
//     var t;
//     var el = document.createElement('fakeelement');
//     var transitions = {
//       'transition':'transitionend',
//       'OTransition':'oTransitionEnd',
//       'MozTransition':'transitionend',
//       'WebkitTransition':'webkitTransitionEnd'
//     }

//     for(t in transitions){
//         if( el.style[t] !== undefined ){
//             return transitions[t];
//         }
//     }
// }

// function theFunctionToInvoke() {
//     console.log("hola")
//     document.querySelector(".background-6").style.zIndex = "0"
// }