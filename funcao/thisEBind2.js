function Pessoa() {
    this.idade = 0
    
    const self = this //self sempre aponta pra pessoa
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // a cada 1s (1000ms) essa funcao sera disparada
}

new Pessoa

//nesse caso o this.idade nao aponta para o objeto pesssoa
//quem dispara a funcao e um temporizador
//coloca o bind para "amarrar" o objeto a funcao