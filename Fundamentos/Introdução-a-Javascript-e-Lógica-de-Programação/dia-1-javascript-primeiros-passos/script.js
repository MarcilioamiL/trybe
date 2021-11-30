//(1)
let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//(2)

const nota2 = 40;
const nota3 = 50;

if (nota2 > nota3){
    console.log("'nota2' é maior que 'nota3'")
}
else {
    console.log("'nota3' é me que 'nota2'")
}

//(3)

const num1 = 10;
const num2 = 20;
const num3 = 15;

if (num1 > num2 && num1 > num3){
    console.log("num1 e o " + num1 + " maior numero");
}
else if (num2 > num1 && num2 > num3){
    console.log("num2 e o " + num2 + " maior numero")
}
else{
    console.log("num3 e o " + num3 + " maior numero")
}

//(4)

const valor = -2;

if (valor > 0){
    console.log('positive')
}
else if (valor < -0){
    console.log('negative')
}
else {
    console.log('valor ' + valor + ' zero')
}

//(5)

const tri1 = 20;
const tri2 = 60;
const tri3 = 100;

const somaDosLados = tri1 + tri2 + tri3;
const todasAssomas = tri1 > 0 && tri2 > 0 &&  tri3 > 0;

if (todasAssomas){
    if (somaDosLados === 180){
        console.log('true');
    }
    else {
        console.log('false');
    };
    
}else{
    console.log('erro na entrada de dados')
}

(6)

const pecas = 'rei';

switch (pecas) {
    case 'bispo':
        console.log('bispo -> anda na diagonal');
        break;
    case 'rei':
        console.log('rei -> uma casa para frente ou lado');
        break;
    default:
        console.log('erro, peça desconhecida');
};

//(7)

const nota = 30;

if (nota < 0 || nota > 100){
    console.log('erro de entrada');
}
else if (nota >= 90){
    console.log('A');
}
else if (nota >= 80){
    console.log('B');
}
else if (nota >= 70){
    console.log('C');
}
else if (nota >= 60){
    console.log('D');
}
else if (nota >= 50){
    console.log('E');
}
else {
    console.log('f');
}

(8)

const num1 = 5;
const num2 = 5;
const num3 = 5;

let isEven = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    isEven = true;
}
console.log(isEven)

(9)

const num1 = 5;
const num2 = 5;
const num3 = 6;

let isOdd = false;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0){
    isOdd = true;
};
console.log(isOdd);

(10)
