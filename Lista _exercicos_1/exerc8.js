/*Cálculo de Desconto: Dado um valor de produto e uma porcentagem de desconto,
calcule o preço final.*/

const valor_produto = prompt('Informe o valor do produto:');
const porcentagem_desconto = prompt('Informe a porcentagem do valor do desconto');
if(valor_produto !== Number){
    alert(`Voce esta mandando um valor que não é numérico`)
} else if (valor_desconto !== Number){
alert (`o valor de desconto deve ser um número`)
}

const valor_desconto = valor_produto*(porcentagem_desconto/100);
alert(`Para um produto que custa ${valor_produto} o desconto ${porcentagem_desconto}, resulta em ${valor_produto - valor_desconto} total a pagar`)