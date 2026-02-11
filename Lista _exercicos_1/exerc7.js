/*7. Verificador de Idade: Armazene o ano de nascimento. Calcule a idade atual subtraindo
do ano corrente e armazene em uma variável.*/

let anoNascimento = 1994;


let anoAtual = new Date().getFullYear(); /*// Pegando o ano atual automaticamente*/
let idade = anoAtual - anoNascimento;

console.log("Sua idade é:", idade);