function consumoVeiculo2(quilometros, litros) {
    let consumo = quilometros / litros;
    return consumo;
}

const quilometros = document.getElementById("quilometros");
const litrosCombustivel = document.getElementById("litros-combustivel");
const resultElement = document.getElementById("consumo-veiculo");
const button = document.getElementById("button");

function showResult() {
    if(quilometros.value != "" && litrosCombustivel.value != "") {
        let valorQuilometros = parseFloat(quilometros.value);
        let valorLitrosCombustivel = parseFloat(litrosCombustivel.value);
    
        if(valorQuilometros == 0 && valorLitrosCombustivel == 0) {
            var consumoVeiculoString = "Valor inválido";
        } else if(valorQuilometros > 0 && valorLitrosCombustivel == 0) {
            var consumoVeiculoString = "Você alugou um carro elétrico";
        } else {
            let consumoVeiculo = consumoVeiculo2(valorQuilometros, valorLitrosCombustivel);
            var consumoVeiculoString = "Consumo: " + consumoVeiculo.toFixed(2).replace('.', ',') + " Km/L";
        }
    } else {
        var consumoVeiculoString = "Preencha todos os campos!";
    }

    resultElement.classList.add("result");

    let i = 0;
    resultElement.value = "";
    button.disabled = true;
    let interval = setInterval(() => {
        resultElement.value += consumoVeiculoString[i];
        i++;
        if(i == consumoVeiculoString.length) {
            clearInterval(interval);
            button.disabled = false;
        }
    }, 100);
}