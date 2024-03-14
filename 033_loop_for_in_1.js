// For in loop
    /*
        for (chave in objeto) {
            // Bloco de código a ser executado.
        }
    */
    
    const persons = [
        {fname:'John', lname:'Doe', age:25},
        {fname:'Manoel', lname:'Neto', age:23}
    ]

    for (let person = 0; person < persons.length; person++) {
        
        console.log('='.repeat(12) + ` Pessoa ${Number(person) + 1} ` + '='.repeat(12))
        
        for (let k in persons[person]) {
            console.log(k + ':' + ' '.repeat(20 - k.length) + persons[person][k])
        }
    }
