const frm = document.querySelector('form')
const resposta = document.querySelector('h2')
const convenio = document.querySelector("#pConvenio")

frm.rbSim.addEventListener("change", () => {
  convenio.className = "exibe-linha"                     // exibe o parágrafo em uma linha (display: block)
})

frm.rbNao.addEventListener("change", () => {
  convenio.className = "oculta"                        // oculta o parágrafo
})

frm.inCalcular.addEventListener("click", (e) => {
  e.preventDefault()
  const valor = Number(frm.inValor.value)    // obtém o valor do campo vacina
  if(valor == ""){
    alert("Favor digitar o valor da vacina")
    frm.inValor.focus()
    return
  }
  const desconto = calcularDesconto(valor)     // chama funções e atribui
  const pagar = valor - desconto
  
  resposta.innerText = "Desconto é: " + "R$ " + Number(desconto).toFixed(2) + "\nValor a pagar é: " + "R$ " + pagar.toFixed(2)
})

// função recebe o valor como paramentro 
const calcularDesconto = (abatimento) =>{
  
  let resultado = ""

  if (frm.rbNao.checked) {
    resultado =  abatimento * 0.10
  }else if ( frm.inConvenio.selectedIndex == 0){
     resultado = abatimento * 0.20
  }else{
    resultado = abatimento * 0.50
  }
  
  return resultado
}



