// Classes JavaScript
/*
    class ClassName {
        constructor() { ... }
    }
*/
{
    class Car {
        constructor(marca, ano) {
            this.marca = marca
            this.ano = ano
        }
    }

    // Usando classes

        meuCarro1 = new Car('Volvo', 2020)
        meuCarro2 = new Car('Fiat', 1988)

        const cars = [meuCarro1, meuCarro2]

        console.log(cars)
}
// Métodos da classe
/*
        class ClassName {
        constructor() { ... }
        metodo_1() { ... }
        metodo_2() { ... }
        metodo_3() { ... }
    }
*/
{
    class Car {
        constructor(marca, modelo, ano) {
            this.marca = String(marca).toUpperCase()
            this.modelo = String(modelo).toUpperCase()
            this.ano = Number(ano)
        }

        age() {
            let date = new Date()

            return date.getFullYear() - this.ano
        }
    }

    let meuCarro1 = new Car('Fiat', 'Uno', 1988)

    console.log(meuCarro1)
    console.log(meuCarro1.age())
}

