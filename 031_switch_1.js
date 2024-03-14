/*
// Declaração switch

    switch (expressão) {
        case x:
            // Código a ser executado.
            break
        case y:
            // Código a ser executado.
            break
        default:
            // Código a ser executado.
    }
*/
    {
        const week_day = new Date().getDay()

        var day_name

        switch (week_day) {
            case 0:
                day_name = 'Domingo'
                break
            case 1:
                day_name = 'Segunda-feira'
                break
            case 2:
                day_name = 'Terça-feira'
                break
            case 3:
                day_name = 'Quarta-feira'
                break
            case 4:
                day_name = 'Quinta-feira'
                break
            case 5:
                day_name = 'Sexta-feira'
                break
            case 6:
                day_name = 'Sábado'
        }

        console.log(day_name)
    }

    
