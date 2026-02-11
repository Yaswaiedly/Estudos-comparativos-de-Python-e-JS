/*10. Sucessor e Antecessor: Leia um número inteiro e armazene seu antecessor e seu
sucessor em variáveis distintas.*/

const numero_verificar = prompt ('informar um numero')
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
alert (`${antercessor}--- ${numero_verificar} --- ${sucessor}`);