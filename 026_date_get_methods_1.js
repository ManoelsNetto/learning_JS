// Métodos de retorno do Date

    const d = new Date()

    console.log(d)

    console.log(d.getTime()) // Irá retornar o timestamp
    console.log(d.getFullYear()) // Ano numérico
    console.log(d.getMonth()) // Mês numérico

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    console.log(meses[d.getMonth()]) // Nome do mês
    console.log(d.getDate()) // Dia do mês numérico
    console.log(d.getDay()) // Dia da semana numérico (0 -> Domingo; 6 -> Sábado)  

    const dias_semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    console.log(dias_semana[d.getDay()]) // Nome do dia da semana
    console.log(d.getHours()) // Horas
    console.log(d.getMinutes()) // Minutos
    console.log(d.getSeconds()) // Segundos
    console.log(d.getMilliseconds()) // Millisegundos

