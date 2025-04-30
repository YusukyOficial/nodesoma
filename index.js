let readlineSync = require('readline-sync');

let n = 1;
let total = 0;

console.log("Programa que soma 4 numeros");
let i = 1;
while(n!=0)
{
    n = parseFloat(readlineSync.question(`Informe o ${i} Numero: `));
    total += n;
    i++;
}

console.log(`Total = ${total}`);