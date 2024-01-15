const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.inCategorizar.addEventListener("click", (e) => {
  e.preventDefault()
  const nome = frm.inNome.value //  obtém os dados do campo nome 
  const idade = frm.inIdade.value // obtém a idade do aluno 
  const tracos = retornarTracos(nome)
  const categorizacao = categorizarAluno(idade)
  resp.innerText = `${nome}\n${tracos}\nCategoria: ${categorizacao}`
  
})

// Função recebe aluno como parâmentro
const retornarTracos = (aluno) => {  
  let resultado = "" 
  for (const letras of aluno) {  // percorre as letras do nome para fazer a substituição por " - "
    resultado += letras.replace(/[a-z,A-Z]/g, "-")
  }
  return resultado // retorna traços
} 

// Função que recebe a idade do aluno 
const categorizarAluno = (idades) => {  
  if (idades <= 12) {
    return "Infantil"
  }else if (idades > 12 && idades <= 18) {
    return "Juvenil"
  }else{
    return "Adulto"
  }
  
}