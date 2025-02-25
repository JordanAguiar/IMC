
function calcular(){
    var altura = document.querySelector('.altura').value;
    var peso = document.querySelector('.peso').value;
    var imc = peso / (altura * altura);
    var resultado = imc.toFixed(1);

    if (resultado < 18.5) {
        document.querySelector('.resultado').innerHTML = `${resultado} Abaixo do peso `;
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        document.querySelector('.resultado').innerHTML = `${resultado} Peso normal `;
    } else if (resultado >= 25 && resultado <= 29.9) {
        document.querySelector('.resultado').innerHTML = `${resultado} Sobrepeso `;
    } else if (resultado >= 30 && resultado <= 34.9 ){
        document.querySelector('.resultado').innerHTML = `${resultado} Obesidade grau 1 `;;
    } else if (resultado >= 35 && resultado <= 39.9) {
        document.querySelector('.resultado').innerHTML = `${resultado} Obesidade grau 2 `;;
    } else {
        document.querySelector('.resultado').innerHTML = `${resultado} Obesidade grau 3 `;;
    }

}



