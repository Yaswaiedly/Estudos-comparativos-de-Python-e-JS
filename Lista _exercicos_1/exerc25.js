/*25. Preço de Venda: Dado o custo de um produto e a margem de lucro desejada (%),
calcule o valor de venda.*/

const custo = Number (prompt ('Informe o valor de custo:'));
if(margem_lucro < custo && margem_lucro == 0) {
alert ('voce não tem faturamento')

}
const margem_lucro = Number (prompt ('Informe sua margem de lucro'));
const faturamento = (custo+(custo*margem_lucro/100))
const valor_venda = faturamento.toFixed (2)
alert (`O valor da venda é: ${faturamento.toFixed(2)}`);