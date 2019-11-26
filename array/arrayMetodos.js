const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro kek
console.log(pilotos)

pilotos.push('Verstappen') // adiciona na primeira posicao
console.log(pilotos)

pilotos.shift() // removeu o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // do indice 1 ao 4 (4 nao entra)
console.log(algunsPilotos2) // tbm gera novo array