// Operadores lógicos
let n1,n2,n3,n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

// and
console.log("and: ", (n1>n2) && (n1>n3))

// or
console.log("or: ",(n1>n2) || (n1>n3))

// not
console.log("not: ",!(n1>n2) && (n1>n3))

// Na prática 01
if(n1 > n2){
    console.log(n1 + " maior que " + n2)

}else{
    console.log(n1 + "menor que" + n2)
}

// Na pratica 02
let resul = ""
if(n1 > n2){
    resul = "Verdadeiro"
}else{
    resul = "Falso"
}
console.log(n1 + " é maior que " + n2 +"?" ,resul)

// Na pratica 03
if (!(n1 > n2) && (n3 > n4)){
    console.log('Verdadeiro')
}else{
    console.log("false")
}