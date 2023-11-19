const frm = document.querySelector('form')
const resp1 = document.querySelector('span')
const resp2 = document.querySelector('pre')

const pacientes = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const nome = frm.inPaciente.value
  pacientes.push(nome) // adiciona nome no final do vetor 
  let lista ='' //string para concatenar pacientes

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i+1}. ${pacientes[i]}\n`
  }

  resp2.innerText = lista // exibe a lista de pacientes na pagina 
  frm.inPaciente.value = "" // limpa o conteudo do campo do input do formulario
  frm.inPaciente.focus() // posiciona o cursor no campo
})

// adicionar um ouvinte para o evento click no tburgencia que esta no form
frm.inUrgencia.addEventListener("click", () => {
  //verifica se as validações do form estao ok( no caso , paciente is requerid)
  if(!frm.checkValidity()){
    alert("informe o nome do paciente a ser atendido em carater de urgência")
    frm.inPaciente.focus() // posiciona o curso no campo inPaciente 
    return
  }

  const nome = frm.inPaciente.value
  pacientes.unshift(nome)
  let lista =""

  // foreach aplicado sobre o array pacientes

  pacientes.forEach ((paciente,i) => (lista += `${i+1}. ${pacientes[i]}\n`))
  resp2.innerText = lista
  frm.inPaciente.value = ""
  frm.inPaciente.focus()
})

frm.inAtender.addEventListener("click", () => {
  // se o tamanho do vetor for 0 
  if (pacientes.length == 0){
    alert("não ha pacientes na lista de espera")
    frm.inPaciente.focus()
    return
  }

  const atender = pacientes.shift() // remove o inicio da fila ( e obtem nome )
  resp1.innerText = atender  // exibe o nome do paciente em atendimento 
  let lista = "" //string para concatenar os pacientes 
  pacientes.forEach ((paciente,i) => (lista += `${i+1}. ${pacientes[i]}\n`))
  resp2.innerText = lista 
  frm.inPaciente.value = ""
  

})