const frutas = [
    'Banana',
    "Laranja",
    `Maçã`,
    'Manga'
]
/*
// Propriedades e métodos

    // Tamanho de uma array
        console.log(frutas.length)

    // Ordenando uma array
        console.log(frutas.sort())
        console.log(frutas.reverse())

// Acessando o último elemento de uma array

    console.log(frutas[frutas.length - 1])

// Looping dos elementos de uma array

    let frutas_length = frutas.length

    for (let i = 0; i < frutas_length; i++) {
        console.log(frutas[i])
    }
   
    // Array.forEach()

    frutas.forEach(mostrar_valores)

    function mostrar_valores(valor) {
        console.log(valor)
    }
*/
// Adicionando elementos a uma array

    frutas.push('Limão')
    console.log(frutas)

    // Dá para adicionar novos elementos por meio do length também

    frutas[frutas.length] = 'Pera'
    console.log(frutas)

// Como saber se um object é uma array?

    console.log(Array.isArray(frutas))
    console.log(frutas instanceof Array)