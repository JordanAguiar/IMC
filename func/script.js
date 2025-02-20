function calcular(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    var resultado = document.getElementById('resultado');
    resultado.innerText = imc.toFixed(2);
    if(imc < 18.5){
        resultado.textContent += ' - Abaixo do peso';
    }else if(imc < 24.9){
        resultado.textContent += ' - Peso normal';
    }else{
    resultado.textContent += ' - Acima do peso';}
}