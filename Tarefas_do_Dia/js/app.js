const frm = document.querySelector("form")
const dvQuadro = document.querySelector("#dvQuadro")

frm.addEventListener("submit", (e) => {
  e.preventDefault()                              // evita o envio do form

  const tarefa = frm.inTarefa.value               // obtém o conteúdo digitado      

  const h5 = document.createElement("h5")         // cria o elemnto no HTML h5
  const texto = document.createTextNode(tarefa)   // cria um texto
  h5.appendChild(texto)                           // define que texo será filho de h5
  dvQuadro.appendChild(h5)                       // define que o h5 será filho de dvQuadro

  frm.inTarefa.value = ""                        // limpa o campo de edição
  frm.inTarefa.focus()                           // joga o cursor neste campo
})

