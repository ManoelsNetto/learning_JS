// Declarações condicionais
/*     
    // Declarações if
        if (condição) {
            Código a ser executado se a condição for VERDADEIRA.
        }
*/       
        {
            const d = new Date()
            var greeting

            if (d.getHours() < 18) {
                greeting = 'Tenha um excelente dia!!'
            }

            console.log(greeting)
        }
/*
    // Declarações else
        if (condição) {
            Código a ser executado se a condição for VERDADEIRA.
        } else {
            Código a ser executado se a condição for FALSA. 
        }
*/
        {
            const d = new Date()
            var greeting

            if (d.getHours() < 18) {
                greeting = 'Tenha um excelente dia!!'
            } else {
                greeting = 'Ótima noite!!'
            }

            console.log(greeting)
        }
/*
    // Declarações else if
        if (condição1) {
            Código a ser executado se a condição1 for VERDADEIRA.
        } else if (condição2) {
            Código a ser executado se a condição1 for FALSA e a condição2 for VERDADEIRA.           
        }
        else {
            Código a ser executado se a condição1 e condição2 forem FALSAS. 
        }
*/      
        {
            const d = new Date()
            var greeting

            if (d.getHours() < 12) {
                greeting = 'Bom dia!'
            } else if (d.getHours < 18) {
                greeting = 'Boa tarde!'
            } else {
                greeting = 'Boa noite!'
            }

            console.log(greeting)
        }