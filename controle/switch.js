const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10: //poderia colocar um console.log embaixo do 10
        case 9:
            console.log('Quadro de Honra')
            break
        
        case 8: case 7: //pode ser ao lado ou embaixo
            console.log('Aprovado')
            break

        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break

        default:
            console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

/* sem o 'break' executaria todos os casos abaixo do
   primeiro caso executado */
   
/* sem virgula entre os casos, se nao 
   o programa desconsidera os casos apos a virgula */