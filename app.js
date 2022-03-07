function clock() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    
    if (hora < 10) 
        hora = "0" + hora
     else if (min < 10) 
        min = "0" + min
     else if (sec < 10) 
        sec = "0" + sec

    let total = hora + ":" + min + ":" + sec
    let timeSet = document.getElementById('clock').innerHTML = total
}

setInterval(clock, 500)