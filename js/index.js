function somar(){
    var primeiroNumeroSoma;
    var segundoNumeroSoma;
    var resultadoSoma;

    primeiroNumeroSoma = parseInt(document.getElementById("primeiroNumero").value);
    segundoNumeroSoma = parseInt(document.getElementById("segundoNumero").value);
    
    resultadoSoma = primeiroNumeroSoma + segundoNumeroSoma;

    document.write(resultadoSoma+"<br>");          
}