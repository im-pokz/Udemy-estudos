// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // tira de dentro do objeto pessoa
console.log(nome, idade) 

const { nome: n, idade: i } = pessoa //cria as variaveis n, i 
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

/* const { conta: { ag, num } } = pessoa
   console.log(ag, num)                  (ERRO) - undefined ou null*/