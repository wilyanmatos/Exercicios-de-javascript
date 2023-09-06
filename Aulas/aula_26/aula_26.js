// Funções geradoras
function* cores(){
    yield "Número_01"
    yield "Número_02"
    yield "Número_03"
}

let random_color = cores()
console.log(random_color.next().value)
console.log(random_color.next().value)

// Na pratica 01
function* perguntas(){
    let nome = yield "Qual o seu nome?"
    let idade = yield "Qual a sua idade? "
    return "Seu nome é " + nome + " e sua idade é " + idade

}

let resp = perguntas()
//console.log(resp.next().value)
//console.log(resp.next("Wilson").value)
//console.log(resp.next("20").value)

// Na pratica 02
function* contador(){
    let i = 0
    while(true){
        yield i++
       if (i > 5){
        break
       }
    }
    return i

    
}
let resul = contador()
for (let v of resul){
    console.log(v)
}
