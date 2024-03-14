/*
Uma função JS é um bloco de código desenhado para performar, repetidas vezes, uma tarefa específica.
*/

function nome_da_funcao(parametro1, parametro2) {
    // Código a ser executado
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

console.log(toCelsius(77))

/*
>> VARIÁVEIS LOCAIS
    Variáveis declaradsa dentro de uma função torna-se uma varável local à função. Sendo assim, não é possível acessá-las fora da função.
*/

function myFunction() {
    let carName = 'Volvo'

    // Dentro da função é possível usar a variável carName. Contudo a mesma não pode ser acessada fora da função.
}