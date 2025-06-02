const caixaHoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById("segundos");

const relogio = setInterval(() => {

    let dateToday = new Date();

    let horas = dateToday.getHours();  
    let minutos = dateToday.getMinutes();
    let segundos = dateToday.getSeconds(); 

    if (segundos < 10) segundos = "0" + segundos 
    if (minutos < 10) minutos = "0" + minutos
    if (horas < 10) horas = "0" + horas 
    

    caixaHoras.textContent = horas
    caixaMinutos.textContent = minutos
    caixaSegundos.textContent = segundos

});

 
