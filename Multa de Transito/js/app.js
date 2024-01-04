const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const resposta = document.querySelector("h3")

frm.inCalculo.addEventListener("click", (e) => {
  e.preventDefault()

  
  const data = frm.inData.value
  const multa = frm.inMulta.value
  
  //condição para verificar se os campos estão preenchidos
  if (data === "" || multa === "") {
   alert("Favor preencher os campos corretamente")
   return
  }

  //Declara Variavel Tipo date 
  const dataLimite = new Date()

  // Obtém as partes da data da multa
  const partes = data.split('-')

  // "seta" as partes da data 
  dataLimite.setDate(Number(partes[2]))
  dataLimite.setMonth(Number(partes[1])-1)
  dataLimite.setFullYear(Number(partes[0]))

  //obtém o dia da multa
  const dia = dataLimite.getDate()
  //aumeta 90 dias na data da multa
  dataLimite.setDate(dia+90)
  
  const mes = dataLimite.getMonth() + 1
  const ano = dataLimite.getFullYear()

  const desconto = multa - (multa * 0.20)

  resp.innerText = "Data limite para pagamento com Descont:" + (dia < 10 ? "0" + dia : dia ) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano
  resposta.innerText = "Valor com Desconto R$: " + desconto.toFixed(2)
  
})