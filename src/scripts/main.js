const dataDoEvento = new Date("Feb 11, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const intervalo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distancia = timeStampDoEvento - timeStampAtual;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    const diasAte = Math.floor(distancia / dias);
    const horasAte = Math.floor((distancia % dias) / horas);
    const minutosAte = Math.floor((distancia % horas) / minutos);
    const segundosAte = Math.floor((distancia % minutos) / segundos);

    const tempoRestante = `${diasAte}d ${horasAte}h ${minutosAte}m ${segundosAte}s`;
    document.querySelector('#timer').textContent = tempoRestante;

    if (distancia <= 0) {
        clearInterval(intervalo);
        document.querySelector('#timer').textContent = "Evento iniciado!";
    }
}, 1000);

document.addEventListener('DOMContentLoaded', function(e){
    const bgd = document.querySelector('.events').styleList('background-image');

    for(bgd.value >= '#042840'; i === 0; i++){
        bgd.value + 1;
    };
    
});



AOS.init();
