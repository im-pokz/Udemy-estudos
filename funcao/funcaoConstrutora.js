function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <=velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // usa os params padroes
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() // +20
ferrari.acelerar() // +20     => velocidade = 60 (maxima = 350)
ferrari.acelerar() // +20
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

