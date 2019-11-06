//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6) //considera apenas os dois primeiros numeros
imprimirSoma()

//Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3)) //funcao fica dentro do parenteses
console.log(soma(2))
console.log(soma())