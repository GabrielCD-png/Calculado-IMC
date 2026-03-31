function calcularIMC() {
    // Captura os valores e converte para número
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let pResultado = document.getElementById("resultado");
    let pClassificacao = document.getElementById("classificacao");

    // Lógica do Cálculo: IMC = peso / (altura * altura)
    let imc = peso / (altura * altura);

    // Exibe o valor do IMC com 2 casas decimais
    pResultado.innerHTML = "IMC: " + imc.toFixed(2);

    // Lógica de Classificação (Igual ao que faríamos em C)
    if (imc < 18.5) {
        pClassificacao.innerHTML = "Classificação: Abaixo do peso";
    } else if (imc < 25) {
        pClassificacao.innerHTML = "Classificação: Peso normal";
    } else if (imc < 30) {
        pClassificacao.innerHTML = "Classificação: Sobrepeso";
    } else {
        pClassificacao.innerHTML = "Classificação: Obesidade";
    }
}