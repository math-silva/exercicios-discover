// clearInterval irá cancelar um setInterval que foi registrado

const timeOut = 1000
const checking = () => console.log("Checking!")

let interval = setInterval(checking, timeOut)


setTimeout( () => clearInterval(interval), 4000)