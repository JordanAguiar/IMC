var altura = document.querySelector('.altura').value;
var imc = peso / (altura * altura);
var resultado = document.querySelector('.resultado');
resultado.innerText = imc.toFixed(2);
var peso = document.querySelector('.peso').value;

function calcular(){
   

    if(imc < 18.5){
        resultado.textContent += ' - Abaixo do peso';
    }else if(imc < 24.9){
        resultado.textContent += ' - Peso normal';
    }else{
    resultado.textContent += ' - Acima do peso';}
}