//par nome/valor
const saudacao = 'Opa' //context lexico 1

function exec(){
    const saudacao = 'Fala' //context lexico 2
    return saudacao
}

//objeto sao grupos alinhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)