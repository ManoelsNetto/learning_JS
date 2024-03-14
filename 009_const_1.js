/* 
Constantes não podem ser declaradas novamente e/ou receber um outro valor. Outro ponto importante é que a constante já deve receber um valor no momento de sua declaração. 
*/

const pi = 3.141592653589793;

/*

> const pi = 3.1415; // Esse comando não é permitido. pois a constante pi já foi declarada. 

> pi = 3.1415 // Este outro comando também não é permitido pois o pi já recebeu um valor.

> const pi; // Não é permitido pois a constante já deve ser declarada recebendo com um valor.

*/


/*
>> QUANDO USAR UMA CONST

Deve-se sempre utilizar uma const, a não ser que esse valor possa mudar/variar no futuro.
*/


/*
>> CONST ARRAYS

Ao criarmos arrays constantes, é possível adicionar novos elementos e alterar os existentes. Contudo não é possível declarar novamente um array constante e nem reatribuir.
*/

// Podemos criar arrays constantes.

const cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars);

// Podemos alterar um elemento de uma array constante.

cars[0] = 'Toyota';
console.log(cars)

// Podemos adicionar um novo elemento a array constante.

cars.push('Audi')
console.log(cars)

/*
>> CONST OBJECTS

Você pode mudar as propriedades de um objeto constante.
*/

// Podemos criar um objeto constante.
const car = {tipo:'fiat', modelo:'500', cor:'branco'};
console.log(car)

// Podemos mudar uma propriedade de um objeto constante.
car.cor = 'preto';
console.log(car)

// Podemos também adicionar uma propriedade.
car.proprietario = 'Sirleidinda'
console.log(car)