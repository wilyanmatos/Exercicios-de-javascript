// Comando de condição If e Else
let num1 = 1
if (num1 > 10){
    console.log("Numeral maior que 10")
    console.log("Comando 02")
}else{
    console.log("Não é maior que 10 :(")
}
console.log("Fim do programa")

// Na pratica 01 - Uso do else if
let num2 = 5
if(num2 > 10){
    console.log("Numero maior que 10")

}else if(num2 > 5){
    console.log("Numeral esta entre 6 e 10")
}else{
    console.log("Numeral menor ou igual a 5")
}
console.log("Fim do programa")

// Na pratica 3 - Uso da condição dentro da condição
let num3 = 50
if(num3 > 10){
    console.log("Numero maior que 10")
        if(num3 >= 50)
            console.log("Numeral maior que 50")

}else if(num3 > 5){
    console.log("Numeral esta entre 6 e 10")
}else{
    console.log("Numeral menor ou igual a 5")
}
console.log("Fim do programa")

// Na pratica 4 
let energia = 100
let clima = "sol"
if(energia > 70 && clima == "sol"){
    console.log("Vou a praia")
}else{
    console.log("Vou ao cinema")
}