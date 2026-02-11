/*1. Calculadora de IMC: Crie um algoritmo que armazene o peso (number) e a altura
(number) de uma pessoa. Calcule o IMC e armazene o resultado em uma variável.

const peso = prompt ('informe o peso');
const altura = prompt ('informe a altura');

const IMC = peso/(altura*altura); //Math.pow (altura,2) calcular potência
alert (`Seu IMC é: ${IMC.toFixed (2)}`);

22. Área de Triângulo: Armazene base e altura e calcule a área usando a fórmula (base *
altura) / 2.*/

const lado_1 = Number (prompt('informe a medida do triangulo lado 1'));
const lado_2 = Number (prompt('Informe a medida do triangulo lado 2'));
const lado_3 = Number (prompt('Informe a medida do triangulo lado 3'));
/*const altura = Number(prompt('Informe a altura do triangulo'));*/

switch (lado_1 > 0){
    case (lado_1 == lado_2) && (lado_2 == lado_3) && (lado_3 == lado_1):
        alert('Triangulo Equilatero');
    break;
    case (lado_1 == lado_2) || (lado_2 == lado_3) || (lado_3 == lado_1):
        alert('triangulo Isosceles')
        break;
    default:
        alert('triangulo é escaleno');
}


/*const area = (base*altura) /2
alert (`a aréa do triangulo é ${area}`)*/




