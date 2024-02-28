const frm = document.querySelector('form')
const resultado1 = document.querySelector('h2')
const resultado2 = document.querySelector('h3')

frm.inAdicionar.addEventListener('click', (e) => {
  e.preventDefault()
  const servico = frm.inServico.value
  if (servico == "") {
    alert('favor preencher o campo corretamente')
  }

  let descricaoDeServico = ""
  if (localStorage.getItem('servicoNome')) {
    const descricaoServico = localStorage.getItem('servicoNome') + ";" + servico
    localStorage.setItem('servicoNome', descricaoServico) 
    descricaoDeServico = descricaoServico.split(";")
  }
  
  console.log(descricaoDeServico)
  
  const mostrarServico = [descricaoDeServico.shift()]
  console.log(mostrarServico)
  /*
  resultado1.innerText = `Serviços Pendentes: ${descricao.length - mostrarServico.length}`
  resultado2.innerText = `Serviço em Execução: ${mostrarServico}`
  */
})

