
//aqui puedo decirle que pueda menter cualquier de estos valores si lo especifico(string | number |boolean)[] 
// const number: (string | number |boolean)[] = [1, 2, 3, 4, "5", 6, 7, 8, 9, 10];
//     number.push(true);
//     number

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const villians = ['Omega rojo', 'Dormammu', 'Duende verde']
// Recorre cada villano y muestra su nombre en mayúsculas en la consola
villians.forEach(v => console.log(v.toUpperCase()));