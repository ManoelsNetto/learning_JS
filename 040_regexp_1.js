// Regular expressions
/*
    /padrão/modificadores;
*/

// Métodos string

    let text = 'Visite W3Schools!'

    console.log(text.search(/w3schools/i))
    console.log(text.replace(/w3schools/i, 'Microsoft'))

// Modificadores
/*
    i -> Case-insensitive
    g -> Global match
    m -> Multiline match
*/

// Padrões
/*
    [abc] -> Encontra qualquer dos caracteres entre parêntesis.
    [0-9] -> Encontra qualquer dos dígitos entre parêntesis.
    (x|y) -> Encontra qualquer uma das alternativas separadas por |.

    Metacaracteres

        \d -> Encontra um dígito
        \s -> Encontra espaço em branco 
        \b -> encontra o início ou final de uma palavra.
            Início -> \bWORD
            Final -> WORD\b
    
    Quantificadores
        n+ -> Encontrará qualquer string que contenha ao menos um n
        n* -> Encontrará qualquer string que conter nenhuma ou várias ocorrências de n.
        n? -> Encontrará qualquer string que contenha nenhuma ou uma ocorrência de n.
*/
// RegExp Object

    console.log(/life/.test('The best things in life are free!'))
    console.log(/life/.exec('The best things in life are free!'))
