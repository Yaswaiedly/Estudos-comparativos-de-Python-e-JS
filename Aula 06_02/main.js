/**
 * *Tipos inteiros e decimais
 */

const num = 1 /**cont uma vez declarado não tem alteração */
let num_2; /**Let pode mudar o valor */
num_2 = 25.96; 

/**Tipos de boleanos em JavaScript */
const verificar_valor_maior = 4 > 1;
let verificar_valor_menor = 4 < 2;

/**Tipos de texto (com tres formas) */
const meu_texto = 'Minha frase'; /**Aspas simples */
let minha_frase = "Estudar programação"; /**Aspas dupla */
const frase = `texto: ${ meu_texto}` /** Dolar $ abre chaves - tem que se com crazes investido -> ` */
//Fluxos de saida console.log, alert => (igual ao print em Python)

// calculadora no JavaScrip - Operadores Aritméticos//
let valor_1 = 56;
let valor_2 = 5;

const soma = valor_1 + valor_2;
let subtracao = valor_1 - valor_2;
console.log (soma)
console.log(subtracao) 

let multiplicacao = valor_1 * valor_2;
console.log (multiplicacao);