const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const clubes = []

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const times = document.getElementById('inClube').value
  if (times === "" ) {
    alert("Digite o nome do Time")
    return
  }
  clubes.push(times)
  frm.inClube.value = ""
  frm.inClube.focus()
  frm.inListas.dispatchEvent(new Event("click"))
})

frm.inListas.addEventListener("click", (e) => {
  e.preventDefault()
  let resposta = ""
  clubes.forEach((clube, i) => {
    resposta += `${i+1} - ${clube}\n`
    resp.innerText = resposta 
    
  })
})

frm.inTabela.addEventListener("click", (e) => {
  e.preventDefault()
  if(clubes.length % 2 == 1) {
    alert("Digitar mais um Time")
    return
  }
  
  const clubesClone = [...clubes]
  
  let resultado = ""
 
  for (const clube of clubesClone) {
    
    const timeVisitante = clubesClone.pop()
    resultado += `${clube} x ${timeVisitante}\n`
    resp.innerText = resultado
  }
   


})
