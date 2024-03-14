// this Keyword

    // this em um método -> Iŕa se referir ao objeto.

        var person = {
            first_name: 'Manoel',
            last_name: 'Neto',
            age: 23,
            id: 123456,
            full_name: function() {
                return this.first_name + ' ' + this.last_name
            }
        }

        console.log(person.full_name()) // Nesse caso o this se refere ao próprio objeto (person).
    
    // this sozinho ->  Irá se referir ao objeto global, no browser esse objeto é o window.
        
        let x = this

        console.log(x)

    // this em uma função -> Se não for no modo estrito, ele irá retornar também o objeto global. Caso contrários, retornará o undefined.

        function minha_funcao() {
            return this
        }

        console.log(minha_funcao())

    // this em eventos html -> Irá retornar o próprio evento

