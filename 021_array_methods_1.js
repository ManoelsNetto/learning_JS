// Métodos Array

    const frutas = [
        'Banana',
        'Laranja',
        'Maçã',
        'Manga'
    ]
    console.log(frutas)
/*
    // Tranformando uma array em uma string

        console.log(frutas.toString())
        console.log(frutas.join(' - '))

    // Adicionando e excluindo elementos de uma array

        // Removendo elementos de uma Array

            // pop() -> Removerá o último elemento
                var ultimo_elemento = frutas.pop()
                console.log(`O elemento '${ultimo_elemento}' foi removido da array: [${frutas.join(', ')}]`)

            // shift() -> Removerá o primeiro elemento
                var primeiro_elemento = frutas.shift()
                console.log(`O elemento '${primeiro_elemento}' foi removido da array: [${frutas.join(', ')}]`)

        // Adicionando elementos a uma Array

            // push() -> Adicionará elementos ao final da array
                var tamando_da_array_1 = frutas.push('Manga', 'Pera', 'Goiaba', 'Kiwi')
                console.log(`Após adicicionar os novos elementos, a array ficou com ${tamando_da_array_1} itens e com os elementos: [${frutas.join(', ')}]`)
            
            // unshift() -> Adicionará elementos ao início da array
                var tamanho_da_array_2 = frutas.unshift('Uva', 'Limão', 'Mamão', 'Banana')
                console.log(`Após adicicionar os novos elementos, a array ficou com ${tamanho_da_array_2} itens e com os elementos: [${frutas.join(', ')}]`)

// Unindo Arrays

    const legumes = [
        'Pimentão',
        'Cenoura',
        'Alface',
        'Cebola'
    ]

    const flores = [
        'Dalia',
        'Callistemon',
        'Cacto-bola',
        'Begónias'
    ]

    const frutas_legumes_flores = frutas.concat(legumes, flores)
    console.log(frutas_legumes_flores)

// Fazendo Splicing e Slicing de uma Array

    // splice(posicao_inicial, qtd_itens_removidos, *itens_adicionados) -> Método utilizado para adicionar e remover novos itens de uma array.

        // Adicionando
            frutas.splice(2, 0, 'Limão', 'Pera', 'Goiaba', 'Kiwi')
            console.log(frutas)
        
        // Removendo
            frutas.splice(2, 4)
            console.log(frutas)
*/
    // slice() -> Método utilizado para fazer um recorte de uma array

        console.log(frutas.slice(0, 2))
        console.log(frutas.slice(2, 4))

    