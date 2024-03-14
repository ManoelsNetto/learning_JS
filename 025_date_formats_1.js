// ISO Dates
/*
    const tz = new Date('2001-09-11T12:00:00-03:00') // sintaxe YYYY-MM-DDTHH:MM:SS-HH:MM
    const t = new Date('2001-09-11T12:00:00Z') // sintaxe YYYY-MM-DDTHH:MM:SSZ
    const d = new Date('2001-09-11') // sintaxe YYYY-MM-DD
    const m = new Date('2001-09') // sintaxe YYYY-MM
    const y = new Date('2001') // sintaxe YYYY
    
    console.log(tz)
    console.log(t)
    console.log(d)
    console.log(m)
    console.log(y)

// Long Dates

    const d = new Date('Sep 11 2001') // MMM DD YYYY
    console.log(d)
*/
// Date Parse

    let millisecs = Date.parse('11 Sep 2001')
    
    console.log(millisecs)

    const d = new Date(millisecs)

    console.log(d)
    
