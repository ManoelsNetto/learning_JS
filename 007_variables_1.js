/* 
>> QUANDO USAR O VAR?

Para declarar uma variável no  JS, deve-se utilizar uma das seguintes palavras reservadas: var, let ou const

A palavra reservada var é usada em todos os programas JS desde 1995 até o presente. Já as palavras let e const foram adicionadas no JS em 2015. Assim, caso você deseje que o seu código rode em um browser (navegador) mais antigo, você deve utilizar a palavra reservada var.
*/ 

var x, y, z;

/*
>> QUANDO USAR O CONST E O LET?

É preferível usar o const caso você deseje definir um valor, ou uma regra, geral (constante). Já caso deseje mudar o valor de uma variável, é preferível que você utilize o let.
*/

const price1 = 5, price2 = 6; // Ambos são constantes. Sendo assim, esses valores não podem mudar.

let total = price1 + price2;

console.log('Total: ' + total) // Uma variável. Este valor pode mudar.



