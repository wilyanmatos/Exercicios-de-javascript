// Break e continue
// Na pratica 01
let n = 0
let max = 1000
/*
while(n < max){
    console.log("CFB Cursos - N°" + n)
    n++
    if (n == 5){
        console.log("Break - N°" + n)
        break
    }    
}
console.log("Fim do programa")
*/
// Na pratica 02
let numpar = 0
for(n; n < max; n++){
    if(n % 2 != 0){
        continue
    }
    ++numpar
}
console.log("Ao Todo foi " + numpar + " números pares")