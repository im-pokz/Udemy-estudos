// FUGA DO ESCOPO GLOBAL
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
//ignora o escopo