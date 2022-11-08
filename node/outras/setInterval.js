const timeOut = 1000
const bozo = () => console.log("Bolsonaro 22!")

let interval = setInterval(bozo, timeOut)

setInterval(() => clearInterval(interval), 4000)