// const acorda = () => 'Acordando!!';
// const bora = () => 'Bora tomar café!!';
// const partiu = () => 'Partiu dormir!!';

// const doingThings = (retorno) => {
//     const result = retorno();
//     console.log(result);
// }

//doingThings(acorda)

// const myfunction = (nomeCompleto) => {
//     const email = nomeCompleto.toLowerCase().trim(' ').join('');
//     return {
//         nomeCompleto, email: `${email}@trybe.com`
//     };
// };

// const newEmployees = (nomeCompleto) => {
//     const employees = {
//       id1: nomeCompleto('Pedro Guerra'), 
//       id2: nomeCompleto('Luiza Drumond'), 
//       id3: nomeCompleto('Carla Paiva'), 
//     }
//     return employees;
// };

// 2
// const checarNumero = (meuNumero, numeroSorteio) => meuNumero === numeroSorteio;
// const aleatorio = (meuNumero, retorno) => {
//     const numeroSorteio = Math.floor((Math.random() * 5) + 1);
//     return retorno(meuNumero, numeroSorteio) ? 'Lucky day, you won!' : 'Try Again!';
// }
// console.log(aleatorio(4, checarNumero));