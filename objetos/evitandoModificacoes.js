// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao - " Borracha escolar branca" // nao adiciona novos atributos
delete produto.tag // pode excluir atributos
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // nao adiciona atributos
delete pessoa.nome // nao consegue excluir o atributos
pessoa.idade = 29 // altera o atributo
console.log(pessoa)

// Object.freeze = selado + valores constantes