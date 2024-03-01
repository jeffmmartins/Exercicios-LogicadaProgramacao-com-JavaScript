const frm = document.querySelector('form')

const resultado1 = document.querySelector('h2')
const resultado2 = document.querySelector('h3')

frm.inAdicionar.addEventListener('click', (e) => {
  e.preventDefault()

  const servico = frm.inServico.value
  
  if (!frm.inServico.value) {
    alert('favor preencher o campo corretamente')
    return
  }

  if (localStorage.getItem("nomeServico")) {
    const descricao = localStorage.getItem("nomeServico") + ";" + servico
    localStorage.setItem("nomeServico", descricao)
  }else{
    localStorage.setItem("nomeServico",servico)
  }
   
  
    
  
  /*
  const descricao = localStorage.getItem("nomeServico") + ";" + servico
  localStorage.setItem("nomeServico", descricao)
  */
})

