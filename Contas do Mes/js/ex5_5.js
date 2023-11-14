const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" 
let numContas = 0 // inicializa o contador 
let valorTotal = 0 // acumulador ( variaveis globais )

frm.addEventListener("submit", (e) => {
  e.preventDefault()

  
  const descricao = frm.inDescricao.value // obtem os dados da conta 
  const valor = Number(frm.inValor.value)

  numContas++ // adiciona valores ao contador e acumuladorz
  valorTotal = valorTotal + valor //ou valorTotal += valor 
  resposta = resposta + descricao + " - R$ " + valor.toFixed(2) +"\n"

  resp1.innerText = `${resposta} ---------------------`
  resp2.innerText = `${numContas} Contas(s) - Total R$: ${valorTotal.toFixed(2)}` 

  frm.inDescricao.value = "" // limpa campos do form
  frm.inValor.value = ""
  frm.inDescricao.focus() //posiciona no campo inDescricao do form
})