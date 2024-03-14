// Date Objects

    const d = new Date()
    const data_nascimento = new Date(2022, 9, 21)
/*
    console.log(d)
    console.log(data_nascimento)
*/
// Métodos


    console.log(d.toString())
    console.log(d.toUTCString())
    console.log(d.toDateString())
    console.log(d.toISOString())
    console.log(d.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}))
