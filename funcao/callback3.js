// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}
// Deu 'go', a callback fica registrada
// Ao clicar, a callback e chamada