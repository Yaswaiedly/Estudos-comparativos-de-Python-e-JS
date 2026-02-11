/*9. Conversor de Moeda: Crie um algoritmo que converta um valor em Reais para Dólares, armazenando a taxa de câmbio em uma constante.*/

let valorReais = 100;
const taxaCambio = 0.192;

let valorDolares = valorReais * taxaCambio;

console.log("Em dólares isso equivale a:", valorDolares);