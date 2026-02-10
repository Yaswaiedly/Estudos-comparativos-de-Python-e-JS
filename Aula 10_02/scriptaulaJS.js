const num1 = 8;
const num2 = "8";
const num3 = 6;
const num4 = 5.6;
console.log ("verificar se são iguais identidade: "+ num1 === num2);
console.log ("verificar igualdade: "+ num1 == num2);
console.log (`verificar se ${num1} é maior que ${num3}: ${num1 > num3}`)
console.log (`verificar se o valor ${num1} (int) é menor que ${num2} (string): ${num1 < num2}`)
console.log (`verificar se há desigualdade entre ${num3} e ${num4}: ${num4 != num3}`);

/* 2. Conversor de Temperatura: Declare uma variável com a temperatura em Celsius e
converta para Fahrenheit usando a fórmula (C * 9/5) + 32.
let Celsius = prompt('Informe a temperatura em celsius para ser convertda em Fahrenheit');
const Fahrenheit = (Celsius * 9/5) + 32;
alert (`${Celsius} em celsius é ${Fahrenheit} Fahrenheit.`)*/


/*Cálculo de Desconto: Dado um valor de produto e uma porcentagem de desconto,
calcule o preço final.

const valor_produto = prompt('Informe o valor do produto:');
const porcentagem_desconto = prompt('Informe a porcentagem do valor do desconto');
if(valor_produto !== Number){
    alert(`Voce esta mandando um valor que não é numérico`)
} else if (valor_desconto !== Number){
alert (`o valor de desconto deve ser um número`)
}

const valor_desconto = valor_produto*(porcentagem_desconto/100);
alert(`Para um produto que custa ${valor_produto} o desconto ${porcentagem_desconto}, resulta em ${valor_produto - valor_desconto} total a pagar`)*/

/*10. Sucessor e Antecessor: Leia um número inteiro e armazene seu antecessor e seu
sucessor em variáveis distintas.*/

/*const numero_verificar = prompt ('informar um numero')
const antercessor = numero_verificar - 1;
const sucessor = Number(numero_verificar) + 1;
switch (numero_verificar == Number){
    case 4:
        break;
    case 2:
        sucessor = 3
        break;
        default:
            alert(`que ${numero_verificar} não há casos de teste`)

}
alert (`${antercessor}--- ${numero_verificar} --- ${sucessor}`);*/

/*25. Preço de Venda: Dado o custo de um produto e a margem de lucro desejada (%),
calcule o valor de venda.*/

/*const custo = Number (prompt ('Informe o valor de custo:'));
if(margem_lucro < custo && margem_lucro == 0) {
alert ('voce não tem faturamento')

}
const margem_lucro = Number (prompt ('Informe sua margem de lucro'));
const faturamento = (custo+(custo*margem_lucro/100))
const valor_venda = faturamento.toFixed (2)
alert (`O valor da venda é: ${faturamento.toFixed(2)}`)*/





