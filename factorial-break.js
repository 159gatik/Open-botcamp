let r = 1;
let numero = 10;

while (numero > 1) {
    r *= numero;
    numero--;
    if (numero === 1) break;
}

console.log(r);
