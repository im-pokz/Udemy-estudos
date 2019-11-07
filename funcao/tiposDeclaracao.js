console.log(soma(3, 4)) /* pode ser antes das funcoes, 
                         o JS carrega as funcoes declaradas */

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // function expressions tem q serem declaradas antes

// named function expression
const mult = function mult (x, y) {
    return x * y
}
console.log(mult(3, 4))