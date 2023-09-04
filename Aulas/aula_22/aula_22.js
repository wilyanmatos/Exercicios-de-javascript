// função parametrizada
function nome(nome01){
    console.log(nome01)
}


// Na pratica 01
function soma(n1=0, n2=0, n3=0){
    console.log("N1 é " + n1, "N2 é " + n2, "N3 é " + n3)
}

soma()
nome("Wilson")

// Na pratica 02
function mult(n1, n2){
    return n1 * n2
}

let resul = mult(5, 2)
console.log(resul)