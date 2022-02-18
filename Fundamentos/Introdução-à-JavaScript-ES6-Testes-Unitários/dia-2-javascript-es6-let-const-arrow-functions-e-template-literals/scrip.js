// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3'));

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '4'));

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
  
//   let newKey = 'lastName';
//   const lastName = 'Ferreira';
//   customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
//   console.log(customer);
// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
  // for (const property in coolestTvShow) {
  //   console.log(property);
  // }
  
  //console.log(Object.keys(coolestTvShow));
  
  // [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]
// 

// 
// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
// };

// const person = {
//     name:'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const newPerson = Object.assign({},person,lastName);
//   newPerson.name = 'Gilberto';
//   newPerson.lastName = 'Braga';
//   console.log(newPerson);
//   console.log(person);

// const band = {
//     name: 'Blind Guardian',
//     formedIn: 1986,
//     lastAlbum: 'Beyond the Red Mirror',
//   };
  
//   const info = {
//     genre: 'Power Metal',
//     lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
//   };
  
//   console.log(Object.assign(band, info))
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);