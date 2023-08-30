// Spread
let n1 = [1, 2, 3]
let n2 = [4, 3, 6, 7]
let n3 = [n1, n2]
console.log("n3: " + n3)

// Na pratica
const jogador1={nome:"Bruno", energia:100, vidas:3, magia:150}
const jogador2={nome:"Bruce", energia:100, vidas:5, velocidade:80}
const jogador3={...jogador1, ...jogador2}
console.log(jogador3)

// Na pratica 2
const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]
console.log(soma(valores))