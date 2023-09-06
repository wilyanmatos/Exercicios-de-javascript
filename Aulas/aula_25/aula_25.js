// Função que chama outra função
const somar = (valor)=>{
    let res = 0
    for (v of valor){
        res += v
    }
    return res
}

const soma = (...valores)=>{
    return somar(valores)
}
console.log(soma(10, 5, 15))
