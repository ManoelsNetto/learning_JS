
const numbers_1 = [45, 4, 9, 16, 4, 25, 30]
/*
// Iteração sobre Arrays (Callback function -> quadno uma função chama uma outra função entre os seus argumentos)
    
    function valor_aleatorio(value, index, array) {

        console.log(Math.floor((Math.random() * 10) * value))
    }

    numbers_1.forEach(valor_aleatorio);

// Array mapping - > É um método usado para criar uma nova array performando uma função em cada elemento individualmemte.
    
    const numbers_2 = numbers_1.map(function(value, index, array){return Math.floor(value * (Math.random() * 10))})

    console.log(numbers_2)

// Filtrando elementos de uma array

    const acima_50 = numbers_2.filter(function(value, index, array){return value > 50})

    console.log(acima_50)

// Array reduce -> O método irá performar uma função em cada elemento da array para produzir (reduzir a) um único valor.

    function sum(total, value, index, array) {
        return total + value
    }

    console.log(numbers_1.reduce(sum, 20))

// Array every -> Irá verificar se todos os elementos de uma array respeita uma dada função lógica.

    let todos_maior_idade = numbers_1.every(function(value){return value >= 18})

    console.log(todos_maior_idade)

// Array some -> Verificará se algum dos valores de uma array respeita uma dada função lógica.

    let algum_maior_idade = numbers_1.some(function(value){return value >= 18})

    console.log(algum_maior_idade)

// Posição de um elemento em uma Array.

    const frutas = [
        'Goiaba',
        'Manga',
        'Abacaxi',
        'Abacate'
    ]

    let posicao_abacaxi = frutas.indexOf('Abacaxi')

    console.log(`Posição de abacaxi: ${posicao_abacaxi + 1}`)

// Array find e findIndex-> Irá retornar o primeiro elemento (ou índice) da array que respeitar uma dada função lógica.

    console.log(`Valor: ${numbers_1.sort().find(function(value){return value > 23})}`)
    console.log(`Índice: ${numbers_1.sort().findIndex(function(value){return value > 23})}`)

// Criando arrays a partir de uma string

    console.log(Array.from('ABCDE'))

// Array Keys
    
    const frutas = [
        'Goiaba',
        'Manga',
        'Abacaxi',
        'Abacate'
    ]
    const keys = frutas.keys()

    for (let x of keys) {
        console.log(x)
    }

// Array entries -> Irá retornar o par valor/chave dos elementos da array.

    const frutas = [
        'Goiaba',
        'Manga',
        'Abacaxi',
        'Abacate'
    ]
    const entradas = frutas.entries()

    for (let x of entradas) {
        console.log(x)
    }
*/
// Array includes -> Irá avaliar se um valor estar presente na Array.

    const frutas = [
        'Goiaba',
        'Manga',
        'Abacaxi',
        'Abacate'
    ]

    console.log(frutas.includes('Goiaba'))
    console.log(frutas.includes('Limão'))