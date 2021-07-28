function tipoCombustivel2(precoGasolina, precoEtanol) {
    if(precoEtanol <= 0.7 * precoGasolina) {
        return "Etanol";
    } else {
        return "Gasolina";
    }
}

const precoGasolina = document.getElementById("preco-gasolina");
const precoEtanol = document.getElementById("preco-etanol");
const resultElement = document.getElementById("tipo-combustivel");
const button = document.getElementById("button");

function showResult() {
    if(precoGasolina.value != "" && precoEtanol.value != "") {
        let valorPrecoGasolina = parseFloat(precoGasolina.value);
        let valorPrecoEtanol = parseFloat(precoEtanol.value);
    
        let tipoCombustivel = tipoCombustivel2(valorPrecoGasolina, valorPrecoEtanol);
        var tipoCombustivelString = tipoCombustivel + " é mais vantajoso";
    } else {
        var tipoCombustivelString = "Preencha todos os campos!";
    }

    resultElement.classList.add("result");

    let i = 0;
    resultElement.value = "";
    button.disabled = true;
    let interval = setInterval(() => {
        resultElement.value += tipoCombustivelString[i];
        i++;
        if(i == tipoCombustivelString.length) {
            clearInterval(interval);
            button.disabled = false;
        }
    }, 100);
}