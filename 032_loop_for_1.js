// Javascript loops
    {
        const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi']
        var text = String()

        for (let i = 0; i < cars.length; i++) {
            text += cars[i] + '\n'
        }

        console.log(text)
    }
    // Tipos de loops

        // For loop
            /*
            
            for (comando_1; condição; comando_2) {
                // bloco de código interno a ser executado.
            }

            comando_1 -> É executado uma única vez, anteriormente a execução do bloco de código interno. Geralmente é utilizado para inicializar variáveis.
            condição -> é a condição para o loop continuar a rodar.
            comando_2 -> É executado todas as vezes após a execução do bloco de código interno.

            */
        {
            let text = String()
            
            for (let i = 10; i >= 10 && i <= 20; i++) {
                text += i + '...' + '\n'
            }

            console.log(text)
        }