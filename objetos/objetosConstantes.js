// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 ->  {...}
// pessoa = { nome: 'Ana' } ==> ERRO

Object.freeze(pessoa) // nao tem como alterar mais

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' // ==> nao tem como alterar, incluir ou excluir atributos
delete pessoa.nome
console.log(pessoa.nome) // nao muda, pois o objeto esta congelado
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
