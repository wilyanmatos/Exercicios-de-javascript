//Operador This
function aluno(nome, nota){
    this.nome = nome

    this.dados_anonimo = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.note)
        },1000)
    }
}

aluno('Wilson', 10)