/*4. Troca de Valores: Declare duas variáveis, a e b. Crie um algoritmo que troque os valores
entre elas de forma que a receba o valor de b e vice-versa.*/

let a = 10;
let b = 20;

let temp = a;

a = b;
b = temp;

console.log("a:", a);
console.log("b:", b);