const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const candidatos = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inNome.value
  const acertos = Number(frm.inAcertos.value)

if (nome == ""  || acertos == "") {
  alert("favor digitar informações nos campos")
  return
}

candidatos.push({ nome, acertos})
frm.inNome.value = ""
frm.inAcertos.value = ""
frm.inNome.focus()
frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", (e) => {
  e.preventDefault()
  const dados = candidatos.reduce((acumulador, aux) => 
  `${acumulador}  ${aux.nome} - ${aux.acertos} acertos\n`, "")
  resp.innerText = dados
})

frm.btAprovados.addEventListener("click", (e) => {
  e.preventDefault()
  const aprovacao = Number(prompt("Número de acertos para aprovação:"))
  let copia = [...candidatos]
  if(copia.acertos <= aprovacao) {
    alert("Nenhuma aluno foi aprovado")
  }

  let listaAprovados = ""
  const listar = copia.filter( pontos => pontos.acertos >= aprovacao)
  listar.sort((a,b) => b.acertos - a.acertos)
  for (const alunos of listar) {
    listaAprovados += `${alunos.nome} - ${alunos.acertos} acertos\n`
    resp.innerText = listaAprovados
  }

  

})