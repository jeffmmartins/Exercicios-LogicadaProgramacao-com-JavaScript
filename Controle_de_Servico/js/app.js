const frm = document.querySelector('form')        // Obtém os elementos da página
const resultado1 = document.querySelector('h2')
const resultado2 = document.querySelector('h3')
const resultado3 = document.querySelector('h4')

frm.inAdicionar.addEventListener("click", (e) => { // quando o botão adicionar Serviço for clicado 
  e.preventDefault()                               // evita o envio do form

  const servico = frm.inServico.value.toString()   // Obtêm dados do input
  
  if (!frm.inServico.value) {                     // verifica se o input está vazio 
    alert('favor preencher o campo corretamente')
    return
  }

  if (localStorage.getItem("nomeServico")) {                                // se já estiver salvo alguma informação 
    const descricao = localStorage.getItem("nomeServico") + "," + servico   //Obtém a informação e acrescentar a nova informação do input 
    localStorage.setItem("nomeServico", descricao)
  }else{                                                                    //  senão, é a primeira informação 
    localStorage.setItem("nomeServico",servico)                             
  }
  mostrarServico()                                                          // chama a função que mostra a quantidade de serviços pendentes
  frm.reset()                                                               // limpa o form 
  frm.inServico.focus()                                                     // joga o foco no input inServico
  
})


frm.inExecutar.addEventListener("click", (e) => {                      // quando o botão de executar serviço for clicado 
  e.preventDefault()
  
  const informacoes = localStorage.getItem("nomeServico").split(",")  // obtém as informaçoes e e é dividido em itens de vetor a cada ","
  const primeiroServico = informacoes.shift()                         // obtém a primeira informação
  localStorage.setItem("nomeServico", informacoes)                    // Salva os dados 
   
  resultado1.innerText = `Seriço Pendentes: ${informacoes.length}`    // mostra na tela quantidade de serviços pendentes 
  resultado3.innerText = "Servoço em Execução:"                       
  resultado2.innerText = primeiroServico                              // mostra em tela o primeiro serviço obtido 

  
})

const mostrarServico = () =>{                                                 // função que mostra serviços pendentes
  
  if(localStorage.getItem("nomeServico")){
  const informacoesDeSevicos = localStorage.getItem("nomeServico").split(",")
  resultado1.innerText = `Serviços Pendentes: ${informacoesDeSevicos.length}`
} 
}

window.addEventListener('load', mostrarServico)  // cchama função quando a pagina é carregada, para mostrar os sreviços pendentes

