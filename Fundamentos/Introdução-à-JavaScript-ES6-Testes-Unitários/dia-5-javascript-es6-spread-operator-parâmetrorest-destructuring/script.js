// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['maçã', 'uva', 'queijo'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['coco', 'goiaba', 'caju'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional]
// };

// console.log(fruitSalad(specialFruit, additionalItens));


// const user = {
//     name: 'Maria',
//     age: 21,
//     nationality: 'Brazilian',
//   };
  
//   const jobInfos = {
//     profession: 'Software engineer',
//     squad: 'Rocket Landing Logic',
//     squadInitials: 'RLL',
//   };

//   //   console.log(todosOsDados)
  
//   const todosOsDados = ({...user,...jobInfos});
//   const todosOsDados7 = ({ name, age, nationality, profession, squadInitials, squad }) => {
//     console.log(`"Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}"`)
//   }
//   todosOsDados7(todosOsDados)


//Dado um arquivo com dados de regiões, estados e cidades, crie uma função (mapCities) 
//que retorna um objeto no qual as chaves são as siglas das regiões (N, NE, CW, SE e S) 
//e os valores são arrays compostos por objetos com o nome da cidade e o nome do estado.
{
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ],
}

