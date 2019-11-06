const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'
const template = `
Ola
${nome}!` //expressao fica dentro da chave

console.log (concatenacao, template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()
console.log( `Ei... ${up('cuidado')}!`)