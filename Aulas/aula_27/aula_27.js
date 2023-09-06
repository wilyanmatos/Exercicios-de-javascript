// Método Map
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']
cursos.map((el, p)=>{
    //console.log('Curso: ' + el + ' Posição: ' + p)
})

//Na pratica 01
let curso = document.getElementsByTagName('div') 
curso = [...curso]
curso.map((el, p)=>{
    console.log(el.innerHTML='Programação')
})


