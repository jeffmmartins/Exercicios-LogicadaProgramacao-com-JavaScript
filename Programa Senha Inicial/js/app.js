const frm = document.querySelector('form')
const resposta = document.querySelector('h2')

frm.inSenha.addEventListener("click", (e) => {
  e.preventDefault()
  
  const nome = frm.inNome.value  // obtém os dados do campo nome do aluno
  const aluno = validarNome(nome) // chama as funçoes e atribui
  if (aluno == false) {           // verifica se a condição é verdadeira ou falsa
    alert("Favor digitar o nome completo")
    frm.inNome.value = ""
    return
  }
  const sobrenome = obterSobrenome(nome) // chama a função e atribui
  const vogais = contarVogais(nome)  // chama a função e atribui

  resposta.innerText = `Senha Inicial: ${sobrenome + vogais}`
})

//Função recebe nome dos alunos como parametro 
const validarNome = (alunos) => {
  const partes = alunos.split(" ")
  const tamanho = partes.length
  if (tamanho > 1 ) {  // condição para definir se o nome está completo
    return true
  }else{
    return false
  }
}

//Função recebe sobrenome dos alunos como parametro
const obterSobrenome = (sobrenomes) => {
  const divisaoNome = sobrenomes.split(" ")
  const ultimoNome = divisaoNome.pop()
  let resultado = ""
  resultado += ultimoNome.toLowerCase()
  return resultado
}

// Função que recebe vogal como paramentro para fazer a contagem de vogal no nome completo 
const contarVogais = (vogal) => {
  const qtdVogais = vogal.match(/[a,e,i,o,u]/g)
  const tamanhoVogal = qtdVogais.length
  let tamanhoGeral
  const resultadoFinal = tamanhoVogal < 10 ? "0" : ""
  tamanhoGeral = resultadoFinal + tamanhoVogal
  return tamanhoGeral
}