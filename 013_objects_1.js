/*
>> JS Objects
    
    Objetos são variáveis que podem conter múltiplos valores (propriedades). 
*/

// Uma prática comum, na hora de definir um objeto JS, é utilizar a palavra reservada const.

const carro = {
    marca:'Fiat', 
    modelo:'500', 
    cor:'white'
}; 

console.log(carro);

const pessoa = {
    primeiroNome: 'Sirleide',
    sobrenome: 'Dos Santos',
    idade: 25,
    corOlhos: 'Castanho claro'
};

console.log(pessoa);


// ACESSANDO PROPRIEDADES DE UM OBJETO

console.log(pessoa.primeiroNome);
console.log(pessoa['primeiroNome']);

/* 
>> MÉTODOS DE UM OBJETO
    
    Métodos são ações que podem ser performadas por um objeto. Os métodos são armazenados dentro das propriedades de um objeto. Assim, um método é uma função armazenada como uma propriedade.
*/

const pessoa_1 = {
    primeiroNome: 'Valdice',
    sobrenome: 'Da Silva Lima',
    id: 1523,
    nomeCompleto: function() { // Definição do método nomeCompleto()
        return this.primeiroNome + ' ' + this.sobrenome; // this se refere ao objeto pessoa_1
    }
};

console.log(pessoa_1.nomeCompleto());

/*
>> O QUE SIGNIFICA O this?
    No JavaScript, this é uma palavra reserva que se refere sempre a um objeto. Esse objeto irá depender de como o this foi chamado. Por exemplo, caso o this tenha sido chamado em um método dentro de um objeto, ele irá se referir ao objeto (exemplo acima).  
*/
