/*13. Verificador de Paridade: Crie um algoritmo que armazene o resto da divisão de um
número por 2 para identificar se ele é par.*/

let numero = 8;
let resto = numero % 2;
if (resto === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}
