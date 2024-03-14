/*
>> JAVASCRIPT LET
A variável declarada pelo comando let não pode ser novamente declarada. Sendo assim, o comando abaixo não é permitido:
    > let nome = 'Manoel'; // declarando a variável
    > let nome = 'Sirleide'; // declarando novamente a variável. Comando não permito.

Já com o comando var é possível fazer uma nova declração de uma variável já decla
    > var nome = 'Manoel';
    > var nome = 'Sirleide';

>> BLOCK SCOPE
As palavras reservadas let e const declaram variáveis Block Scope (Escopo de bloco). Variáveis declaradas dentro de um {} não podem ser acessadas de fora do bloco. OBS: o comando var não declara uma variável Block Scope. 
*/

{
    let x = 0;
    const j = 3;
}