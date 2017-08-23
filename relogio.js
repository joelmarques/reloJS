function Relogio() {

    var dataAtual = new Date();

    var hora = dataAtual.getHours();

    var minuto = dataAtual.getMinutes();

    var segundo = dataAtual.getSeconds();

    document.getElementById("horaAtual").innerHTML = hora + ":" + minuto + ":" + segundo;
}

var dataAtual = setInterval(Relogio, 1000);
