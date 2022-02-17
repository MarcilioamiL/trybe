function limite_texto(valor) {
    quant = 500;
    total = valor.length;
    if(total <= quant) {
        resto = quant - total;
        document.getElementById('cont').innerHTML = resto;
    } else {
        document.getElementById('texto').value = valor.substr(0,quant);
    }
}

function criandoEstados () {
    let estado = document.getElementById('estado');
    let opEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT',
    'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < opEstados.length; index += 1) {
        let opcaos = document.createElement('option');
        opcaos.innerText = opEstados[index];
        opcaos.value = opEstados[index];
        estado.appendChild(opcaos);
        
    }
    
}


const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', prevenT);
function prevenT (event) {
    event.preventDefault();
    setData()
}

const inputData = document.querySelector('.input-data');

function setData() {

    let separatedInput = inputData.value.split('');
    let day = separatedInput[0] + separatedInput[1]
    let dayNumber = parseInt(day)
    console.log(dayNumber)

    // += '/'

    let month = separatedInput[3] + separatedInput[4]
    let monthNumber = parseInt(month)
    console.log(monthNumber)

    let year = separatedInput[6] + separatedInput[7] + separatedInput[8] + separatedInput[9]
    let yearNumber = parseInt(year)
    console.log(yearNumber)

    if (dayNumber > 0 && dayNumber <= 31 && separatedInput[2] ==='/'  && separatedInput[5] === '/' && yearNumber >= 1900) {
        return inputData.value;

    }
    else{
        window.alert('Não esqueça de colocar as "/" após o dia e o mês')
    }

}











window.onload = function () {
    criandoEstados ();
}