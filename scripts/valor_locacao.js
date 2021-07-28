function valorLocacao2(quilometros, dias) {
    let valor = (dias * 100) + (quilometros * 0.5);
    return valor;
}

const quilometros = document.getElementById("quilometros");
const dias = document.getElementById("dias");
const resultElement = document.getElementById("valor-locacao");
const button = document.getElementById("button");

function showResult() {
    if(quilometros.value != "" && dias.value != "") {
        let valorQuilometros = parseInt(quilometros.value);
        let valorDias = parseInt(dias.value);
    
        let valorLocacao = valorLocacao2(valorQuilometros, valorDias);
        var valorLocacaoString = "R$ " + valorLocacao.toFixed(2).replace('.', ',');
    } else {
        var valorLocacaoString = "Preencha todos os campos!";
    }

    resultElement.classList.add("result");

    let i = 0;
    resultElement.value = "";
    button.disabled = true;
    let interval = setInterval(() => {
        resultElement.value += valorLocacaoString[i];
        i++;
        if(i == valorLocacaoString.length) {
            clearInterval(interval);
            button.disabled = false;
        }
    }, 100);
}