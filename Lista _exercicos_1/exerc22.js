/*22. Área de Triângulo: Armazene base e altura e calcule a área usando a fórmula (base *
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

//---------------------------------------

// área = (base * altura) / 2

let base = 10;
let altura = 6;
let area = (base * altura) / 2;

console.log("A área do triângulo é:", area);

