/*
var frutas = [
    'Banana',
    'Uva',
    'Maçã',
    'Mamão',
    'Romã',
    'Pera',
    'Abacate'
]

// Ordenando uma Array de forma crescente

    console.log(frutas.sort())

// Ordenando uma Array de forma decrescente

    console.log(frutas.reverse())

// Ordenando Numbers

    var pontos  = []
    for (var i = 0; i <= 100; i += 5) {
        pontos.push(i)
    }

    console.log(pontos.sort(function(a, b){return 0.5 - Math.random()})) // Ordenação aleatória
    console.log(pontos.sort(function(a, b){return b - a})) // Decrescente
    console.log(pontos.sort(function(a, b){return a - b})) // Crescente

// O método de ordenação aleatória de Fisher Yates

    var pontos = []

    for (var i = -100; i <= 100; i += 5) {
        pontos.unshift(i)
    }

    console.log(pontos)

    // Método de Fisher Yates

        function shuffle(array) {
            
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * i)
                let k = array[i]
                array[i] = array[j]
                array[j] = k
            }

            return array
        }
        
        shuffle(pontos)
        console.log(pontos)

// Maior e menor valor de uma Array

    console.log(`Valor Máximo: ${Math.max.apply(null, pontos)}`) // Valor máximo
    console.log(`Valor Mínimo: ${Math.min.apply(null, pontos)}`) // Valor mínimo
*/
// Ordenando um object array

    const cars = [
        {marca: 'Volvo', ano: 2016},
        {marca: 'Saab', ano: 2001},
        {marca: 'BMW', ano: 2010}
    ]

    // Numbers
        
        console.log(cars.sort(function(a, b){return a.ano - b.ano})) // Crescente
        console.log(cars.sort(function(a, b){return b.ano - a.ano})) // Decrescente

    // Strings

        console.log(cars.sort(function(a, b){
            let x = a.marca.toLowerCase()
            let y = b.marca.toLowerCase()
            if (x < y) {return -1}
            if (x > y) {return 1}
            return 0
        }))
