const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};
//1 como default

// const less = (obj, key, value) => {
//   obj[key] = value;
// };
// less(lesson2, "turno", "noite");


//2
// const listaKey = (obj) => Object.keys(obj);
// console.log(listaKey(lesson3));

//3

// const listaLangth = (obj) => Object.keys(obj).length;
// console.log(listaLangth(lesson1));

//4

// const valores = (obj) => Object.values(obj);
// console.log(valores(lesson2));

//5
// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons)

//6

// const getNotas = (obj) => {
//     let total = 0;

//     const array = Object.keys(obj);
//     for (const index in array) {
//         total += obj[array[index]].numeroEstudantes;
//     }
//     return total
// }
// console.log(getNotas(allLessons));

//7
const posicion = (obj,number) => Object.values(obj)[number];
console.log(posicion(lesson3, 2));

//8
// const getNotas = (obj, key, value) => {
//     const array = Object.entries(obj);
//     let resul = false;

//     for (let index in array) {
//         if (array[index][0] === key && array[index][1] === value) resul = true;
//     }
//     return resul;
// }
// console.log(getNotas(lesson1, 'turno', 'manhã'));
// console.log(getNotas(lesson2, 'materia', 'Matemática'));  
    
