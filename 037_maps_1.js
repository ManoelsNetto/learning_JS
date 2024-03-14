// Maps
/*
    // Criando um Map
    {
        const frutas = new Map([
            ['Maçãs', 500],
            ['Bananas', 300],
            ['Laranjas', 200]
        ])
        
        console.log(frutas)
    }

    // set() -> Adicionando novos valores a um Map
    {
        const frutas = new Map([
            ['Maçã', 20],
            ['Goiaba', 6],
            ['Mamão', 15],
            ['Manga', 11]
        ])

        console.log(frutas)

        frutas.set('Melão', 2) // novo valor
        frutas.set('Maçã', 17) // atualização de valor existente

        console.log(frutas)
    }
*/
    // Outros métodos
    {
        const frutas = new Map([
            ['Maçã', 20],
            ['Goiaba', 6],
            ['Mamão', 15],
            ['Manga', 11]
        ])

        // get()
            console.log(`A loja possui ${frutas.get('Maçã')} ${frutas.get('Maçã')==1?'maçã':'maçãs'} no estoque.`)

        // size
            console.log(frutas.size)

        // delete()
    
            frutas.delete('Maçã')
            console.log(frutas)

        // has()
            console.log(frutas.has('Maçã'))

        // forEach()
        {
            let text = String()

            frutas.forEach(function(value, key) {text += key + ' = ' + value + '\n'})

            console.log(text)
        }

        // entries()
        {
            let text = String()

            for (const x of frutas.entries()) {
                text += x + '\n'
            }

            console.log(text)
        }
    }
    
