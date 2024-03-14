// Typeof
/*    
    var mycar
    const data_types = [
        'John', 
        3.14, 
        NaN, 
        false, 
        [1, 2, 3, 4],
        {name: 'Manoel', idade: 23},
        new Date(),
        function() {},
        mycar,
        null
    ]

    console.log(data_types)
 
    {
    let text = String() 

    data_types.forEach(function(v) {text += typeof v + '\n'})

    console.log(text)
    }
    */
// Constructor property
    {
        const data_types = [
            'John', 
            3.14, 
            false, 
            [1, 2, 3, 4],
            {name: 'Manoel', idade: 23},
            new Date(),
            function() {}
        ]
        let text = String()
        
        for (let x of data_types) {
            text += x.constructor + '\n'
        }

        console.log(text)
    }

    function isArray(array) {
        return array.constructor === Array
    }

    function isDate(date) {
        return date.constructor === Date
    }

    console.log(isArray([1, 2, 3]))
    console.log(isDate(new Date()))