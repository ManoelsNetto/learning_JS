// Métodos de busca

    var text = 'A Petrobras anunciou nesta sexta-feira (17) novas altas nos preços da gasolina e do diesel vendidos às distribuidoras, a partir de 18 de junho. O diesel não era reajustado desde 10 de maio - há 39 dias. Já a última alta no preço da gasolina havia sido em 11 de março - há 99 dias. Os preços do GLP não serão alterados.\n\nCom o reajuste, o preço médio de venda de gasolina da Petrobras para as distribuidoras passará de R$ 3,86 para R$ 4,06 por litro (alta de 5,18%). Para o diesel, preço médio de venda da Petrobras para as distribuidoras passará de R$ 4,91 para R$ 5,61 por litro (alta de 14,26%).';
    
    // indexOf() -> Irá retornar a posição da primeira ocorrência de um texto específico. Não aceita expressões regulares.
        
        console.log(text.toLowerCase().indexOf('petrobras'));

    // lastIndexOf() -> Irá retornar a posição da última ocorrência de um texto específico.

        console.log(text.toLowerCase().lastIndexOf('petrobras'))

    // search() -> Irá buscar o valor especificado e retornar a posição. Diferentemente do método indexOf, esse não possui o argumento de posição, além de aceitar expressões regulares.

        console.log(text.toLowerCase().search('petrobras'))

    // match() -> Irá retorno uma array com todoas as palavras encontradas por meio da expressão regular.

        console.log(text.toUpperCase().match(/R\$\s[0-9]*\,[0-9]+/g)) // irá retornar valores em moeda.
    
    // includes() -> Irá retornar true se uma dada string conter um valor específico.
    
        console.log(text.toLowerCase().includes('diesel'))