// Loop for of
    /*
    for (variável of iterável) {
        // Bloco de código a ser executado.
    }       
    */

    // Array loop
    {
        const cars = ['BMW', 'Volvo', 'Mini']

        let text = String()
        for (let x of cars) {
            text += x + '\n'
        }

        console.log(text)
    }

    // String loop
    {
        let language = 'JavaScript'
        let text = String()

        for (let x of language) {
            text += x + '\n'
        }

        console.log(text)
    }
