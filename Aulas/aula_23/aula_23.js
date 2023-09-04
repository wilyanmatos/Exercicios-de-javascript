function soma(...valores){
    let resul = 0
    for(let i of valores){
        resul += i
    }
    return resul
}
console.log(soma(10, 5, 6, 50, 1000))
