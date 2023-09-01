// Funções
function nome(){
    console.log("Função [nome] foi chamada")
}
nome()

// Na pratica 01
let num1 = 10
let num2 = 15
function soma(){
    console.log(num1 + num2)
}

soma()

// Na pratica 03
function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML= 'Texto mudado'
    d2.innerHTML = 'Texto mudado'
    d3.innerText = 'Texto mudado'
}

