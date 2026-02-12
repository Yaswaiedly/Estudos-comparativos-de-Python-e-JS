/*23. Inversão de Array: Crie um array com 5 números e exiba-os na ordem inversa.*/

//let lista_numero = [1, 56, 89, 125.56, 69];
let lista_numero = [];
let i = 1;

while (i < 5) {
    let number = prompt(`Informe o número: ${i}`);
    lista_numero.push(number);
    i++;
}

alert(`A lista inversa é: ${lista_numero.reverse()}`);

