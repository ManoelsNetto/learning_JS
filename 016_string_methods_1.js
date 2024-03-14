/*
var pessoa = 'Sileide \'dinda\' dos santos';

// Tamanhando de uma string

    console.log(pessoa.length);

// Partes de uma string 
    
    // slice(posição inicial, posição final[não inclusa])
    
        console.log(pessoa.slice(9, 14)); // No JS a posição inicial é 0.
        console.log(pessoa.slice(-6)); // Se o argumento for negativo, o corte será feito de trás para frente. Além disso, se o argumento final for omitido, o corte será feito da posição de início indicada até o fim da string.

    // substring(posição inicial, posição final[não inclusa])
    
        console.log(pessoa.substring(9, 14));

    // substr(posição inicial, tamanho])
        
        console.log(pessoa.substr(9, 5));

// Substituindo conteúdo de uma String

    pessoa = pessoa.replace('dinda', 'budindinha');
    console.log(pessoa);

    // O método replace, nesse caso, só irá substituir a primeira ocorrência. Para fazer a substituição de múltiplas ocorrências, é preciso utilizar expressão regular. Veja abaixo:

        var text = 'Com o reajuste, o preço médio de venda de gasolina da Petrobras para as distribuidoras passará de R$ 3,86 para R$ 4,06 por litro (alta de 5,18%). Para o diesel, preço médio de venda da Petrobras para as distribuidoras passará de R$ 4,91 para R$ 5,61 por litro (alta de 14,26%).'

        text = text.replace(/R\$/g, 'US$');
        console.log(text);

// Colocar string em maiúsculas e minúsculas.

    console.log(text.toUpperCase()); // Maiúsculas
    console.log(text.toLowerCase()); // Minúsculas

// Concatenando duas ou mais strings

    let text1 = 'Olá,', text2 = 'Mundo!';

    // Concatenações 
        
        var text3 = text1.concat(' ', text2);
        console.log(text3);
        
        text3 = text1 + ' ' + text2;
        console.log(text3);

        text3 = 'Olá,'.concat(' ', 'Mundo!');
        console.log(text3);

// Ajustando espaços em uma string

    var text = '    Olá, Mundo!                 ';
    console.log(text.trim());

// Preenchendo uma string

    var text = 'R$ 50';
    
    console.log(text.padStart(30, ' -')); // Preenche o início da string.
    console.log(text.padEnd(30, ' -')); // Preenche o final da string.
*/
// Convertendo uma string em array

    var text = "A Petrobras anunciou nesta sexta-feira (17) novas altas nos preços da gasolina e do diesel vendidos às distribuidoras, a partir de 18 de junho. O diesel não era reajustado desde 10 de maio - há 39 dias. Já a última alta no preço da gasolina havia sido em 11 de março - há 99 dias. Os preços do GLP não serão alterados.\n\nCom o reajuste, o preço médio de venda de gasolina da Petrobras para as distribuidoras passará de R$ 3,86 para R$ 4,06 por litro (alta de 5,18%). Para o diesel, preço médio de venda da Petrobras para as distribuidoras passará de R$ 4,91 para R$ 5,61 por litro (alta de 14,26%).";
    console.log(text);

    // Transformando em uma array
        text = text.toLowerCase().split(' ');
        console.log(text);
        console.log(typeof text);


