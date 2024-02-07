const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.inAdicionar.addEventListener("click", (e) => {
  e.preventDefault()

  const produto = frm.inProduto.value

  if (localStorage.getItem("nomeProduto")) {          // se houver dados no localStorage
    //obtém o conteúdo ja salvo e accrescentar ";"
    const nomeProduto = localStorage.getItem("nomeProduto") + ";" + produto
    localStorage.setItem("nomeProduto", nomeProduto) // salva os dados
  }else{                                             // senao é um novo produto 
    localStorage.setItem("nomeProduto",produto)      // salva sem  ";"
  }

  //obtém os dados aramazenados, separando em elementos de vetor 
  const lista = localStorage.getItem("nomeProduto").split(";") 
  lista.sort()                                       // ordena em ordem alfabética
  
  let resultado = ''
  for(let i = 0 ; i < lista.length; i++) {
    resultado += lista[i] + "\n"
  }

  resp.innerText = "Produtos Adicionados:\n" + "-".repeat(20) + "\n" + resultado
})

//remove o conteudo da lista
frm.inLimpar.addEventListener("click", () => {
 localStorage.removeItem("nomeProduto")             // remove as variavéis salvas 
})