const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // sem o 'this', daria erro
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00 (objeto)

const falarDePessoa = pessoa.falar.bind(pessoa) // 'this' sera 'pessoa', nao altera
falarDePessoa()
