// (2) 
// let n = 5;
// let ster = '';

// for (let index = 1; index <= n; index += 1){
//     for (let cont = 1; cont <= n; cont += 1){
//         if (cont == index){
//             ster += '*'
//         }
//     }
//     console.log(ster)
// }

// (3)
// let n = 5;
// let ster = '';
// let espaco = '';

// for (let index = 0; index <= n; index +=1 ){
//     for (let lado = 0; lado < n-index; lado += 1){
//         espaco += ' ';
//     }

//     for (let cont = 0; cont <= index; cont += 1){
//         // if (cont == index){
//         ster += '*'
        
//     }
//     console.log(espaco + ster)
//     espaco = ''
//     ster = ''
// }

// (1)


// 4- Depois, faça uma pirâmide com n asteriscos de base:

// let n = 5;

// let resul = '';

// for (let index = 0; index < n; index += 1){
//     resul = resul + '*';
// }
// for (let index = 0; index < n; index += 1){
//     console.log(resul)
// }

// (4)

// let n = 5;
// let ster = '';
// let espaco = '';

// for (let index = 1; index <= n; index += 2 ){
//     for (let lado = 1; lado < n-index; lado += 2){
//         espaco += ' ';
//     }

//     for (let cont = 1; cont <= index; cont += 1){
//         // if (cont == index){
//         ster += '*'
        
//     }
//     console.log(espaco + ster)
//     espaco = ''
//     ster = ''
// }

// (5 ainda vou fazer)
// let n = 5;
// let ster = '';
// let espaco = '';

// for (let index = 0; index <= n; index += 1 ){
//     for (let lado = 1; lado < n-index; lado += 2){
//         espaco += ' ';
//     }

//     for (let cont = 0; cont <= index; cont += 1){
//         // if (cont == index){
//         ster += '*'
        
//     }
//     console.log(espaco + ster)
//     espaco = ''
//     ster = ''
// }
// let n = 7;
// let ster = '';
// let espaco = '';
// for(let i = 0; i < Math.floor (n/2); i += 1){
//     espaco+='  ';
// }
// for (let index = 0; index <= Math.floor (n/2); index += 1 ){
//     if (index==0) ster+='*'; else ster += '';
//     console.log (espaco + ster);
//     espaco = espaco.slice (0, -1);
// }

// (5 bonus)
// let n = 7;
// let ster = '';
// let espaco = '';
// for(let i = 0; i<Math.floor(n/2); i +=1){
//     espaco+=' ';
// }

// for (let index = 0; index < Math.floor(n/2); index +=1 ){
//     if(index==0) ster+='*'; else ster+=' *';
//     console.log(espaco + ster);
//     espaco=espaco.slice(0, -1);
//     if(index!=0) ster = ster.slice(0, -1) + ' ';
// }
// ster=''
// for(let ultimate = 1; ultimate <= n; ultimate+=1) ster+='*';
//     console.log(ster);

// (6)

// let primo = 10;
// let  cont = [];

// for (let index = 2; index < primo; index += 1){
//     let valor = 0;

//     for (let j = 2; j < index; j += 1){
//         if (index % j == 0){
//             valor += 1
//         }
//     }if (valor == 0){
//         cont.push(index);
//     }
//     console.log(cont) 
// }