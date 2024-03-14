// Métodos para definição do date
/*
    const d = new Date()
    console.log(d)

    d.setFullYear(1998) // Ano, Mês (opcional), Dia (opcional).
    d.setMonth(9) // Mês
    d.setDate(21) // Dia
    d.setDate(d.getDate() + 30) // Adicionando dias a uma data.
    d.setHours(19) // Horas
    d.setMinutes(30) // Minutos
    d.setSeconds(00) // Segundos

    console.log(d.toLocaleTimeString('pt-BR', {weekday: 'long', era:'short', year: 'numeric', month: 'long', day: '2-digit'}))
*/
// Comparando datas

    let texto = ''

    const data_nascimento = new Date('1998-10-21T00:00:00-03:00')
    const algum_dia = new Date()

    algum_dia.setTime(algum_dia.getTime() - (Math.random() * 1500000000000)) // Data aleatória

    console.log(algum_dia)
    console.log(data_nascimento)

    if (algum_dia > data_nascimento) {
        texto = `O seu nasicmento, ${data_nascimento.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'})} foi anterior ao dado evento.`
    } else {
        texto = texto = `O seu nasicmento, ${data_nascimento.toLocaleDateString('pt-BR', {weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'})} foi posterior ao dado evento.`
    }

    console.log(texto)


