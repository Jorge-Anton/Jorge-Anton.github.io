function reloj() {
    const hoy = new Date()
    let hora = hoy.getHours()
    let minuto = hoy.getMinutes()
    hora = (hora < 10) ? "0" + hora : hora
    minuto = (minuto < 10) ? "0" + minuto : minuto
    var tiempo = hora + ":" + minuto
    document.querySelector('.clock').innerText = tiempo;
    document.querySelector('.clock').textContent = tiempo;
    setTimeout(reloj, 1000)
}
reloj()