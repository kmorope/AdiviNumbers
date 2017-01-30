var medio = 500;
var numeroPiso = 0;
var numeroTecho = 1000;

function startGame() {
    var numero = document.getElementsByClassName('numberInput')[0].value;
    if (numero > 1000) {
        alert('Tu numero no debe ser mayor que 1000');
        document.getElementsByClassName('numberInput')[0].value = '';
    } else if (numero < 0) {
        alert('Tu numero no debe ser menor que 0');
        document.getElementsByClassName('numberInput')[0].value = '';
    } else if (numero == '') {
        alert('Debes escribir un numero');
        document.getElementsByClassName('numberInput')[0].value = '';
    } else {
        alert('Empezemos !!!');
        document.getElementsByClassName('numberInput')[0].setAttribute("disabled", "true");
        document.getElementsByClassName('minumero')[0].value = 500;
    }

}

///Intenta adivinar el numero
function binaryAlgorithm(className) {
    if (className == 'menorQue') {
        numeroTecho = medio;
        medio = parseInt(parseInt(numeroPiso) + parseInt(numeroTecho)) / 2;
        document.getElementsByClassName('minumero')[0].value = medio;
    }
    if (className == 'mayorQue') {
        numeroPiso = medio;
        medio = parseInt(parseInt(numeroPiso) + parseInt(numeroTecho)) / 2;
        document.getElementsByClassName('minumero')[0].value = medio;
    }
    if (document.getElementsByClassName('numberInput')[0].value == medio) {
        alert('Tu numero es ' + medio + '... Adivine :D');

    }
}


document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll('.buttonGame'), function (el) {
        el.addEventListener('click', function () { 
            var numero = document.getElementsByClassName('numberInput')[0].value;
            if (numero == '') {
                alert('Debes escribir un numero');
                document.getElementsByClassName('numberInput')[0].value = '';
            }else{
                binaryAlgorithm(this.classList[1]);
            }
            
        })
    })
})