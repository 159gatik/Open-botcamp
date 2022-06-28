let altura = 169;

let alturaMts = '1.69';
console.log(parseFloat(alturaMts));


let pesoKg = '71.80';
console.log(parseFloat(pesoKg));


let redondeoArriba = Math.round(alturaMts);

console.log(redondeoArriba);

let redondeoAbajo = Math.floor(pesoKg);

console.log(redondeoAbajo);

let valor = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
