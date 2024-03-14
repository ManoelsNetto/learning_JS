// JSON

    let json_persons = '{ "employees" : [' + 
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    const obj_persons = JSON.parse(json_persons) // Irá transformar um JSON em um objeto JS.

    console.log(obj_persons)

    console.log(JSON.stringify(obj_persons)) // Irá transformar um objeto JS em um JSON.