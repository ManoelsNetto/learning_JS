// Sets

    // Criando um Set

        const letters_array = ['A', 'B', 'A', 'C'] 
        const letters_set = new Set(letters_array)

        console.log(letters_array)
        console.log(letters_set)

        // forEach()
            /*
            let text = String()

            letters_set.forEach(function(value) {text += value.toLowerCase() + '\n'})

            console.log(text)
            */
        // values()

            const set_values = letters_set.values()
            console.log(set_values)

            let text = String()
            for (let x of set_values) {
                text += x + '\n'
            }

            console.log(text)
