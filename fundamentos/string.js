const escola = "cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5)) //nao encontra valor
console.log(escola.charCodeAt(3)) //tabela ASCII
console.log(escola.indexOf('3')) //verifica se existe

console.log(escola.substring(1)) //considera a partir do indice 1
console.log(escola.substring(0, 3)) //nao inclui o indice 3

console.log('Escola '.concat(escola).concat("!")) //forma uma frase
console.log('Escola ' + escola + "!") //outra maneira de formar uma frase

console.log(escola.replace(3, 'e')) //substitui

console.log('Ana,Maria,Pedro'.split(','))

