let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var e let!
abc = 3 // nao faca isso -> variavel global
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'teste' }

/* no node, cada arquivo tem um modulo
   diferente do browser, que tudo compete no escopo global */