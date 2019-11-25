// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 'O'
const avo = { attr: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// IMPRIME O VALOR ENCONTRADO PRIMEIRO
// COMO 'C' ESTA NO LOCAL 'FILHO', IMPRIME 'C', NAO IMPRIME '3', APESAR DE EXISTIR

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
        this.velAtual += delta
    } else { 
        this.velAtual = this.velMax
    }
},
status() {
    return `${this.velAtual}Km/h de ${this.velMax}`
}
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // ferrari tem carro como seu proto
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())