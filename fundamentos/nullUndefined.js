let valor //nao inicializada
console.log(valor)
//console.log(valor2) => nao foi nem sequer declarado

valor = null //ausencia de valor, vazio
console.log(valor)
// console.log(valor.toString()) => Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined, apenas atribuir null
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)