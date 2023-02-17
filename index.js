const frases=[
    "Más fe y menos miedo.",
    "Todo lo puedo en Cristo que me fortalece.",
    "Dios tiene un plan que lleva tu nombre.",
    "Yo soy el camino, la verdad y la vida.",
    "Solo debes dar un paso de fe y Dios se encargará de lo demás."
    
]

function obtenerFrase(){
    let indice = Math.floor(Math.random() * 5)
    return frases[indice]
}
console.log(obtenerFrase());

module.exports.obtenerFrase=obtenerFrase;
//console.log(module)