const getFlags = require("./exports.js")

const name = getFlags("--name")
const greeting = getFlags("--greeting")

console.log(`Olá ${name}, ${greeting}`)