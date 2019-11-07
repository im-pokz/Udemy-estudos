const valor = 'Global'

function minhaFuncao () {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
// funcao procura no local onde ele foi definida, nao onde foi executada