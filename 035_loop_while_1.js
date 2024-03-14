// While loop
    /*
    while (condition) {
        // Código a ser executado.
    }
    */

    {
        let text = String(), i = 1;
        
        while (i < 10) {
            text += `O número é ${i}` + '\n'
            i++
        }

        console.log(text)
    }

// Do while loop
    /*
    do {
        // Código a ser executado
    }
    while (condição);
    */

    {
        let text = String(), i = 1;

        do {
            text += `O número é ${i}` + '\n'
            i++
        }
        while (i < 10);

        console.log(text)
    }
