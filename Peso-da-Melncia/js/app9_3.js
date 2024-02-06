const frm = document.querySelector('form')
const respLista = document.querySelector('pre')

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  const nome = frm.inNome.value
  const peso = Number(frm.inPeso.value)

  if(verApostaExiste(peso)){
    alert("Alguém já apostou esse peso informe outro")
    frm.inPeso.focus()
    return
  }

  if(verNomeExiste(nome)){
    alert("Ops... Você já apostou, nao pode apostar novamente ")
    frm.inNome.focus()
    return
  }

  if(localStorage.getItem("melanciaNome")){ // se houver dados em local storage
    //obtém o conteúdo ja salvo e acrescenta ";" + dados da aposta 
    const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome
    const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso
    localStorage.setItem("melanciaNome", melanciaNome) // salva os dados
    localStorage.setItem("melanciaPeso", melanciaPeso)
  }else{
    localStorage.setItem("melanciaNome", nome)
    localStorage.setItem("melanciaPeso", peso)
  }
  
  mostrarApostas() // chama function que mostra as apostas ja salvas 
  frm.reset() // limpa o form
  frm.inNome.focus() // joga o foco para campo inNome
  
})

verApostaExiste = (peso) => {
  if (localStorage.getItem("melanciaPeso")) { // se existir dados em local storage 
    //obtem seu conteudo e a string é dividida em itens de vetor a cada ";"
    const pesos = localStorage.getItem("melanciaPeso").split(";")
    //o peso deve ser convertido em strig pois o vetor contem string
    return pesos.includes(peso.toString())
  }else {
    return false
  }
}

verNomeExiste = (nome) => {
  if (localStorage.getItem("melanciaNome")) {
    const nomes = localStorage.getItem("melanciaNome").split(";")
    return nomes.includes(nome.toString())
  }else{
    false
  }
}

mostrarApostas = () => {
  if (!localStorage.getItem("melanciaNome")) {
    //limpa o espaço de exibição das apostas (para quando "Limpar apostas")
    respLista.innerText =""
    return // retorna ( nao executa os comando abaixo)
  }

  const nomes = localStorage.getItem("melanciaNome").split(";")
  const pesos = localStorage.getItem("melanciaPeso").split(";")

  let linhas = ""

  for (let i = 0; i < nomes.length; i++){
    linhas += nomes[i] + "-" + pesos[i] + "gr \n"
  }

  respLista.innerText = linhas
}
window.addEventListener("load", mostrarApostas)

frm.btVencedor.addEventListener("click", () => {
  //se nao há apostas armazenadas em localStorage
  if(!localStorage.getItem("melanciaNome")){
    alert("Não há apostas cadatradas")
    return // retorna ( não executa os comandos abaixo)
  }

  // solicta o peso correto da melancia
   const pesoCorreto = Number(prompt("Qual o peso correto da melancia?: "))

   //se não informou retorna
   if(pesoCorreto == 0 || isNaN(pesoCorreto)){
    return
   }

   //obtém os dados armazenados, separando-os em elemento vetor
   const nomes = localStorage.getItem("melanciaNome").split(";")
   const pesos = localStorage.getItem("melanciaPeso").split(";")

   // valor inicial para vencendor é da priemira aposta
   let vencedorNome = nomes[0]
   let vencedorPeso = Number(pesos[0])

   //percorre as apostas 
   for (let i = 1 ; i < nomes.length ; i++) {
    // calcula a diferença de peso do vencendor e da aposta atual 
    const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
    const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)
    // se a diferença da aposta atul (no for) for menor qu a do vencedor 
    if(difAposta < difVencedor){
      vencedorNome = nomes[i] // troca o vencedor 
      vencedorPeso = Number(pesos[i]) // para este elemento
    }
   }

   //mostrar mensagem com dados do vencedor 

   let mensagem = "Resultado - Peso Correto = " + pesoCorreto + "gr"
   mensagem += "\n --------------------------------------------------"
   mensagem += "\nVencedor: " + vencedorNome
   mensagem += "\nAposta: " + vencedorPeso + "gr"
   alert(mensagem)
   
})

frm.btLimpar.addEventListener("click", () => {
  //solicita confirmação para excluir as apostas
  if(confirm("confirma exclusão de todas as apostas")){
    localStorage.removeItem("melanciaNome") // remove as variaveis salvas
    localStorage.removeItem("melanciaPeso") // rem LocalStorage
    mostrarApostas()                        // exibea listagem vazia
  }
})