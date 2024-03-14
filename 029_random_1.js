// Função randômica (valores inteiros entre dois intervalos)

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    console.log(randInt(10, 15))