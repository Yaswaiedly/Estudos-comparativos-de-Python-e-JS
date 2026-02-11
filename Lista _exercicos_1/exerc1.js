/*1. Calculadora de IMC: Crie um algoritmo que armazene o peso (number) e a altura
(number) de uma pessoa. Calcule o IMC e armazene o resultado em uma variável.*/

const peso = prompt ('informe o peso');
const altura = prompt ('informe a altura');

const IMC = peso/(altura*altura); //Math.pow (altura,2) calcular potência
alert (`Seu IMC é: ${IMC.toFixed (2)}`);