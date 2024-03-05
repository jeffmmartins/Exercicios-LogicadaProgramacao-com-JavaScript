const frm = document.querySelector('form')

const resultado1 = document.querySelector('h2')
const resultado2 = document.querySelector('h3')
const resultado3 = document.querySelector('h4')

frm.inAdicionar.addEventListener("click", (e) => {
  e.preventDefault()

  const servico = frm.inServico.value.toString()
  
  if (!frm.inServico.value) {
    alert('favor preencher o campo corretamente')
    return
  }

  if (localStorage.getItem("nomeServico")) {
    const descricao = localStorage.getItem("nomeServico") + "," + servico
    localStorage.setItem("nomeServico", descricao)
  }else{
    localStorage.setItem("nomeServico",servico)
  }
  mostrarServico()
  frm.reset()
  frm.inServico.focus()
  
})

frm.inExecutar.addEventListener("click", (e) => {
  e.preventDefault()
  
  
  
  const informacoes = localStorage.getItem("nomeServico").split(",")
  const primeiroServico = informacoes.shift()
  localStorage.setItem("nomeServico", informacoes)
  
    
  
  
  resultado1.innerText = `Seriço Pendentes: ${informacoes.length}`
  resultado3.innerText = "Servoço em Execução:"
  resultado2.innerText = primeiroServico

  
})

const mostrarServico = () =>{
  
  if(localStorage.getItem("nomeServico")){
  const informacoesDeSevicos = localStorage.getItem("nomeServico").split(",")
  resultado1.innerText = `Serviços Pendentes: ${informacoesDeSevicos.length}`
} 
}

window.addEventListener('load', mostrarServico)

