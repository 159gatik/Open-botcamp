// - La fecha de hoy
const fecha = new Date()
console.log(fecha);
// - La fecha de tu nacimiento
const nacimiento = new Date("September 22, 1997")
console.log(nacimiento);

// - Un variable que indique si hoy es más tarde(>) que la fecha de tu nacimiento

const fecha2 = fecha > nacimiento;

console.log(fecha2);

//  - Una variable que contenga el día de tu nacimiento

const dia = nacimiento.getDate()
console.log(dia);
//    - Una variable que contenga el mes de tu nacimiento(recuerda que Enero es mes 0)
const mes = nacimiento.getMonth() + 1;
console.log(mes);
// - Una variable que contenga el año de tu nacimiento(con 4 dígitos)

const anyo = nacimiento.getFullYear();
console.log(anyo);
