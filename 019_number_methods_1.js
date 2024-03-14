/*
// Métodos numéricos

    let x = 123, y = 9.6568;

    // toString() -> Irá transformar o número em uma string.

        console.log(x.toString())

    // toExponential()  -> Irá retornar uma string com o número escrito em notação exponencial. O parâmetro fractionDigits irá definir a quantidade de dígitos após a vírgula.

        console.log(y.toExponential(2)) // 9.66e+0
        console.log(y.toExponential(4)) // 9.6568e+0
        console.log(y.toExponential(6)) // 9.656800e+0

    // toFixed() -> Irá retornar uma string com o valor arredondado.
    
        console.log(y.toFixed(0)) // 10
        console.log(y.toFixed(2)) // 9.66
        console.log(y.toFixed(4)) // 9.6568
        console.log(y.toFixed(6)) // 9.656800

    // toPricision() -> Irá retornar uma string de um número escrito em um tamanho específico.

        console.log(y.toPrecision()) // 9.6568
        console.log(y.toPrecision(1)) // 1e+1 
        console.log(y.toPrecision(2)) // 9.7
        console.log(y.toPrecision(4)) // 9.657
        console.log(y.toPrecision(6)) // 9.65680

    // valueOf() -> Retornará um número como um número.

        console.log('123'.valueOf())
*//*
// Convertendo outros tipos de dados em number

    // Number()

        console.log(Number(true)) // 1
        console.log(Number('   10      ')) // 10
        console.log(Number('10 33')) // NaN
        console.log(Number('10,333')) // NaN
        console.log(Number('Manoel')) // NaN
        console.log(Number(new Date('1970-01-01'))) // 0
        console.log(Number(new Date('1998-10-21'))) // 908928000000
    
    // Number.parseFloat()

        console.log(Number.parseFloat(true)) // NaN
        console.log(Number.parseFloat('   10      ')) // 10
        console.log(Number.parseFloat('10 33')) // 10
        console.log(Number.parseFloat('10,333')) // 10
        console.log(Number.parseFloat('Manoel')) // NaN
        console.log(Number.parseFloat(new Date('1970-01-01'))) // NaN
        console.log(Number.parseFloat(new Date('1998-10-21'))) // NaN

    // Number.parseInt()

        console.log(Number.parseInt(true)) // NaN
        console.log(Number.parseInt('   10      ')) // 10
        console.log(Number.parseInt('10 33')) // 10
        console.log(Number.parseInt('10,333')) // 10
        console.log(Number.parseInt('Manoel')) // NaN
        console.log(Number.parseInt(new Date('1970-01-01'))) // NaN
        console.log(Number.parseInt(new Date('1998-10-21'))) // NaN
*/
// Propriedades do Number

    console.log(Number.MAX_VALUE)
    console.log(Number.MIN_VALUE)
    console.log(Number.POSITIVE_INFINITY)
    console.log(Number.NEGATIVE_INFINITY)
    console.log(Number.NaN)
