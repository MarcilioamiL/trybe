let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
(1)
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

(2)
let soma = 0;
for (let i = 0; i < numbers.length; i++){
    soma += numbers[i]
}
console.log(soma)

(3)
let media = 0;
for (let i = 0; i < numbers.length; i++){
    media += numbers[i]
}
console.log(media / numbers.length)

(4)
let resul = 0;
for (let i = 0; i < numbers.length; i++){
    resul += numbers[i];
}
resul = resul / numbers.length;
if (resul > 20){
    console.log("valor maior que 20")
}else {
     console.log("valor menor que 20")
}

(5)
let maior = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > maior){
        maior = numbers[i]
    }
} 
console.log(maior)

(6)

let valor = 0;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        valor += 1;
        
    }
}
if (valor === 0){
    console.log("nenhum valor impar encontrado")
}else{
    console.log(valor)
}

(7)

let menorValor = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] < menorValor){
        menorValor = numbers[i];
    }
}
console.log(menorValor)

(8)

let valor = [];

for(let i = 1; i <= 25; i++){
    valor.push([i]);
}
console.log(valor)

(9)
let valor = [1, 2, 3, 4, 5, 6, 7, 8, 9,
     10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25]
for (let i = 0; i < valor.length; i++){
    console.log(valor[i] / 2)
}